
import React from 'react';
import Todo from './Todo';
import About from './About';
import MenuComponent from './MenuComponent';

function App (props) {
  return (
      <div className="container">
        <MenuComponent />
        <Todo />
        <About />
      </div>
  );
};

export default App;
