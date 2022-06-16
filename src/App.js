import React, { useState } from 'react';
import Nav from './components/Nav';

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

  const [contactSelected, setContactSelected] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Nav>
    </div>
  );
}

export default App;
