import React from 'react';
import Button from './Button'

// const clickFn = (e: React.MouseEvent) => {
const clickFn: React.MouseEventHandler = (e) => {
  console.log(e);
  console.log('clickFn');
}

const App: React.FC = () => {
  return (
    <div className="App">
      <Button size="small" onClick={clickFn}>小</Button>
      <Button>中</Button>
      <Button size="large">大</Button>
      <Button size="large"><span>button里带</span><span>span</span></Button>
    </div>
  );
}

export default App;
