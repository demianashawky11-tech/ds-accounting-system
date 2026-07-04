import React from 'react';
import { useTranslation } from 'react-i18next';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ children }) => {
  const { i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      style={{ 
        display: 'flex', 
        flexDirection: 'row', 
        width: '100%', 
        height: '100vh', 
        overflow: 'hidden', 
        backgroundColor: '#f8fafc' 
      }}
    >
      {/* القائمة الجانبية */}
      <Sidebar />
      
      {/* الجزء المتبقي للشاشة (الهيدر + المحتوى المتغير) */}
      <div style={{ 
        flex: 1, 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        overflow: 'hidden' 
      }}>
        <Header />
        <main style={{ 
          flex: 1, 
          padding: '24px', 
          overflowY: 'auto'
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;