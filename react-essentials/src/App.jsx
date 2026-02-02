import reactImg from './assets/react-core-concepts.png';
import componentImage from './assets/components.png';
import configImage from './assets/config.png';
import jsxImage from './assets/jsx-ui.png';
import propsImage from './assets/state-mgmt.png'; 

const reactDescriptions = [
  'Fundamental',
  'Crucial',
  'Core'
]

function CoreConcept(props){
  return (<li>
    <img src={props.img} alt={props.title} />
    <h3>{props.title}</h3>
    <p>{props.description}</p>
  </li>);
}

function Header() {
  var i = Math.floor(Math.random() * reactDescriptions.length);
  return (
  <header>
        <img src={reactImg} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[i]} React concepts you will need for almost any app you are
          going to build! - Test
        </p>
  </header>);
}


function App() {
  return (  
    <div>
     <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
              img={componentImage} 
              title="Components" 
              description="Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen." 
            />
            <CoreConcept 
              img={configImage} 
              title="Configuration" 
              description="React components are configured with props. Props are like arguments in JavaScript functions. They allow you to pass data and configuration to a component." 
            />
            <CoreConcept 
              img={jsxImage} 
              title="JSX" 
              description="JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes React components more readable and easier to write." 
            />
            <CoreConcept 
              img={propsImage} 
              title="Props" 
              description="Props (short for properties) are the way React components communicate with each other. They are passed from parent components to child components." 
            />
            {/* You can add more <CoreConcept /> components here for additional concepts */}
          </ul>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
