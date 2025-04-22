import React from 'react';

export function Button({ children, onClick, variant = 'default' }: { children: React.ReactNode; onClick?: () => void; variant?: string }) {
  const style = variant === 'secondary' ? 'bg-gray-200' : 'bg-blue-500 text-white';
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded ${style}`}>
      {children}
    </button>
  );
}
