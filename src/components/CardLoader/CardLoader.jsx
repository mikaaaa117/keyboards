import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={370}
    viewBox="0 0 400 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="21" y="10" rx="8" ry="8" width="256" height="256" />
    <rect x="21" y="296" rx="4" ry="4" width="156" height="12" />
    <rect x="21" y="316" rx="4" ry="4" width="156" height="12" />
    <rect x="21" y="344" rx="6" ry="6" width="35" height="14" />
    <rect x="246" y="326" rx="8" ry="8" width="32" height="32" />
  </ContentLoader>
);

export default CardLoader;
