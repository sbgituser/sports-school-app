import React from 'react';

const StudentInfo: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">講習生情報</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">名前</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="名前" />
          </div>
          <div>
            <label className="block text-gray-700">カテゴリ</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="カテゴリ" />
          </div>
          <div>
            <label className="block text-gray-700">クラス</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="クラス" />
          </div>
          <div>
            <label className="block text-gray-700">特徴</label>
            <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="特徴" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
