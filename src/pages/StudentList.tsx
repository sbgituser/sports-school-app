import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import featherIcon from '/student_icon.svg';

const StudentList: React.FC = () => {
  const navigate = useNavigate();

  const allStudents = [
    { id: 1, name: '講習生1', category: 'カテゴリA', className: 'クラス1', thumbnail: '/thumbnail1.png', updatedAt: '2025-04-01' },
    { id: 2, name: '講習生2', category: 'カテゴリB', className: 'クラス2', thumbnail: '/thumbnail2.png', updatedAt: '2025-04-02' },
    { id: 3, name: '講習生3', category: 'カテゴリC', className: 'クラス3', thumbnail: '/thumbnail3.png', updatedAt: '2025-04-03' },
    { id: 4, name: '講習生4', category: 'カテゴリA', className: 'クラス1', thumbnail: '/thumbnail1.png', updatedAt: '2025-04-04' },
    { id: 5, name: '講習生5', category: 'カテゴリB', className: 'クラス2', thumbnail: '/thumbnail2.png', updatedAt: '2025-04-05' },
    { id: 6, name: '講習生6', category: 'カテゴリC', className: 'クラス3', thumbnail: '/thumbnail3.png', updatedAt: '2025-04-06' },
    { id: 7, name: '講習生7', category: 'カテゴリA', className: 'クラス1', thumbnail: '/thumbnail1.png', updatedAt: '2025-04-07' },
    { id: 8, name: '講習生8', category: 'カテゴリB', className: 'クラス2', thumbnail: '/thumbnail2.png', updatedAt: '2025-04-08' },
    { id: 9, name: '講習生9', category: 'カテゴリC', className: 'クラス3', thumbnail: '/thumbnail3.png', updatedAt: '2025-04-09' },
    { id: 10, name: '講習生10', category: 'カテゴリA', className: 'クラス1', thumbnail: '/thumbnail1.png', updatedAt: '2025-04-10' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [sortKey, setSortKey] = useState<'name' | 'updatedAt'>('name');

  const filteredStudents = allStudents
    .filter(student =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory ? student.category === selectedCategory : true) &&
      (selectedClass ? student.className === selectedClass : true)
    )
    .sort((a, b) => {
      if (sortKey === 'name') {
        return a.name.localeCompare(b.name);
      } else {
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      }
    });

  return (
    <div className="flex flex-col h-full bg-gradient-to-b from-gray-100 to-white">
      <div className="p-4 sticky top-0 bg-gradient-to-b from-gray-100 to-white z-10">
        <div className="flex flex-wrap items-center space-x-2 mb-2">
          <input
            type="text"
            placeholder="名前で検索"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 min-w-[120px] p-2 border border-gray-300 rounded"
          />
          <button
            onClick={() => setSortKey('name')}
            className={`whitespace-nowrap px-4 py-2 rounded ${sortKey === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            名前順
          </button>
          <button
            onClick={() => setSortKey('updatedAt')}
            className={`whitespace-nowrap px-4 py-2 rounded ${sortKey === 'updatedAt' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            更新日順
          </button>
        </div>

        <div className="flex space-x-2">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">カテゴリ選択</option>
            <option value="カテゴリA">カテゴリA</option>
            <option value="カテゴリB">カテゴリB</option>
            <option value="カテゴリC">カテゴリC</option>
          </select>

          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">クラス選択</option>
            <option value="クラス1">クラス1</option>
            <option value="クラス2">クラス2</option>
            <option value="クラス3">クラス3</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col space-y-4 overflow-y-auto p-4 pt-2">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            onClick={() => navigate('/student-info')}
            className="bg-white p-4 rounded shadow-md cursor-pointer hover:bg-gray-100 flex items-center space-x-4"
          >
            <img src={featherIcon} alt="thumbnail" className="w-16 h-16 object-cover rounded" />
            <div className="flex flex-col">
              <div className="font-semibold">{student.name}</div>
              <div className="text-sm text-gray-500">{student.category} - {student.className}</div>
              <div className="text-xs text-gray-400">最終更新: {student.updatedAt}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-24 right-4">
        <button
          onClick={() => navigate('/student-info')}
          className="bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600"
        >
          ＋
        </button>
      </div>
    </div>
  );
};

export default StudentList;
