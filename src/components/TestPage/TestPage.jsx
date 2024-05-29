import { useState } from "react";
import { Field, reduxForm } from 'redux-form';
import s from "./testpage.module.css";



export const TestPage = (props) => {

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);


  


  let addNewUserAnswer = (values) => {
    values.preventDefault();
    props.addUserAnswer(values.userAnswer);
    if (props.quiz.questions[step].correct.toString() === props.quiz.questions.userAnswers[step].toString()) {
      setScore(score + 1)
      console.log(score)
    }
  };

  const changeHandler = (index) => {
    if (selectedOptions.includes(index)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== index));
    } else {
      setSelectedOptions([...selectedOptions, index]);
    }
    console.log(selectedOptions)
  };

  return (
    <div className={s.container}>
      <div className={s.testWindow}>
        <h2>Вопрос № {props.quiz.questions[step].id}</h2>
        <p>{props.quiz.questions[step].title}</p>
        <QuizReduxForm />
      </div>
    </div>
  );
};
const QuizForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <Field name={'quiz'} type={'checkbox'} component={checkbox} />
          <div><button>Send</button></div>
      </form>
  )
}

const QuizReduxForm = reduxForm