import React from 'react';

interface ItemProps {
  item: { id: number; name: string; quantity: number };
  onDelete: (id: number) => void;
}

export default function InventoryItem({ item, onDelete }: ItemProps) {
  return (
    <li className="flex justify-between p-4 border rounded shadow">
      <span>{item.name} ({item.quantity})</span>
      <button
        onClick={() => onDelete(item.id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </li>
  );
}
