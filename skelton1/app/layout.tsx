import "../styles/globals.css";

export const metadata = {
  title: "UndocuLink",
  description: "Empowering students with opportunities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
