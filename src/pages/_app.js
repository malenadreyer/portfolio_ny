// src/app/layout.jsx
import "../styles/global.css";





export default function RootLayout({ pageProps, Component}) {
  return (
    <>
      
      <main>
          <Component {...pageProps} />
        </main>
    </>
  );
}
