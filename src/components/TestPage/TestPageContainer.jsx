import React from 'react';
import { connect } from 'react-redux';
import { addUserAnswer } from "../../data/questions-reducer";
import { getQuizState } from "../../data/quiz-selector"
import { TestPage } from "./TestPage";


const TestPageContainer = (props) => {
  return (
    <TestPage quiz={props.quiz} addUserAnswer={props.addUserAnswer} />
  )
}
  


let mapStateToProps = (state) => ({
  quiz: getQuizState(state)
})


export default connect (mapStateToProps, { addUserAnswer })( TestPageContainer );