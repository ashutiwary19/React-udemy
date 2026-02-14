import { getRandomInt } from "../util";
import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = [
  'Fundamental',
  'Crucial',
  'Core'
];

export default function Header() {
  return (
    <header>
      <img src={reactImg} alt="React Core Concepts" />
      <h1>React Essentials</h1>
      <p>Learn the {reactDescriptions[getRandomInt(reactDescriptions.length)]} concepts of React</p>
    </header>
  );
}