// src/app/layout.jsx
import "../styles/global.css";
import Header from "../components/Header";
import { CartProvider } from "../context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  >
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
