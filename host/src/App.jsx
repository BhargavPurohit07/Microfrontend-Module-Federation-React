import "./App.css";

import Login from "remoteApp/Login";
import Login2 from "remoteApp/Login2";
import { useObservable } from "remoteApp/store";

function App() {
  const { data } = useObservable()[0];

  return (
    <div className="App">
      <h1>Host Application</h1>
      <Login />
      <Login />
      {data && <div className="card">your user name is {data}</div>}

      <Login2 />
      <Login2 />
    </div>
  );
}

export default App;
