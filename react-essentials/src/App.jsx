import { useState } from 'react';

import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  const [tabState, setTabState] = useState("Please click a tab to see an example.");
  // tabState will always be in a array format: [initialValue, setValueFunction] 

  let tabContent = <p>Select a tab to see an example.</p>;
  function handleSelect(selectedButton) {
    // Selected button => JSX, Components, Props, State
    console.log('Tab selected:', selectedButton);
    setTabState(previousState => {
      switch(selectedButton) {
        case 'JSX':
          return "JSX stands for JavaScript XML. It allows you to write HTML-like syntax in your JavaScript code, which React then transforms into React elements.";
        case 'Components':
          return "Components are the building blocks of a React application. They are reusable pieces of UI that can be nested, managed, and handled independently.";
        case 'Props':
          return "Props (short for properties) are read-only attributes used to pass data from a parent component to a child component in React.";
        case 'State':
          return "State is a built-in React object that allows components to create and manage their own data. State changes can trigger re-renders of the component.";
        default:
          return previousState;
      }
    })
  }
  return (  
    <div>
     <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map(concept => (
              <CoreConcept 
                {...concept}
              />
            ))}
            {/* You can add more <CoreConcept /> components here for additional concepts */}
          </ul>
        </section>
        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('JSX')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('Components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('Props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('State')}>State</TabButton>
            </menu>
            {tabState}
        </section>
      </main>
    </div>
  );
}

export default App;
