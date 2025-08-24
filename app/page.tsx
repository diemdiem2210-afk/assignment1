'use client';
import React, { useState } from 'react';

export default function HomePage() {
  const [htmlTitle, setHtmlTitle] = useState('My Generated Website');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [textColor, setTextColor] = useState('#333333');
  const [fontSize, setFontSize] = useState('16');
  const [content, setContent] = useState('Welcome to my website!\n\nThis page was generated using the Next.js Code Generator.\n\nYou can customize the colors, fonts, and content to create your perfect webpage.');
  const [includeNavigation, setIncludeNavigation] = useState(true);
  const [includeFooter, setIncludeFooter] = useState(true);
  const [includeJavaScript, setIncludeJavaScript] = useState(true);
  const [generatedCode, setGeneratedCode] = useState('');

  const generateHTML5Code = () => {
    const jsCode = includeJavaScript ? `
    <script>
        // Interactive JavaScript Functions
        function changeBackgroundColor() {
            const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            document.body.style.backgroundColor = randomColor;
            console.log('Background changed to: ' + randomColor);
        }

        function showWelcomeAlert() {
            alert('Welcome to ' + document.title + '!\\n\\nThis page was generated with HTML5, CSS, and JavaScript.');
        }

        function toggleContent() {
            const mainContent = document.getElementById('main-content');
            if (mainContent.style.display === 'none') {
                mainContent.style.display = 'block';
                document.getElementById('toggle-btn').innerText = 'Hide Content';
            } else {
                mainContent.style.display = 'none';
                document.getElementById('toggle-btn').innerText = 'Show Content';
            }
        }

        function animateTitle() {
            const title = document.querySelector('h1');
            title.style.transform = 'scale(1.1)';
            title.style.color = '#ff6b6b';
            setTimeout(() => {
                title.style.transform = 'scale(1)';
                title.style.color = '${textColor}';
            }, 500);
        }

        function addNewParagraph() {
            const content = document.getElementById('main-content');
            const newP = document.createElement('p');
            newP.innerHTML = 'This paragraph was added dynamically using JavaScript! Time: ' + new Date().toLocaleTimeString();
            newP.style.backgroundColor = '#e3f2fd';
            newP.style.padding = '10px';
            newP.style.margin = '10px 0';
            newP.style.borderRadius = '4px';
            newP.style.border = '1px solid #2196f3';
            content.appendChild(newP);
        }

        // Initialize page
        window.onload = function() {
            console.log('Page loaded successfully!');
            console.log('Generated on: ' + new Date().toLocaleString());
            
            // Add some interactive behavior
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Space' && e.ctrlKey) {
                    e.preventDefault();
                    changeBackgroundColor();
                }
            });
        };
    </script>` : '';

    const navigationHTML = includeNavigation ? `
        <nav style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <ul style="list-style: none; display: flex; justify-content: center; gap: 30px; margin: 0; padding: 0;">
                <li><a href="#home" style="color: white; text-decoration: none; font-weight: bold; padding: 8px 16px; border-radius: 20px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.2)'" onmouseout="this.style.backgroundColor='transparent'">Home</a></li>
                <li><a href="#about" style="color: white; text-decoration: none; font-weight: bold; padding: 8px 16px; border-radius: 20px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.2)'" onmouseout="this.style.backgroundColor='transparent'">About</a></li>
                <li><a href="#contact" style="color: white; text-decoration: none; font-weight: bold; padding: 8px 16px; border-radius: 20px; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='rgba(255,255,255,0.2)'" onmouseout="this.style.backgroundColor='transparent'">Contact</a></li>
            </ul>
        </nav>` : '';

    const footerHTML = includeFooter ? `
        <footer style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%); color: white; text-align: center; padding: 30px 20px; margin-top: 50px;">
            <p style="margin: 0; font-size: 14px; opacity: 0.9;">
                &copy; ${new Date().getFullYear()} Generated Website | Created: ${new Date().toLocaleDateString()} | 
                <span style="font-weight: bold;">HTML5 + CSS + JavaScript</span>
            </p>
        </footer>` : '';

    const buttonStyles = includeJavaScript ? `
        <div style="text-align: center; margin: 40px 0;">
            <button onclick="changeBackgroundColor()" style="background: linear-gradient(45deg, #ff6b6b, #ee5a24); color: white; border: none; padding: 12px 24px; margin: 8px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold; box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255, 107, 107, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(255, 107, 107, 0.3)'">🎨 Change Background</button>
            <button onclick="showWelcomeAlert()" style="background: linear-gradient(45deg, #4ecdc4, #26d0ce); color: white; border: none; padding: 12px 24px; margin: 8px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold; box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">👋 Welcome Message</button>
            <button id="toggle-btn" onclick="toggleContent()" style="background: linear-gradient(45deg, #a55eea, #8b68ee); color: white; border: none; padding: 12px 24px; margin: 8px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold; box-shadow: 0 4px 15px rgba(165, 94, 234, 0.3); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">👁️ Hide Content</button>
            <button onclick="animateTitle()" style="background: linear-gradient(45deg, #26de81, #20bf6b); color: white; border: none; padding: 12px 24px; margin: 8px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold; box-shadow: 0 4px 15px rgba(38, 222, 129, 0.3); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">✨ Animate Title</button>
            <button onclick="addNewParagraph()" style="background: linear-gradient(45deg, #fd79a8, #e84393); color: white; border: none; padding: 12px 24px; margin: 8px; border-radius: 25px; cursor: pointer; font-size: 16px; font-weight: bold; box-shadow: 0 4px 15px rgba(253, 121, 168, 0.3); transition: all 0.3s ease;" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">➕ Add Paragraph</button>
        </div>` : '';

    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Generated HTML5 page with inline CSS and JavaScript">
    <title>${htmlTitle}</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: ${backgroundColor};
            color: ${textColor};
            font-size: ${fontSize}px;
            line-height: 1.8;
            margin: 0;
            padding: 0;
            min-height: 100vh;
            transition: all 0.3s ease;
        }
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 {
            text-align: center;
            font-size: 2.5em;
            margin: 30px 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            transition: all 0.5s ease;
        }
        .content-box {
            background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
            border-radius: 15px;
            padding: 30px;
            margin: 30px 0;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            white-space: pre-wrap;
        }
        .highlight {
            background: linear-gradient(120deg, #a8edea 0%, #fed6e3 100%);
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
            border-left: 4px solid #667eea;
        }
        .tech-info {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 10px;
            margin: 30px 0;
            text-align: center;
        }
    </style>
</head>
<body>${navigationHTML}
    
    <div class="container">
        <h1>${htmlTitle}</h1>
        
        <div class="highlight">
            <h2>🚀 This is a Generated HTML5 Page!</h2>
            <p><strong>Features included:</strong> HTML5 structure, inline CSS styling, ${includeJavaScript ? 'interactive JavaScript' : 'static content'}, and responsive design.</p>
        </div>
        
        <div id="main-content" class="content-box">
            ${content.split('\n').map(line => `<p>${line || '&nbsp;'}</p>`).join('\n            ')}
        </div>
        
        ${buttonStyles}
        
        <div class="tech-info">
            <h3>💻 Technical Information</h3>
            <p><strong>Generated:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>Technology Stack:</strong> HTML5 + Inline CSS${includeJavaScript ? ' + JavaScript' : ''}</p>
            <p><strong>Responsive:</strong> ✅ | <strong>Accessible:</strong> ✅ | <strong>Standards Compliant:</strong> ✅</p>
            ${includeJavaScript ? '<p><strong>Keyboard Shortcut:</strong> Ctrl + Space to change background color</p>' : ''}
        </div>
    </div>${footerHTML}${jsCode}
</body>
</html>`;

    setGeneratedCode(fullHTML);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedCode);
      alert('✅ HTML5 code copied to clipboard!\n\nYou can now paste it into a new file (e.g., hello.html) and open it in your web browser.');
    } catch (err) {
      console.error('Failed to copy code:', err);
      alert('❌ Failed to copy code to clipboard');
    }
  };

  const downloadHTML = () => {
    const blob = new Blob([generatedCode], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${htmlTitle.replace(/\s+/g, '_').toLowerCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <main style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🔧 HTML5 Code Generator</h1>
        <p style={{ fontSize: '18px', color: 'var(--text-color)', opacity: 0.8 }}>
          Generate complete HTML5 pages with inline CSS and JavaScript - ready to save and open in any browser!
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
        alignItems: 'start'
      }}>
        {/* Input Form */}
        <div style={{
          padding: '24px',
          backgroundColor: 'var(--header-bg)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '24px', color: 'var(--button-bg)' }}>⚙️ Page Configuration</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="html-title" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              📄 Page Title:
            </label>
            <input
              id="html-title"
              type="text"
              value={htmlTitle}
              onChange={(e) => setHtmlTitle(e.target.value)}
              aria-describedby="title-help"
            />
            <small id="title-help" style={{ color: 'var(--text-color)', opacity: 0.7, fontSize: '12px' }}>
              This appears in the browser tab and as the main heading
            </small>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
            <div>
              <label htmlFor="bg-color" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                🎨 Background:
              </label>
              <input
                id="bg-color"
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                style={{ width: '100%', height: '50px', cursor: 'pointer' }}
              />
            </div>
            <div>
              <label htmlFor="text-color" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                ✏️ Text Color:
              </label>
              <input
                id="text-color"
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                style={{ width: '100%', height: '50px', cursor: 'pointer' }}
              />
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="font-size" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              📏 Font Size: {fontSize}px
            </label>
            <input
              id="font-size"
              type="range"
              min="12"
              max="28"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              style={{ width: '100%', height: '8px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="page-content" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              📝 Page Content:
            </label>
            <textarea
              id="page-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              style={{ resize: 'vertical', fontFamily: 'monospace' }}
              placeholder="Enter your page content here..."
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ marginBottom: '12px', fontSize: '16px' }}>🔧 Include Features:</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={includeNavigation}
                  onChange={(e) => setIncludeNavigation(e.target.checked)}
                />
                <span>🧭 Navigation Menu</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={includeFooter}
                  onChange={(e) => setIncludeFooter(e.target.checked)}
                />
                <span>📋 Footer Section</span>
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={includeJavaScript}
                  onChange={(e) => setIncludeJavaScript(e.target.checked)}
                />
                <span>⚡ Interactive JavaScript</span>
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button 
              onClick={generateHTML5Code} 
              style={{ 
                flex: '1',
                minWidth: '140px',
                background: 'var(--accent-color)',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              🚀 Generate HTML5
            </button>
            {generatedCode && (
              <>
                <button 
                  onClick={copyToClipboard}
                  style={{ 
                    background: 'var(--button-bg)',
                    minWidth: '100px'
                  }}
                >
                  📋 Copy
                </button>
                <button 
                  onClick={downloadHTML}
                  style={{ 
                    background: '#6f42c1',
                    minWidth: '100px'
                  }}
                >
                  💾 Download
                </button>
              </>
            )}
          </div>
        </div>

        {/* Code Output */}
        <div style={{
          padding: '24px',
          backgroundColor: 'var(--header-bg)',
          borderRadius: '12px',
          border: '1px solid var(--border-color)',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '16px', color: 'var(--button-bg)' }}>💻 Generated HTML5 Code</h2>
          
          {generatedCode ? (
            <div>
              <div style={{
                backgroundColor: '#1e1e1e',
                color: '#d4d4d4',
                padding: '20px',
                borderRadius: '8px',
                fontSize: '12px',
                lineHeight: '1.5',
                overflowX: 'auto',
                maxHeight: '500px',
                overflowY: 'auto',
                border: '2px solid #444'
              }}>
                <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
                  {generatedCode}
                </pre>
              </div>
              <div style={{ 
                marginTop: '16px', 
                padding: '12px', 
                backgroundColor: '#d1ecf1', 
                borderRadius: '6px',
                border: '1px solid #bee5eb'
              }}>
                <p style={{ margin: 0, fontSize: '14px', color: '#0c5460' }}>
                  ✅ <strong>Ready to use!</strong> Copy this code and save it as "hello.html" (or any .html file) to open in your web browser.
                </p>
              </div>
            </div>
          ) : (
            <div style={{
              padding: '60px 20px',
              textAlign: 'center',
              backgroundColor: '#f8f9fa',
              borderRadius: '8px',
              color: '#6c757d',
              border: '2px dashed #dee2e6'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>📄</div>
              <h3>No code generated yet</h3>
              <p>Configure your page settings and click "Generate HTML5" to see your code here</p>
            </div>
          )}
        </div>
      </div>

      {/* Instructions */}
      <section style={{
        marginTop: '40px',
        padding: '24px',
        backgroundColor: 'var(--header-bg)',
        borderRadius: '12px',
        border: '1px solid var(--border-color)'
      }}>
        <h2>📚 How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginTop: '20px' }}>
          <div style={{ padding: '16px', backgroundColor: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h3>1️⃣ Configure</h3>
            <p>Set your page title, colors, font size, and content using the form controls.</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h3>2️⃣ Generate</h3>
            <p>Click "Generate HTML5" to create complete HTML code with inline CSS and JavaScript.</p>
          </div>
          <div style={{ padding: '16px', backgroundColor: 'var(--bg-color)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
            <h3>3️⃣ Use</h3>
            <p>Copy the code and save it as an .html file to open in any web browser.</p>
          </div>
        </div>
      </section>
    </main>
  );
}