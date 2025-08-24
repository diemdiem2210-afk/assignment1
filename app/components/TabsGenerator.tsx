'use client';
import React, { useState, useEffect } from 'react';

interface Tab {
  id: number;
  title: string;
  content: string;
}

const TabsGenerator: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  // Load from localStorage on mount
  useEffect(() => {
    const storedTabs = localStorage.getItem('tabsGenerator');
    if (storedTabs) {
      setTabs(JSON.parse(storedTabs));
    } else {
      setTabs([{ id: 1, title: 'Tab 1', content: 'This is Tab 1 content' }]);
    }
  }, []);

  // Save tabs to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tabsGenerator', JSON.stringify(tabs));
  }, [tabs]);

  // Add new tab
  const addTab = () => {
    if (tabs.length >= 15) return;
    const newId = tabs.length ? Math.max(...tabs.map(t => t.id)) + 1 : 1;
    setTabs([...tabs, { id: newId, title: `Tab ${newId}`, content: '' }]);
    setActiveTab(tabs.length); // Focus new tab
  };

  // Remove active tab
  const removeTab = () => {
    if (tabs.length <= 1) return;
    const newTabs = tabs.filter((_, index) => index !== activeTab);
    setTabs(newTabs);
    setActiveTab(Math.max(activeTab - 1, 0));
  };

  // Update tab title
  const updateTabTitle = (index: number, title: string) => {
    const updated = [...tabs];
    updated[index].title = title;
    setTabs(updated);
  };

  // Update tab content
  const updateTabContent = (index: number, content: string) => {
    const updated = [...tabs];
    updated[index].content = content;
    setTabs(updated);
  };

  return (
    <div>
      {/* Tab Buttons */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
        {tabs.map((tab, index) => (
          <input
            key={tab.id}
            value={tab.title}
            onChange={(e) => updateTabTitle(index, e.target.value)}
            style={{
              padding: '6px 10px',
              borderRadius: '6px',
              border: activeTab === index ? '2px solid #667eea' : '1px solid #ccc',
              cursor: 'pointer',
              minWidth: '80px'
            }}
            onClick={() => setActiveTab(index)}
          />
        ))}
        <button onClick={addTab} style={{ padding: '6px 12px', borderRadius: '6px' }}>➕</button>
        <button onClick={removeTab} style={{ padding: '6px 12px', borderRadius: '6px' }}>➖</button>
      </div>

      {/* Tab Content */}
      {tabs.length > 0 && (
        <textarea
          value={tabs[activeTab].content}
          onChange={(e) => updateTabContent(activeTab, e.target.value)}
          style={{
            width: '100%',
            minHeight: '120px',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontFamily: 'monospace',
            resize: 'vertical'
          }}
        />
      )}
    </div>
  );
};

export default TabsGenerator;
