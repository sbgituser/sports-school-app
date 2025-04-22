import React from 'react';

export function Input({ placeholder, type = 'text', value, onChange }: { placeholder: string; type?: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border rounded px-2 py-1"
    />
  );
}
