import React, { useState } from 'react';
import Nav from './components/Nav';
import Projects from './components/Projects';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Lorem Ipsum',
    },
    { name: 'Projects', description: 'Dynamic Web Applications' },
    { name: 'Contact', description: 'Lorem' },
    { name: 'Experience', description: 'Lorem Ipsum' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      ></Nav>
      <main>
        <Projects currentCategory={currentCategory}></Projects>
      </main>
    </div>
  );
}

export default App;
