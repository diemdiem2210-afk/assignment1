'use client';
import React, { useState } from 'react';

export default function HomePage() {
  const studentNumber = 'S1234567';
  const studentName = 'Your Name';
  const [title, setTitle] = useState('My Page');
  const [sections, setSections] = useState('Header\nMain\nFooter');
  const [generated, setGenerated] = useState('');

  function generateHTML() {
    const sects = sections
      .split(/\r?\n/)
      .map((s) => s.trim())
      .filter(Boolean);

    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${title}</title>
<style>
  body { font-family: system-ui; margin: 0; padding: 24px; }
  section { border: 1px solid #ccc; padding: 12px; margin: 8px; border-radius: 8px; }
</style>
</head>
<body>
<h1>${title}</h1>
${sects.map((s) => `<section><h2>${s}</h2><p>Content for ${s}</p></section>`).join('\n')}
<footer>Built with code generator</footer>
</body>
</html>`;

    setGenerated(html);
  }

  function copyGenerated() {
    if (!generated) return;
    navigator.clipboard.writeText(generated);
    alert('Copied!');
  }

  return (
    <main style={{ padding: '20px' }}>
      <div style={{ position: 'fixed', top: 10, left: 10 }}>{studentNumber}</div>
      <h1>Home: Code Generator</h1>

      <label>Title:</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ display: 'block', margin: '8px 0', padding: '8px' }}
      />

      <label>Sections (one per line):</label>
      <textarea
        value={sections}
        onChange={(e) => setSections(e.target.value)}
        rows={6}
        style={{ display: 'block', margin: '8px 0', padding: '8px', width: '100%' }}
      />

      <button onClick={generateHTML} style={{ padding: '10px', marginRight: '10px' }}>
        Generate
      </button>
      <button onClick={copyGenerated} style={{ padding: '10px' }}>
        Copy
      </button>

      <pre
        style={{
          background: '#f0f0f0',
          padding: '12px',
          marginTop: '12px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
        }}
      >
        {generated}
      </pre>
    </main>
  );
}
