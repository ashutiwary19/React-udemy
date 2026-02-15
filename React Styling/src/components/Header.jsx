import logo from "../assets/logo.png";
// import "./Header.css";
import classes from "./Header.module.css";
export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p
        className={classes.paragraph}
        /* style={{
          color: "#af2121",
          textAlign: "center",
        }} */
      >
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
