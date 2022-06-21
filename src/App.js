import React, { useState } from 'react';
import Nav from './components/Nav';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const [categories] = useState([
    {
      name: 'About Me'
    },
    { name: 'Projects'},
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
          { currentCategory.name === 'About Me' &&
            <AboutMe currentCategory={currentCategory}></AboutMe>
          }
          { currentCategory.name === 'Projects' && 
            <Projects currentCategory={currentCategory}></Projects>
          }
          { currentCategory.name === 'Contact' && 
            <Contact currentCategory={currentCategory}></Contact>
          }
          { currentCategory.name === 'Experience' &&
            <Experience currentCategory={currentCategory}></Experience>
          }
          </>
      </main>
      <Footer />
    </div>
  );
}

export default App;
