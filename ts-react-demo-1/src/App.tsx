import React from 'react';
import Button from './Button'

const App: React.FC = () => {
  return (
    <div className="App">
      <Button size="small"></Button>
      <Button></Button>
      <Button size="large"></Button>
    </div>
  );
}

export default App;
