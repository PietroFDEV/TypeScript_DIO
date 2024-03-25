import React from 'react';
import { Card } from './components/Card';
import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <Card 
        id={1}
        parag='aaaa'
        detail='bbbbbb'
       />
      <Card 
        id={2}
        parag='ccccc'
        detail='dddddddd'
         />
      <Card 
        id={1}
        parag='eeeee'
        detail='ffffffff'
         />
    </Layout>
  );
}

export default App;
