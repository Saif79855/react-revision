import { useRef } from "react";
function App() {
  const countRef = useRef(0);

  function increase() {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  return (
    <>
      {/* <p>{countRef.current}</p> */}

      <button onClick={increase}>Increase</button>
    </>
  );
}

export default App;
