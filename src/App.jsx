import { useState } from "react";
import College from "./College";
import { SubjectContext } from "./SubjectContext";

function App() {
  const [subject, setSubject] = useState("");
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <h3>Context Api</h3>
        <select
          defaultValue={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="maths">Maths</option>
          <option value="english">English</option>
          <option value="science">Science</option>
        </select>
        <College />
      </SubjectContext.Provider>
    </div>
  );
}

export default App;
