import type React from "react";
import { useState } from "react";

interface AnswerProps {
  question: string;
  choices: string[];
  onAnswerSelected: (answer: string) => void;
  answer?: string;
  correctAnswer?: string;
}

const Answer: React.FC<AnswerProps> = ({
  question,
  choices,
  onAnswerSelected,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerClick = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswerSelected(answer);
  };

  return (
    <div className="answer-container">
      <p className="question">{question}</p>
      <ul className="choices">
        {choices.map((choice) => (
          <li key={choice}>
            <button
              type="button"
              onClick={() => handleAnswerClick(choice)}
              onKeyUp={(e) => e.key === "Enter" && handleAnswerClick(choice)}
              className={selectedAnswer === choice ? "selected" : ""}
            >
              {choice}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Answer;
