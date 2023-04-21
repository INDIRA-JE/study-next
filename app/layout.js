import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* 상단 메뉴 */}
        <div className="navbar">
          <Link href="/">홈</Link>
          <Link href="/list">List</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/cart/payment">Payment</Link>
        </div>
        {children}
      </body>
    </html>
  );
}
