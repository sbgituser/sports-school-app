import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import InstructorLogin from './components/InstructorLogin';
import Header from './components/Header';
import Home from './pages/Home'; // 例としてHomeページ
// 必要に応じて他のページもインポート

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // アプリ起動時にlocalStorageのトークンを確認して認証状態をセット
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      {/* ヘッダーは全ページ共通で表示 */}
      <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        {/* 認証が必要なページ */}
        <Route
          path="/"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
        {/* ログインページ */}
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to="/" replace />
            ) : (
              <InstructorLogin setIsAuthenticated={setIsAuthenticated} />
            )
          }
        />
        {/* 他のルートがあればここに追加 */}
      </Routes>
    </Router>
  );
};

export default App;
