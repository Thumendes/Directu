import React, { createContext, useState } from "react";

export const Context = createContext(null);

const initialQuestions = [
  {
    name: "",
    options: [
      {
        name: "",
      },
    ],
  },
];

const ContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState(initialQuestions);

  const addQuestion = () => {
    if(questions.length === 3) return;
    setQuestions([
      ...questions,
      {
        name: "",
        options: [
          {
            name: "",
          },
        ],
      },
    ]);
  };

  const removeQuestion = (indexQuestion) => {
    console.table(questions)
    console.log(indexQuestion)
    setQuestions(
      questions.filter((question, index) => indexQuestion !== index)
    );
  };

  const addOption = (indexQuestion) => {
    setQuestions(
      questions.map((question, index) => {
        if (index !== indexQuestion) return question;
        if (question.options.length === 3) return question;

        question.options = [...question.options, { name: "" }];
        return question;
      })
    );
  };

  const removeOption = (indexOption, indexQuestion) => {
    setQuestions(
      questions.map((question, index) => {
        if (index === indexQuestion) {
          question.options.splice(indexOption, 1)
        }
        return question
      })
    );
  };

  const handleChangeQuestionTitle = (indexQuestion, title) => {
    setQuestions(
      questions.map((question, index) => {
        if(indexQuestion === index){
          question.name = title
        }
        return question
      })
    )
  }

  const handleChangeOptionTitle = (indexQuestion, indexOption, title) => {
    setQuestions(
      questions.map((question, indexQ) => {
        if(indexQuestion === indexQ){
          question.options.map((option, indexO) => {
            if(indexOption === indexO){
              option.name = title
            }
          })
        }
        return question
      })
    )
  }

  const value = {
    addQuestion,
    removeQuestion,
    addOption,
    removeOption,
    questions,
    handleChangeQuestionTitle,
    handleChangeOptionTitle
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
