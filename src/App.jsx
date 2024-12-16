import { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }

    loadApi();
  }, []);
  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
    </div>
  );
}

export default App;
