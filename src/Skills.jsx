import { useState } from "react";

function Skills() {
  const [skill, setSkill] = useState([]);

  const handleSkill = (event) => {
    if (event.target.checked) {
      setSkill([...skill, event.target.value]);
    }else{
       setSkill(skill.filter((item)=>{return item != event.target.value}))
    }
  };

  return (
    <div>
      <input type="checkbox" id="php" value="php" onChange={handleSkill} />
      <label htmlFor="php">PHP</label>

      <br />
      <br />

      <input type="checkbox" id="js" value="js" onChange={handleSkill} />
      <label htmlFor="js">JS</label>

      <br />
      <br />

      <input type="checkbox" id="java" value="java" onChange={handleSkill} />
      <label htmlFor="java">JAVA</label>

      <br />
      <br />

      <h1>{skill.toString()}</h1>
    </div>
  );
}

export default Skills;
