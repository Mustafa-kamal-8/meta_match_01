import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/context/ThemeContext";
import LayoutShell from "./LayoutShell";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
<body>
  <div className={inter.className}>
    <ThemeProvider>
      <LayoutShell>{children}</LayoutShell>
    </ThemeProvider>
  </div>
</body>

    </html>
  );
}
