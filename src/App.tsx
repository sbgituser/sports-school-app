import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import InstructorLogin from './components/InstructorLogin';
import StudentList from './pages/StudentList';
import PlaceholderPage from './pages/PlaceholderPage';
import StudentInfo from './pages/StudentInfo';
import Header from './components/Header';
import Footer from './components/Footer';

const AppContent: React.FC<{ isAuthenticated: boolean; setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>> }> = ({ isAuthenticated, setIsAuthenticated }) => {
  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/login';

  const getTitle = () => {
    switch (location.pathname) {
      case '/students':
        return '講習生一覧';
      case '/classes':
        return 'クラス一覧';
      case '/items':
        return '項目一覧';
      case '/notices':
        return 'お知らせ一覧';
      case '/student-info':
        return '講習生情報';
      default:
        return '';
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {showHeaderFooter && (
        <Header
          title={getTitle()}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route
            path="/login"
            element={
              isAuthenticated ? <Navigate to="/students" replace /> : <InstructorLogin setIsAuthenticated={setIsAuthenticated} />
            }
          />
          <Route
            path="/students"
            element={
              isAuthenticated ? <StudentList /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/student-info"
            element={
              isAuthenticated ? <StudentInfo /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/classes"
            element={
              isAuthenticated ? <PlaceholderPage title="クラス一覧" /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/items"
            element={
              isAuthenticated ? <PlaceholderPage title="項目一覧" /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/notices"
            element={
              isAuthenticated ? <PlaceholderPage title="お知らせ一覧" /> : <Navigate to="/login" replace />
            }
          />
          <Route
            path="/"
            element={<Navigate to={isAuthenticated ? "/students" : "/login"} replace />}
          />
        </Routes>
      </div>
      {showHeaderFooter && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return (
    <Router>
      <AppContent
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
};

export default App;
