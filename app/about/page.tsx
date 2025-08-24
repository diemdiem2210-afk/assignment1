'use client';
import React from 'react';

export default function AboutPage() {
  const studentNumber = 'S1234567';
  const studentName = 'Your Name';

  return (
    <main style={{ padding: '20px' }}>
      <h1>About This Website</h1>

      <section style={{ marginBottom: '20px' }}>
        <p><strong>Name:</strong> {studentName}</p>
        <p><strong>Student Number:</strong> {studentNumber}</p>
      </section>

      <section>
        <h2>How to Use This Website</h2>
        <video
          width="600"
          controls
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
        >
          <source src="/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p style={{ marginTop: '8px', fontStyle: 'italic' }}>
          Watch this video to see how to generate HTML code using the homepage.
        </p>
      </section>
    </main>
  );
}
