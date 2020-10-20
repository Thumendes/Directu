import React, { useContext, useState } from "react";
import { Context } from "../../context/FormContext";
import style from "./style.module.scss";
import { ImRadioUnchecked, ImParagraphLeft, ImPlus } from "react-icons/im";
import { FiTrash } from "react-icons/fi";

const Question = ({ index }) => {
  const { questions, addOption, removeQuestion, removeOption, handleChangeQuestionTitle, handleChangeOptionTitle } = useContext(
    Context
  );
  const [question, setQuestion] = useState(questions[index]);
  const [isOptions, setIsOptions] = useState(true);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <input type="text" placeholder={`Questão ${index + 1}`} onChange={({target}) =>handleChangeQuestionTitle(index, target.value)} />
        <div>
          {isOptions ? (
            <div
              className={style.changeMode}
              onClick={() => setIsOptions(false)}
            >  
                Opções
              <ImRadioUnchecked />
            </div>
          ) : (
            <div
              className={style.changeMode}
              onClick={() => setIsOptions(true)}
            >
                Parágrafo
              <ImParagraphLeft />
            </div>
          )}
          <div
            className={style.deleteQuestion}
            onClick={() => removeQuestion(index)}
          >
            <FiTrash color="#ff0033" />
          </div>
        </div>
      </div>

      {isOptions ? (
        <div className={style.options}>
          <ul>
            {question.options.map((option, indexOption) => (
              <li key={indexOption}>
                <div>
                  <ImRadioUnchecked className={style.icon} />
                  <input type="text" placeholder={`Opção ${indexOption + 1}`} handleChangeOptionTitle={({target}) => handleChangeOptionTitle(index, indexOption, target.value)} />
                </div>
                <FiTrash color="#ff0033," onClick={() => removeOption(indexOption, index)} />
              </li>
            ))}
            <li>
              <div onClick={() => addOption(index)}>
                <ImPlus className={style.icon} />
                <span>Adicionar Opção</span>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <div className={style.paragraph}>
          <textarea placeholder="Parágrafo"></textarea>
        </div>
      )}
    </div>
  );
};

export default Question;
