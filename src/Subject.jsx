import { useContext } from "react";
import { SubjectContext } from "./SubjectContext";

const Subject = () => {
  const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "skyblue", padding: 10 }}>
      Subject is:-{subject}
    </div>
  );
};

export default Subject;
