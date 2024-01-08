import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark mode-dark" data-mui-color-scheme="dark" data-joy-color-scheme="dark"> 
      <Head>
        <link rel="icon" href="/favicon.png" />
        <link rel="icon" href="/favicon.png" sizes="32x32"/>
        <link rel="icon" href="/favicon-192x192.png" sizes="192x192"/>
        <link rel="apple-touch-icon" href="favicon-180x180.png"/>
        <meta name="msapplication-TileImage" content="/favicon-270x270.png"/>
        <meta
          name="description"
          content="DATS Project is a blockchain company that produces automated vulnerability scanning and cybersecurity solutions with high computing power for Blockchain and WEB3 security."
        />
        <meta
          property="og:title"
          content="DATSProject Cyber Security On Blockchain"
        />
        <meta property="og:url" content="https://datsproject.io/" />
        <meta
          property="og:site_name"
          content="Dats Project Cybersecurity On Blockchain"
        />
        <meta
          property="og:image"
          content="https://datsproject.io/wp-content/uploads/2022/10/1500x500.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://datsproject.io/wp-content/uploads/2022/10/1500x500.jpg"
        />
        <meta property="og:image:width" content="1500" />
        <meta property="og:image:height" content="500" />
        <meta
          property="og:image:alt"
          content="DATSProject Cyber Security On Blockchain"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="DATSProject Cyber Security On Blockchain"
        />
        <meta
          name="twitter:description"
          content="DATS Project is a blockchain company that produces automated vulnerability scanning and cybersecurity solutions with high computing power for Blockchain and WEB3 security."
        />
        <meta
          name="twitter:image"
          content="https://datsproject.io/og-image.png"
        />
        <meta
          name="twitter:image:alt"
          content="DATSProject Cyber Security On Blockchain"
        />
      </Head>
      <body className="overflow-x-hidden">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
