import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
  setIsAuthenticated: (auth: boolean) => void;
}

const InstructorLogin: React.FC<Props> = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('ログイン処理開始');
    const dummyToken = 'dummy-token';
    localStorage.setItem('token', dummyToken);
    setIsAuthenticated(true);
    navigate('/students');  // ← ここで直接遷移
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center tracking-wide">
          インストラクター ログイン
        </h1>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              ユーザーID（メールアドレス）
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-800"
              placeholder="user@example.com"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              パスワード
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-700 text-gray-800"
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-700 text-white font-medium rounded hover:bg-blue-800 transition"
          >
            ログイン
          </button>
        </form>
        <div className="text-sm text-center text-gray-500 mt-5">
          <a href="#" className="hover:underline">
            ユーザーID・パスワードをお忘れの方
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstructorLogin;
