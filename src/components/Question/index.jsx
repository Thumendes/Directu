import React, { useContext, useState } from "react";
import { Context } from "../../context/FormContext";
import style from "./style.module.scss";
import { ImRadioUnchecked, ImParagraphLeft, ImPlus } from "react-icons/im";
import { FiTrash } from "react-icons/fi";

const Question = ({ index }) => {
  const {
    questions,
    setIsOption,
    handleChangeOptionTitle,
    handleChangeQuestionTitle,
  } = useContext(Context);

  const [question, setQuestion] = useState(
    questions.find((value) => value.id === index)
  );

  return (
    <div className={style.container}>
      <div className={style.header}>
        <input
          type="text"
          placeholder={`Questão ${index + 1}`}
          value={question.name}
          onChange={({ target }) =>
            handleChangeQuestionTitle(index, target.value)
          }
        />
        <div>
          {question.options !== null ? (
            <div
              className={style.changeMode}
              onClick={() => setIsOption(index, false)}
            >
              Opções
              <ImRadioUnchecked />
            </div>
          ) : (
            <div
              className={style.changeMode}
              onClick={() => setIsOption(index, true)}
            >
              Parágrafo
              <ImParagraphLeft />
            </div>
          )}
        </div>
      </div>

      {question.options !== null ? (
        <div className={style.options}>
          <ul>
            {question.options.map((option, indexOption) => (
              <li key={indexOption}>
                <div>
                  <ImRadioUnchecked className={style.icon} />
                  <input
                    type="text"
                    placeholder={`Opção ${indexOption + 1}`}
                    value={option.name}
                    onChange={({ target }) =>
                      handleChangeOptionTitle(index, indexOption, target.value)
                    }
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className={style.paragraph}>
          <textarea placeholder="Parágrafo" readOnly></textarea>
        </div>
      )}
    </div>
  );
};

export default Question;
