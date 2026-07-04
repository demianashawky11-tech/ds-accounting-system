import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Sidebar = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const menuItems = [
    { path: '/dashboard', key: 'dashboard' },
    { path: '/clients', key: 'clients' },
    { path: '/documents', key: 'documents' },
    { path: '/calendar', key: 'calendar' },
    { path: '/tasks', key: 'tasks' }, // أضفنا صفحة المهام هنا
    { path: '/reports', key: 'reports' },
    { path: '/settings', key: 'settings' },
  ];

  return (
    <aside style={{
      width: '260px',
      minWidth: '260px',
      backgroundColor: '#1e293b',
      color: '#ffffff',
      height: '100vh',
      padding: '20px 15px',
      boxShadow: isRtl ? '-2px 0 5px rgba(0,0,0,0.05)' : '2px 0 5px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <div style={{ 
        padding: '10px 0', 
        fontSize: '18px', 
        fontWeight: 'bold', 
        borderBottom: '1px solid #334155', 
        marginBottom: '20px',
        textAlign: 'center'
      }}>
        {t('main_menu')}
      </div>
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            style={({ isActive }) => ({
              padding: '12px 15px',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: '6px',
              backgroundColor: isActive ? '#3b82f6' : 'transparent',
              display: 'block',
              transition: 'background 0.2s',
              textAlign: 'start'
            })}
          >
            {/* التعديل هنا سيقوم بجلب الترجمة تلقائياً */}
            {t(`navigation.${item.key}`)}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;