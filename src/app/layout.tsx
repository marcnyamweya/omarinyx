// import '@/styles/globals.scss';

// import type { AppProps } from 'next/app';
// import { ReactElement } from 'react';

// export default function App({ Component, pageProps }: AppProps): ReactElement {
//     return <Component {...pageProps} />;
// }

import '@/styles/globals.scss';
import { ReactNode } from 'react';

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>{children}</body>
    </html>
  );
}