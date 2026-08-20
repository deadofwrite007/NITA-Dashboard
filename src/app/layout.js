import "./globals.css";

export const metadata = {
  title: "National Trade Dashboard - India",
  description: "360° View of India's Export, Import & Trade Performance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-row" style={{ overflowX: "hidden" }}>
        {children}
      </body>
    </html>
  );
}
