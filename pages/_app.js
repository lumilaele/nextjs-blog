
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }

  /* IMPORTANT: You need to restart the development
  server when you add pages/_app.js with npm run dev 
  
  In Next.js, you can add global CSS files by importing
  them from pages/_app.js. You cannot import global CSS
  anywhere else.*/

  /* Any styles imported in _app.js
  will be applied globally, to all pages of 
  the application */