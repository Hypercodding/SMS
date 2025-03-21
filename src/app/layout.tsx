import "./globals.css";
import { Telex } from "next/font/google";

// import Navbar from "@/components/layout/Navbar";

const telex = Telex({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className={telex.className}>{children}</main>
      </body>
    </html>
  );
}
