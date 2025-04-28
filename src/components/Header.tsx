import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title: string;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ title, setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);  // ここで認証状態を更新
    navigate('/login');  // React Routerで遷移
  };

  return (
    <header className="bg-white shadow-md border-b p-4 flex justify-between items-center flex-none">
      <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
      <button
        onClick={handleLogout}
        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
      >
        ログアウト
      </button>
    </header>
  );
};

export default Header;
