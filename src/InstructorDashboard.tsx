import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function InstructorDashboard() {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [students, setStudents] = useState([
    { id: 1, name: "Taro Yamada", class: "A", progress: [{ item: "Item 01", level: 3 }, { item: "Item 02", level: 2 }] },
    { id: 2, name: "Hanako Suzuki", class: "B", progress: [{ item: "Item 01", level: 4 }, { item: "Item 02", level: 3 }] },
  ]);

  const login = () => {
    // mock login
    if (studentId === "admin" && password === "pass") setLoggedIn(true);
  };

  return (
    <div className="p-4 grid gap-4">
      {!loggedIn ? (
        <Card className="max-w-md mx-auto">
          <CardContent className="grid gap-2 p-4">
            <h1 className="text-xl font-bold">インストラクター ログイン</h1>
            <Input placeholder="ID" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
            <Input placeholder="パスワード" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={login}>ログイン</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          <h2 className="text-lg font-bold">講習生一覧</h2>
          {students.map((student) => (
            <Card key={student.id} className="bg-white p-4 shadow-md rounded-xl">
              <CardContent className="grid gap-2">
                <div className="font-semibold">{student.name}（Class {student.class}）</div>
                {student.progress.map((p, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{p.item}</span>
                    <span>Level {p.level}</span>
                  </div>
                ))}
                <Button variant="secondary">進捗編集</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
