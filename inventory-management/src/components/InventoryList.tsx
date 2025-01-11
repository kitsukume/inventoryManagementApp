import React from 'react';
import InventoryItem from './InventoryItem';

interface Item {
  id: number;
  name: string;
  quantity: number;
}

export default function InventoryList({ items }: { items: Item[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
