import React from 'react';
import Data from './components/Data';
import { Layout } from 'antd';
const { Header } = Layout;

const App = () => {
  return (
    <>
      <Header style={{ color: '#fff', fontSize: '20px' }}>Dhabits Test</Header>
      <main>
        <Data />
      </main >
    </>
  );
}

export default App;
