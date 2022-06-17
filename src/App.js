import React, { useState } from 'react';
import Nav from './components/Nav';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  const [categories] = useState([
    {
      name: 'Projects'
    },
    { name: 'About Me'},
    { name: 'Contact'},
    { name: 'Experience'}
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
          <>
          { currentCategory.name === 'Projects' &&
            <Projects currentCategory={currentCategory}></Projects>
          }
          { currentCategory.name === 'About Me' && 
            <AboutMe currentCategory={currentCategory}></AboutMe>
          }
          { currentCategory.name === 'Contact' && 
            <Contact currentCategory={currentCategory}></Contact>
          }
          { currentCategory.name === 'Experience' &&
            <Experience currentCategory={currentCategory}></Experience>
          }
          </>
      </main>
    </div>
  );
}

export default App;
