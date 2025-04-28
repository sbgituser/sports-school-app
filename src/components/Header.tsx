import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // トークンを削除
    setIsAuthenticated(false);
    navigate('/login'); // ログインページへリダイレクト
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
      {isAuthenticated && (
        <button onClick={handleLogout}>ログアウト</button>
      )}
    </header>
  );
}

export default Header;
