import { useEffect } from "react";

const Component = ({ data, count }) => {
  function callOnly() {
    console.log("Called callOnly");
  }

  useEffect(() => {
    callOnly();
  }, [data]);

  return (
    <>
      <div>
        <p>Data:-{data}</p>
        <p>Count:- {count} </p>
      </div>
    </>
  );
};

export default Component;
