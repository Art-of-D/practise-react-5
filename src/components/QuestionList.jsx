import { useState } from "react";
import Question from "./Question";
import data from "../data";

const Questions = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id) => {
    if (id === activeId) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <section>
      {data.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Questions;
