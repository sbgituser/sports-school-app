import React, { useState } from "react";
import InstructorDashboard from "./InstructorDashboard";

export default function InstructorLogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (id === "admin" && password === "pass") {
      setIsLoggedIn(true);
    } else {
      alert("ログイン失敗！");
    }
  };

  if (isLoggedIn) {
    return <InstructorDashboard />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">インストラクター ログイン</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1" htmlFor="id">ID</label>
            <input
              type="text"
              id="id"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="インストラクターID"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1" htmlFor="password">パスワード</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="パスワード"
            />
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
}
