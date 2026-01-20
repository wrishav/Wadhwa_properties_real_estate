import '@/styles/globals.css';
import '@/styles/components.css';
import Layout from '@/components/Layout';

const themeInitScript = `
(() => {
  try {
    const saved = localStorage.getItem('theme');
    const theme = saved === 'dark' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
