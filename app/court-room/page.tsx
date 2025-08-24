'use client';
import React from 'react';

export default function CourtRoomPage() {
  return (
    <main style={{ 
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
      textAlign: 'center'
    }}>
      <div style={{
        padding: '60px 40px',
        backgroundColor: 'var(--header-bg)',
        borderRadius: '12px',
        border: '2px dashed var(--border-color)',
        marginBottom: '30px'
      }}>
        <div style={{ fontSize: '72px', marginBottom: '20px' }}>⚖️</div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--button-bg)' }}>
          Court Room
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--text-color)', opacity: 0.8, marginBottom: '30px' }}>
          This page will simulate legal proceedings and courtroom scenarios for educational purposes.
        </p>
        <div style={{
          padding: '20px',
          backgroundColor: 'var(--danger-color)',
          color: 'white',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          ⚖️ Coming Soon: Legal case simulations and courtroom procedures!
        </div>
      </div>

      <div style={{
        padding: '24px',
        backgroundColor: 'var(--bg-color)',
        borderRadius: '8px',
        border: '1px solid var(--border-color)',
        textAlign: 'left'
      }}>
        <h2>📚 Planned Features:</h2>
        <ul style={{ paddingLeft: '24px', lineHeight: '1.8' }}>
          <li>Interactive court case simulations</li>
          <li>Legal procedure tutorials</li>
          <li>Evidence examination tools</li>
          <li>Role-playing scenarios</li>
          <li>Legal document templates</li>
          <li>Law learning modules</li>
        </ul>
      </div>
    </main>
  );
}