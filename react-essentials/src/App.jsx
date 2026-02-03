import { useState } from 'react';

import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS, EXAMPLES} from './data.js';
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
    setTabState(previousState => selectedButton)
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
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            <div id="tab-content">
              <h3>{EXAMPLES[tabState]?.title || "Please select a tab to see an example."}</h3>
              <p>{EXAMPLES[tabState]?.description || "No description available for this example."}</p>
              <pre>
                <code>{EXAMPLES[tabState]?.code || ""}</code>
              </pre>
            </div>
        </section>
      </main>
    </div>
  );
}

export default App;
