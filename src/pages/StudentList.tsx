import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

const StudentList: React.FC = () => {
  const navigate = useNavigate();

  const handleAddStudent = () => {
    navigate('/student-info');  // 「＋」ボタンで講習生情報画面に遷移
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* 固定検索バー */}
      <div className="p-4 bg-white flex justify-center items-center flex-none border-b shadow">
        <input type="text" placeholder="講習生検索" className="border p-2 w-1/2 rounded focus:ring-2 focus:ring-blue-700" />
        <button className="ml-2 p-2 border rounded bg-white hover:bg-gray-100">🔍</button>
        <button className="ml-2 p-2 border rounded bg-white hover:bg-gray-100">⇅</button>
      </div>

      {/* リスト部分のみスクロール */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="w-full max-w-md mx-auto space-y-4">
          {[...Array(10)].map((_, index) => (
            <div key={index} className="flex rounded shadow bg-white">
              <div className="w-1/3 bg-blue-700 text-white flex items-center justify-center p-4 rounded-l">
                講習生画像
              </div>
              <div className="w-2/3 p-4 text-gray-800">
                <p>カテゴリ</p>
                <p>クラス</p>
                <p>特徴</p>
                <p>最終更新日</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 固定フッター */}
      <Footer />

      {/* 追加ボタン */}
      <button
        onClick={handleAddStudent}
        className="fixed bottom-8 right-8 w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition"
      >
        <span className="text-2xl">+</span>
      </button>
    </div>
  );
};

export default StudentList;
