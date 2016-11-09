import Head       from 'next/head';
import React      from 'React';
import reactStamp from '../../utils/reactStamp';

const mainLayout = {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Head>
          <title>Quentin Dejean</title>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        {children}
      </div>
    )
  }
}

export default reactStamp.compose(mainLayout);
