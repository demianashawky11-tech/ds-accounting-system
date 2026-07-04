import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ClientsPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClient, setSelectedClient] = useState(null);
  const [activeTab, setActiveTab] = useState('basic'); // التبديل بين أقسام ملف العميل

  // بيانات نموذجية مطابقة للمرحلة الثانية بالكامل (مكاتب المحاسبة المصرية والعربية)
  const dummyClients = [
    {
      id: 1,
      basic: {
        idNum: 'CLI-2026-001',
        name: 'شركة الهدى للتجارة والاستيراد',
        activity: 'تجارة مواد غذائية وتصدير',
        category: 'شركات أموال - ذ.م.م',
        manager: 'أحمد مصطفى كامل',
        phone1: '01012345678',
        phone2: '0233445566',
        email: 'info@alhoda.com',
        address: '42 شارع التحرير، الدقي',
        governorate: 'الجيزة',
        city: 'الدقي',
        notes: 'العميل يلتزم بتقديم الفواتير قبل يوم 5 من كل شهر.'
      },
      tax: {
        fileNum: '999/888/111',
        registerNum: '123-456-789',
        authority: 'مأمورية ضرائب الشركات المساهمة بالقاهرة',
        startDate: '2018-01-15',
        status: 'ملتزم - تم تقديم فحص لعام 2024'
      },
      commercial: {
        num: '102030',
        issueDate: '2018-02-01',
        expiryDate: '2028-02-01',
        issuer: 'مكتب سجل تجاري جنوب القاهرة'
      },
      taxCard: {
        num: '852963741',
        issueDate: '2018-01-20',
        expiryDate: '2028-01-20'
      },
      vat: {
        isRegistered: true,
        regNum: '456-789-123',
        regDate: '2018-03-01',
        period: 'شهري' // دورية الإقرار
      },
      insurance: {
        enterpriseNum: '7766554433',
        office: 'مكتب تأمينات الدقي أول',
        status: 'نشطة'
      }
    }
  ];

  const filteredClients = dummyClients.filter(c => 
    c.basic.name.includes(searchTerm) || c.tax.registerNum.includes(searchTerm)
  );

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      {/* هيدر الصفحة */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <div>
          <h2 style={{ fontSize: '22px', fontWeight: '600', color: 'var(--text-h)' }}>👥 {t('clients.title')}</h2>
          <p style={{ color: 'var(--text)', fontSize: '13px', marginTop: '4px' }}>المرحلة الثانية: قاعدة البيانات الموحدة للملفات الضريبية والتأمينية.</p>
        </div>
        <button style={{
          padding: '10px 18px', backgroundColor: 'var(--accent)', color: '#fff',
          border: 'none', borderRadius: '8px', fontWeight: '600', cursor: 'pointer'
        }}>
          ➕ {t('clients.add_new')}
        </button>
      </div>

      {/* شريط البحث */}
      <div style={{ backgroundColor: 'var(--bg)', padding: '14px', borderRadius: '10px', border: '1px solid var(--border)', marginBottom: '15px' }}>
        <input 
          type="text" 
          placeholder="البحث بواسطة: اسم العميل، الرقم الضريبي، السجل، الهاتف..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%', maxWidth: '400px', padding: '10px 14px',
            borderRadius: '6px', border: '1px solid var(--border)', outline: 'none', fontSize: '14px'
          }}
        />
      </div>

      {/* جدول عرض العملاء الرئيسي */}
      <div style={{ backgroundColor: 'var(--bg)', borderRadius: '10px', border: '1px solid var(--border)', overflowX: 'auto', flex: 1 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'start' }}>
          <thead>
            <tr style={{ backgroundColor: 'var(--code-bg)', borderBottom: '1px solid var(--border)' }}>
              <th style={{ padding: '14px', color: 'var(--text-h)', fontSize: '14px' }}>كود العميل</th>
              <th style={{ padding: '14px', color: 'var(--text-h)', fontSize: '14px' }}>اسم العميل</th>
              <th style={{ padding: '14px', color: 'var(--text-h)', fontSize: '14px' }}>رقم التسجيل الضريبي</th>
              <th style={{ padding: '14px', color: 'var(--text-h)', fontSize: '14px' }}>النشاط الرئيسي</th>
              <th style={{ padding: '14px', color: 'var(--text-h)', fontSize: '14px' }}>تأمين المنشأة</th>
              <th style={{ padding: '14px', color: 'var(--text-h)', fontSize: '14px' }}>إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <tr key={client.basic.idNum} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '14px' }}><code>{client.basic.idNum}</code></td>
                <td style={{ padding: '14px', fontWeight: '500', color: 'var(--text-h)' }}>{client.basic.name}</td>
                <td style={{ padding: '14px' }}><code>{client.tax.registerNum}</code></td>
                <td style={{ padding: '14px', fontSize: '13px' }}>{client.basic.activity}</td>
                <td style={{ padding: '14px' }}>
                  <span style={{ padding: '4px 8px', borderRadius: '4px', fontSize: '12px', backgroundColor: 'var(--accent-bg)', color: 'var(--accent)' }}>
                    {client.insurance.status}
                  </span>
                </td>
                <td style={{ padding: '14px' }}>
                  <button 
                    onClick={() => { setSelectedClient(client); setActiveTab('basic'); }}
                    style={{ padding: '6px 12px', backgroundColor: 'var(--text-h)', color: 'var(--bg)', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '13px' }}
                  >
                    📂 فتح الملف الإلكتروني
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ==================== نافذة ملف العميل الإلكتروني المتكامل (SRS Stage 2) ==================== */}
      {selectedClient && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 999
        }}>
          <div style={{
            backgroundColor: 'var(--bg)', width: '90%', maxWidth: '900px', height: '85vh',
            borderRadius: '12px', display: 'flex', flexDirection: 'column', overflow: 'hidden', border: '1px solid var(--border)'
          }}>
            
            {/* هيدر النافذة */}
            <div style={{ padding: '20px', backgroundColor: 'var(--text-h)', color: 'var(--bg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--bg)' }}>الملف الإلكتروني الموحد للمنشأة</h3>
                <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: 'var(--text)' }}>{selectedClient.basic.name} | {selectedClient.basic.idNum}</p>
              </div>
              <button onClick={() => setSelectedClient(null)} style={{ background: 'transparent', border: 'none', color: 'var(--bg)', fontSize: '20px', cursor: 'pointer' }}>✕</button>
            </div>

            {/* أشرطة التبويب الداخلية لعدم تكرار الصفحات (Tabs) */}
            <div style={{ display: 'flex', backgroundColor: 'var(--code-bg)', borderBottom: '1px solid var(--border)', padding: '0 10px' }}>
              {[
                { id: 'basic', label: '📋 البيانات الأساسية' },
                { id: 'tax', label: '⚖️ البيانات الضريبية' },
                { id: 'commercial', label: '📜 السجل التجاري' },
                { id: 'taxCard', label: '💳 البطاقة الضريبية' },
                { id: 'vat', label: '📊 القيمة المضافة' },
                { id: 'insurance', label: '🛡️ التأمينات' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '12px 16px', border: 'none', background: 'transparent', cursor: 'pointer', fontSize: '13px', fontWeight: '500',
                    color: activeTab === tab.id ? 'var(--accent)' : 'var(--text)',
                    borderBottom: activeTab === tab.id ? '2px solid var(--accent)' : '2px solid transparent'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* محتوى التبويب المختار */}
            <div style={{ padding: '24px', flex: 1, overflowY: 'auto', color: 'var(--text)' }}>
              
              {activeTab === 'basic' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(24px, 240px))', gap: '20px', gridColumnGap: '40px' }}>
                  <div><strong>اسم المنشأة:</strong> <span style={{ color: 'var(--text-h)' }}>{selectedClient.basic.name}</span></div>
                  <div><strong>نشاط الشركة:</strong> {selectedClient.basic.activity}</div>
                  <div><strong>تصنيف الكيان القانوني:</strong> {selectedClient.basic.category}</div>
                  <div><strong>المدير المسؤول:</strong> {selectedClient.basic.manager}</div>
                  <div><strong>الهاتف الأساسي:</strong> <code>{selectedClient.basic.phone1}</code></div>
                  <div><strong>الهاتف الثاني:</strong> <code>{selectedClient.basic.phone2}</code></div>
                  <div><strong>البريد الإلكتروني:</strong> {selectedClient.basic.email}</div>
                  <div><strong>المحافظة / المدينة:</strong> {selectedClient.basic.governorate}، {selectedClient.basic.city}</div>
                  <div style={{ gridColumn: '1 / -1' }}><strong>العنوان بالكامل:</strong> {selectedClient.basic.address}</div>
                  <div style={{ gridColumn: '1 / -1', backgroundColor: 'var(--code-bg)', padding: '10px', borderRadius: '6px' }}><strong>📝 ملاحظات المكتب:</strong> {selectedClient.basic.notes}</div>
                </div>
              )}

              {activeTab === 'tax' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <div><strong>رقم الملف الضريبي:</strong> <code>{selectedClient.tax.fileNum}</code></div>
                  <div><strong>رقم التسجيل الضريبي:</strong> <code>{selectedClient.tax.registerNum}</code></div>
                  <div><strong>المأمورية المختصة:</strong> {selectedClient.tax.authority}</div>
                  <div><strong>تاريخ بداية النشاط الفعلي:</strong> {selectedClient.tax.startDate}</div>
                  <div style={{ gridColumn: '1 / -1' }}><strong>الموقف الضريبي الحالي:</strong> <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>{selectedClient.tax.status}</span></div>
                </div>
              )}

              {activeTab === 'commercial' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <div><strong>رقم السجل التجاري:</strong> <code>{selectedClient.commercial.num}</code></div>
                  <div><strong>جهة إصدار السجل:</strong> {selectedClient.commercial.issuer}</div>
                  <div><strong>تاريخ الإصدار:</strong> {selectedClient.commercial.issueDate}</div>
                  <div><strong>تاريخ الانتهاء:</strong> <span style={{ color: '#b91c1c' }}>{selectedClient.commercial.expiryDate}</span></div>
                </div>
              )}

              {activeTab === 'taxCard' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <div><strong>رقم البطاقة الضريبية:</strong> <code>{selectedClient.taxCard.num}</code></div>
                  <div><strong>تاريخ الإصدار:</strong> {selectedClient.taxCard.issueDate}</div>
                  <div><strong>تاريخ الانتهاء:</strong> {selectedClient.taxCard.expiryDate}</div>
                </div>
              )}

              {activeTab === 'vat' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <div><strong>حالة التسجيل بالقيمة المضافة:</strong> <span style={{ fontWeight: 'bold' }}>{selectedClient.vat.isRegistered ? '✅ مسجّل' : '❌ غير مسجّل'}</span></div>
                  {selectedClient.vat.isRegistered && (
                    <>
                      <div><strong>رقم تسجيل القيمة المضافة:</strong> <code>{selectedClient.vat.regNum}</code></div>
                      <div><strong>تاريخ التسجيل بالمنظومة:</strong> {selectedClient.vat.regDate}</div>
                      <div><strong>دورية تقديم الإقرار:</strong> <span style={{ color: 'var(--accent)' }}>{selectedClient.vat.period}</span></div>
                    </>
                  )}
                </div>
              )}

              {activeTab === 'insurance' && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
                  <div><strong>رقم منشأة التأمينات:</strong> <code>{selectedClient.insurance.enterpriseNum}</code></div>
                  <div><strong>مكتب التأمينات التابع له:</strong> {selectedClient.insurance.office}</div>
                  <div><strong>حالة ملف المنشأة التأميني:</strong> {selectedClient.insurance.status}</div>
                </div>
              )}

            </div>

            {/* فوتر النافذة */}
            <div style={{ padding: '15px 20px', backgroundColor: 'var(--code-bg)', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedClient(null)} style={{ padding: '8px 16px', backgroundColor: 'var(--border)', color: 'var(--text-h)', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>إغلاق الملف</button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default ClientsPage;