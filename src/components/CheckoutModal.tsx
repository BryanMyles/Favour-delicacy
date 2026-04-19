import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { X, CheckCircle2, CreditCard, Landmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, totalPrice, clearCart } = useCart();
  
  const [step, setStep] = useState<'details' | 'payment' | 'success'>('details');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    notes: '',
  });
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'transfer'>('card');
  const [isLoading, setIsLoading] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('payment');
  };

  const handlePayment = async () => {
    setIsLoading(true);
    
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          paymentMethod,
          items,
          total: totalPrice
        })
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setOrderId(data.orderId);
        setStep('success');
        clearCart();
      } else {
        alert('An error occurred. Please try again.');
        setStep('details');
      }
    } catch (err) {
      alert('Network error. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-3xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="font-display font-bold text-2xl">
            {step === 'details' && 'Checkout Details'}
            {step === 'payment' && 'Payment'}
            {step === 'success' && 'Order Successful'}
          </h2>
          {step !== 'success' && (
            <button onClick={onClose} className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
              <X size={20} />
            </button>
          )}
        </div>

        <div className="p-6 overflow-y-auto">
          {step === 'details' && (
            <form id="checkout-form" onSubmit={handleDetailsSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input 
                  required
                  type="text" 
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input 
                  required
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none" 
                  placeholder="09012345678"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address *</label>
                <textarea 
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none resize-none" 
                  placeholder="123 Main Street..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Order Notes (Optional)</label>
                <textarea 
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full border-gray-300 rounded-xl px-4 py-3 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-brand-orange transition-all outline-none resize-none" 
                  placeholder="E.g. Extra spicy, call upon arrival"
                />
              </div>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-6 text-left">
              <div className="bg-orange-50 text-orange-800 p-4 rounded-xl text-center font-bold text-xl border border-orange-100">
                Amount to Pay: ₦{totalPrice.toLocaleString()}
              </div>

              <div className="space-y-3">
                <p className="font-medium text-gray-700">Select Payment Method</p>
                <label className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer border-2 transition-all ${paymentMethod === 'card' ? 'border-brand-orange bg-orange-50 text-brand-orange' : 'border-gray-100 hover:bg-gray-50'}`}>
                  <input type="radio" name="payment" value="card" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="sr-only" />
                  <CreditCard />
                  <span className="font-bold flex-1">Pay with Card (Paystack)</span>
                  {paymentMethod === 'card' && <CheckCircle2 className="text-brand-orange" size={20} />}
                </label>
                
                <label className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer border-2 transition-all ${paymentMethod === 'transfer' ? 'border-brand-orange bg-orange-50 text-brand-orange' : 'border-gray-100 hover:bg-gray-50'}`}>
                  <input type="radio" name="payment" value="transfer" checked={paymentMethod === 'transfer'} onChange={() => setPaymentMethod('transfer')} className="sr-only" />
                  <Landmark />
                  <span className="font-bold flex-1">Bank Transfer</span>
                  {paymentMethod === 'transfer' && <CheckCircle2 className="text-brand-orange" size={20} />}
                </label>
              </div>

              {paymentMethod === 'transfer' && (
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 mt-4 text-center">
                  <p className="text-sm text-gray-500 mb-2">Please transfer exactly <strong>₦{totalPrice.toLocaleString()}</strong> to:</p>
                  <div className="bg-white p-4 rounded-lg shadow-sm border mb-4">
                    <p className="font-medium text-gray-600">Bank: <span className="text-gray-900 font-bold">Guaranty Trust Bank (GTB)</span></p>
                    <p className="font-medium text-gray-600">Account No: <span className="text-gray-900 font-bold text-lg">0123456789</span></p>
                    <p className="font-medium text-gray-600">Name: <span className="text-gray-900 font-bold">Favoured Delicacy</span></p>
                  </div>
                  <p className="text-xs text-brand-orange font-medium animate-pulse">Click "I have paid" after making the transfer.</p>
                </div>
              )}
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-8">
              <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={48} />
              </div>
              <h3 className="font-display font-bold text-3xl mb-2">Order Confirmed!</h3>
              <p className="text-gray-500 mb-6">Your order #{orderId.slice(0, 6).toUpperCase()} has been placed successfully.</p>
              <div className="bg-gray-50 rounded-xl p-4 inline-block mb-8 border mx-auto">
                <p className="text-sm font-medium text-gray-600 flex items-center justify-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
                  </span>
                  Preparing your meal...
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-gray-100 bg-gray-50 mt-auto">
          {step === 'details' && (
            <button 
              type="submit" 
              form="checkout-form"
              className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-orange-hover transition-colors shadow-lg shadow-orange-500/30"
            >
              Continue to Payment
            </button>
          )}
          {step === 'payment' && (
            <button 
              onClick={handlePayment}
              disabled={isLoading}
              className="w-full bg-brand-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg shadow-black/20 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : paymentMethod === 'card' ? 'Pay Now' : 'I have paid'}
            </button>
          )}
          {step === 'success' && (
            <button 
              onClick={() => {
                setStep('details');
                onClose();
              }}
              className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-orange-hover transition-colors shadow-lg shadow-orange-500/30"
            >
              Back to Menu
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
