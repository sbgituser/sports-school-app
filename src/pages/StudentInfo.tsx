import React from 'react';

const StudentInfo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row h-full bg-gradient-to-b from-gray-100 to-white p-4">
      <div className="flex flex-col w-full md:w-1/2 items-center space-y-4">
        <div className="bg-blue-500 w-48 h-48 flex items-center justify-center text-white">自己紹介画像</div>
        <div className="w-48 p-2 border rounded text-center">名前</div>
        <div className="w-48 p-4 border rounded">
          <div>[装備A]</div>
          <div>[装備B]</div>
          <div>[装備C]</div>
        </div>
        <div className="w-48 p-4 border rounded">
          [総合評価]
        </div>
      </div>

      <div className="flex flex-col w-full md:w-1/2 space-y-4">
        <div className="flex flex-col space-y-2">
          <div className="flex justify-between">
            <button className="bg-gray-400 text-white px-2 py-1 rounded">カテゴリアイコン</button>
            <div>
              <select className="border rounded p-1">
                <option>カテゴリ</option>
              </select>
            </div>
          </div>
          <div className="flex justify-between">
            <div>タイプ</div>
            <select className="border rounded p-1">
              <option>クラス</option>
            </select>
          </div>
          <div>Lv</div>
          <div>[評価の合計]</div>
          <div>次のレベル</div>
          <div>[目標評価]</div>
        </div>

        <div className="bg-gray-400 text-white p-2 rounded space-y-1">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="flex justify-between">
              <span>[項目{(i+1).toString().padStart(2,'0')}]</span>
              <span>[評価{(i+1).toString().padStart(2,'0')}]</span>
            </div>
          ))}
        </div>

        <div className="bg-blue-500 w-full h-48 flex items-center justify-center text-white mt-4">棒グラフ</div>
      </div>
    </div>
  );
};

export default StudentInfo;
