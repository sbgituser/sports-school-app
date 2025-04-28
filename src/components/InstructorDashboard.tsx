import React from "react";

export default function InstructorDashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-center text-green-800 mb-6">
          インストラクター ダッシュボード
        </h2>
        <p className="text-center text-gray-600">
          ここに講習生一覧や進捗管理機能を追加していきます。
        </p>
      </div>
    </div>
  );
}
