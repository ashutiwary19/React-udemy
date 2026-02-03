import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';

function App() {
  let tabContent = <p>Select a tab to see an example.</p>;
  function handleSelect(selectedButton) {
    // Selected button => JSX, Components, Props, State
    console.log('Tab selected:', selectedButton);
    tabContent = <p>You selected the {selectedButton} tab.</p>;
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
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
