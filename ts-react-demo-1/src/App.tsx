import React from 'react';
import Button from './Button'

const App: React.FC = () => {
  return (
    <div className="App">
      <Button size="small">小</Button>
      <Button>中</Button>
      <Button size="large">大</Button>
      <Button size="large"><span>button里带</span><span>span</span></Button>
    </div>
  );
}

export default App;
