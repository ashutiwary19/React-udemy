import componentImage from './assets/components.png';
import configImage from './assets/config.png';
import jsxImage from './assets/jsx-ui.png';
import propsImage from './assets/state-mgmt.png'; 

export const CORE_CONCEPTS = [
  {
    img: componentImage,
    title: "Components",
    description: "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen."
  },
  {
    img: configImage,
    title: "Configuration",
    description: "React components are configured with props. Props are like arguments in JavaScript functions. They allow you to pass data and configuration to a component."
  },
  {
    img: jsxImage,
    title: "JSX",
    description: "JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript files. It makes React components more readable and easier to write."
  },
  {
    img: propsImage,
    title: "Props",
    description: "Props (short for properties) are the way React components communicate with each other. They are passed from parent components to child components."
  }
];