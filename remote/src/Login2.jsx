import { useRef } from "react";
import "./Button.css";
import useUserData from "./store";

export const Login2 = () => {
  const [data, setData] = useUserData();
  const ref = useRef(null);
  return (
    <div>
      <h1>jotai</h1>
      {data ? (
        <button className="shared-btn" onClick={() => setData(null)}>
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
                ? setData(ref.current.value)
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

export default Login2;
