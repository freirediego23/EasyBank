import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Landing from "./components/Landing";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Landing></Landing>
    </>
  );
}

export default App;
