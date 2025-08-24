// app/layout.tsx
import './globals.css';
import ClientHeader from './ClientHeader';

export const metadata = {
  title: 'Assignment 1',
  description: 'Next.js App Router Assignment',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientHeader />
        <main style={{ padding: '24px', marginTop: '50px' }}>{children}</main>
        <footer style={{ padding: '12px 24px', borderTop: '1px solid #ccc', marginTop: '24px' }}>
          &copy; {new Date().getFullYear()} Your Name (S1234567)
        </footer>
      </body>
    </html>
  );
}
