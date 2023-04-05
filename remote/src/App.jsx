import { useObservable } from "./store";

import "./App.css";

function App() {
  const { data } = useObservable()[0];

  return (
    <div className="App">
      <h1>Remote Application</h1>
      <h2>Don't look at me i just share my code</h2>
      <div className="card">
        {data ? `${data} you are loged in!` : "You are not logged in"}
      </div>
    </div>
  );
}

export default App;
