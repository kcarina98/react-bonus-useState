import { useState } from "react";
import "./Question.css";

const Question = () => {
  const [plus, setPlus] = useState(true);
  console.log(plus);

  const [answer, setAnswer] = useState("");
  console.log(answer);

  const showMore = () => {
    setPlus((plus) => !plus);

    if (plus == true) {
      setAnswer((answer) => "Fast learning curve :-)");
    } else {
      setAnswer((answer) => "");
    }
  };

  return (
    <>
      <section className={answer ? "gray" : ""}>
        <div>
          <p className="question">Why is react great?</p>
          <button onClick={showMore}>+</button>
        </div>

        <p className="antwort">{answer}</p>
      </section>
    </>
  );
};

export default Question;
