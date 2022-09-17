import React from 'react';
import Header from './components/Header';
import logo from '../../logo.svg';

const data = {
  Header: {
    logoImage: logo,
    logoText: 'Ishpaul Singh',
  },
};
const Home = () => (
  <div>
    <Header data={data.Header} />
  </div>
);

export default Home;
