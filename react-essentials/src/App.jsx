import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';


function App() {
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
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
