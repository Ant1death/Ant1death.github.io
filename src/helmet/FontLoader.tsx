import { FC }from 'react';
import { Helmet } from 'react-helmet';

const FontLoader: FC = () => (
  <Helmet>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
  </Helmet>
);

export default FontLoader;
