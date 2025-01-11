'use client';

import { useState, useEffect } from 'react';
import InventoryList from '@/components/InventoryList';
import AddItemForm from '@/components/AddItemForm';

interface Item {
  id: number;
  name: string;
  quantity: number;
}

export default function HomePage() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    fetch('/api/inventory')
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const addItem = async (item: { name: string; quantity: number }) => {
    const response = await fetch('/api/inventory', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item),
    });
    const newItem = await response.json();
    setItems([...items, newItem]);
  };

  const deleteItem = async (id: number) => {
    await fetch(`/api/inventory/${id}`, { method: 'DELETE' });
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <AddItemForm onAdd={addItem} />
      <InventoryList items={items} onDelete={deleteItem} />
    </main>
  );
}
