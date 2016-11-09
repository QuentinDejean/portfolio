import Head  from 'next/head';
import React from 'React';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  )
}

export default MainLayout;
