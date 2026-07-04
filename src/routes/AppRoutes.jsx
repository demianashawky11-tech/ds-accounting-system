import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import ClientsPage from '../pages/Clients/ClientsPage';
import DocumentsPage from '../pages/Documents/DocumentsPage';
import CalendarPage from '../pages/Calendar/CalendarPage';
import TasksPage from '../pages/Tasks/TasksPage'; // استيراد صفحة المهام الجديدة

// المكونات المؤقتة التي سيتم بناؤها لاحقاً
const ReportsPage = () => <div style={{ fontSize: '20px', color: '#1e293b', textAlign: 'center', marginTop: '40px' }}>📊 شاشة التقارير المالية والمحاسبية</div>;
const SettingsPage = () => <div style={{ fontSize: '20px', color: '#1e293b', textAlign: 'center', marginTop: '40px' }}>⚙️ شاشة إعدادات النظام والمكتب</div>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      
      <Route path="/dashboard" element={<MainLayout><DashboardPage /></MainLayout>} />
      <Route path="/clients" element={<MainLayout><ClientsPage /></MainLayout>} />
      <Route path="/documents" element={<MainLayout><DocumentsPage /></MainLayout>} />
      <Route path="/calendar" element={<MainLayout><CalendarPage /></MainLayout>} />
      
      {/* ربط صفحة المهام */}
      <Route path="/tasks" element={<MainLayout><TasksPage /></MainLayout>} />
      
      <Route path="/reports" element={<MainLayout><ReportsPage /></MainLayout>} />
      <Route path="/settings" element={<MainLayout><SettingsPage /></MainLayout>} />
    </Routes>
  );
};

export default AppRoutes;