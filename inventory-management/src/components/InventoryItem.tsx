import React from 'react';

interface ItemProps {
  item: {
    name: string;
    quantity: number;
  };
}

export default function InventoryItem({ item }: ItemProps) {
  return (
    <li className="flex justify-between p-4 border rounded shadow">
      <span>{item.name}</span>
      <span>{item.quantity}</span>
    </li>
  );
}
