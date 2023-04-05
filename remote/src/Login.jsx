import { useRef } from "react";

import "./Button.css";
import { useObservable, observable } from "./store";

export const Login = () => {
  const { data } = useObservable()[0];
  const ref = useRef(null);
  return (
    <div>
      <h1>windowed-observable</h1>
      {data ? (
        <button className="shared-btn" onClick={() => observable.publish(null)}>
          {" "}
          Logout {data}
        </button>
      ) : (
        <>
          <input type="text" ref={ref} placeholder="Enter your user name" />
          <br />
          <button
            className="shared-btn"
            onClick={() =>
              ref.current.value
                ? observable.publish(ref.current.value)
                : alert("please enter you name")
            }
          >
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default Login;
