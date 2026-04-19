import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Order {
  id: string;
  customerName: string;
  phone: string;
  address: string;
  notes: string;
  items: OrderItem[];
  total: number;
  paymentMethod: string;
  status: string;
  createdAt: string;
}

const orders: Order[] = [];

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  app.post('/api/orders', (req, res) => {
    const { customerName, phone, address, notes, items, total, paymentMethod } = req.body;
    
    if (!items || items.length === 0) {
      return res.status(400).json({ error: 'No items in order' });
    }

    const newOrder: Order = {
      id: Math.random().toString(36).substr(2, 9),
      customerName,
      phone,
      address,
      notes,
      items,
      total,
      paymentMethod,
      status: 'pending',
      createdAt: new Date().toISOString()
    };

    orders.push(newOrder);
    res.status(201).json({ success: true, orderId: newOrder.id });
  });

  app.get('/api/orders/:id', (req, res) => {
    const order = orders.find(o => o.id === req.params.id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
