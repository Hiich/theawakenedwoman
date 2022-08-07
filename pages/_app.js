import "../styles/globals.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      serverUrl="https://otviyxevxib0.usemoralis.com:2053/server"
      appId="6oFQcdPtm9voWjL54gKXvVY2DZtiaGNFsKgOJVcK"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
