import Head       from 'next/head';
import React      from 'React';
import reactStamp from '../../utils/reactStamp';

const MainLayout = {
  render() {
    const { children } = this.props;
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
}

export default reactStamp.compose(MainLayout);
