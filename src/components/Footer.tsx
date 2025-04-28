import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const menus = [
    { label: '講習生一覧', path: '/students' },
    { label: 'クラス一覧', path: '/classes' },
    { label: '項目一覧', path: '/items' },
    { label: 'お知らせ', path: '/notices' },
  ];

  return (
    <footer className="bg-white shadow-md border-t p-4 flex justify-around flex-none">
      {menus.map((menu, i) => (
        <button
          key={i}
          onClick={() => navigate(menu.path)}
          className="text-gray-700 text-center"
        >
          <div className="text-sm">{menu.label}アイコン</div>
        </button>
      ))}
    </footer>
  );
};

export default Footer;
