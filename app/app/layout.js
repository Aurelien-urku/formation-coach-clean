export const metadata = {
  title: 'Formation Attitude de Coach',
  description: 'Juin 2026 - Formation en ligne',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{
        fontFamily: 'Inter, sans-serif',
        margin: 0,
        padding: '20px',
        maxWidth: '1200px',
        marginLeft: 'auto',
        marginRight: 'auto'
      }}>
        {children}
      </body>
    </html>
  );
}
