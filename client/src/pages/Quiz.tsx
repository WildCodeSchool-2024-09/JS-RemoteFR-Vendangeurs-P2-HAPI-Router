import type React from "react";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Answer from "../components/answer";

const questions = {
  gryffindor: [
    {
      question: "What is the Slytherin house animal?",
      choices: ["Badger", "Eagle", "Lion", "Snake"],
      correctAnswer: "Snake",
    },

    {
      question: "In which house is Harry Potter sorted at Hogwarts?",
      choices: ["Hufflepuff", "Slytherin", "Gryffindor", "Ravenclaw"],
      correctAnswer: "Gryffindor",
    },

    {
      question: "What main quality characterizes the members of Gryffindor?",
      choices: ["Loyalty", "Courage", "Intelligence", "Dumbledore"],
      correctAnswer: "Courage",
    },

    {
      question: "What is Gryffindor's symbol?",
      choices: [
        "Helga's Cup",
        "Godric's Sword",
        "Rowena's Diadem",
        "La mer Noire",
      ],
      correctAnswer: "Godric's Sword",
    },

    {
      question: "What is the Gryffindor house animal?",
      choices: ["Lion", "Eagle", "Badger", "Snake"],
      correctAnswer: "Lion",
    },
  ],

  hufflepuff: [
    {
      question:
        "Which potion allows someone to take the appearance of another person?",
      choices: [
        "Veritaserum",
        "Polyjuice Potion",
        "Felix Felicis",
        "Amortentia",
      ],
      correctAnswer: "Polyjuice Potion",
    },
    {
      question: "What is the name of Harry’s famous owl?",
      choices: ["Scabbers", "Crookshanks", "Hedwig", "Buckbeak"],
      correctAnswer: "Hedwig",
    },

    {
      question: "Who is the Keeper of Keys and Grounds at Hogwarts?",
      choices: [
        "Argus Filch",
        "Rubeus Hagrid",
        "Albus Dumbledore",
        "Severus Snape",
      ],
      correctAnswer: "Rubeus Hagrid",
    },

    {
      question: "In which book do we learn about Horcruxes?",
      choices: [
        "The Goblet of Fire",
        "The Order of the Phoenix",
        "The Deathly Hallows",
        "The Half-Blood Prince",
      ],
      correctAnswer: "The Half-Blood Prince",
    },

    {
      question: "Which spell is used to kill someone instantly?",
      choices: ["Expelliarmus", "Avada Kedavra", "Lumos", "Petrificus Totalus"],
      correctAnswer: "Avada Kedavra",
    },
  ],

  ravenclaw: [
    {
      question: "Who is the head of Ravenclaw house?",
      choices: [
        "Professor Flitwick",
        "Professor Snape",
        "Professor McGonagall",
        "Professor Sprout",
      ],
      correctAnswer: "Professor Flitwick",
    },

    {
      question: "What is Voldemort’s real name?",
      choices: [
        "Tom Marvolo Riddle",
        "Gellert Grindelwald",
        "Salazar Slytherin",
        "Severus Snape",
      ],
      correctAnswer: "Tom Marvolo Riddle",
    },

    {
      question: "What is the name of Neville Longbottom’s mother?",
      choices: ["Lily", "Alice", "Molly", "Andromeda"],
      correctAnswer: "Alice",
    },

    {
      question:
        "What is the name of the magical law enforcement prison guarded by Dementors?",
      choices: ["Nurmengard", "Azkaban", "Gringotts", "St. Mungo's"],
      correctAnswer: "Azkaban",
    },

    {
      question: "What are the three objects that make up the Deathly Hallows?",
      choices: [
        "The Elder Wand, the Resurrection Stone, and the Invisibility Cloak",
        "The Philosopher’s Stone, the Mirror of Erised, and the Sorting Hat",
        "The Basilisk Fang, the Marauder’s Map, and the Goblet of Fire",
        "The Elder Wand, the Sword of Gryffindor, and the Firebolt",
      ],
      correctAnswer:
        "The Elder Wand, the Resurrection Stone, and the Invisibility Cloak",
    },
  ],
};

const Quiz: React.FC = () => {
  const { house } = useParams<{ house: string }>();
  const houseQuestions = questions[house as keyof typeof questions] || [];
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelected = (answer: string) => {
    const currentQuestion = houseQuestions[currentQuestionIndex];
    if (answer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < houseQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="quiz-container">
      <h1>Are you ready ? 🪄</h1>
      {showResult ? (
        <div className="result">
          <h2>
            Your Score: {score} / {houseQuestions.length}
          </h2>
          <NavLink to="/home" id="returnHome">
            <button type="button" className="returnHomeButton">
              Back home
            </button>
          </NavLink>
        </div>
      ) : (
        <Answer
          question={houseQuestions[currentQuestionIndex].question}
          choices={houseQuestions[currentQuestionIndex].choices}
          onAnswerSelected={handleAnswerSelected}
          answer={houseQuestions[currentQuestionIndex].correctAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
