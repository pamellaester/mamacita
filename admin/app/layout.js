export const metadata = {
  title: 'Mamacita Admin Panel',
  description: 'Admin dashboard for Mamacita platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  );
}
