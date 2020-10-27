import React, { createContext, useState } from "react";
import initialQuestions from "../helpers/InitialFormValue";

export const Context = createContext(null);

const ContextProvider = ({ children }) => {
  const [questions, setQuestions] = useState(initialQuestions);

  const setIsOption = (indexQuestion, value) => {
    console.log(indexQuestion, value);
    setQuestions(
      questions.map((question) => {
        if (question.id === indexQuestion) {
          if (value === false) {
            question.options = null;
          } else {
            question.options = [
              {
                name: "",
              },
              {
                name: "",
              },
              {
                name: "",
              },
            ];
          }
        }
        return question;
      })
    );
  };

  const handleChangeOptionTitle = (indexQuestion, indexOption, value) => {
    setQuestions(
      questions.map((question) => {
        if (question.id === indexQuestion) {
          question.options[indexOption].name = value;
        }
        return question;
      })
    );
  };

  const handleChangeQuestionTitle = (indexQuestion, value) => {
    setQuestions(
      questions.map((question) => {
        if (question.id === indexQuestion) {
          question.name = value;
        }
        return question;
      })
    );
  };

  const value = {
    questions,
    setIsOption,
    handleChangeOptionTitle,
    handleChangeQuestionTitle,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default ContextProvider;
