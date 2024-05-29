const ADD_USER_ANSWERS = 'ADD-USER-ANSWERS'

let quizState = {
  questions: [
    { id: 1,
      title: "Отметьте ингридиенты Цезарь c курицей",
      variants: [
        "Салат Айсберг",
        "Филе куринное",
        "Филе копч. куринное",
        "Сыр Пармезан",
        "Соус Цезарь",
        "Яйцо перепелиное",
        "Сухарики",
        "Капуста Пекинская",
        "Салат Руккола",
        "Помидоры Черри",
        "Микрозелень",
      ],
      correct: [0, 2, 3, 4, 5, 6, 7, 9],
      userAnswers: []
    }
  ]
}


const quizReducer = (state = quizState, action) => {

  switch (action.type) {

    case ADD_USER_ANSWERS: {
      return {
        ...state,
        userAnswers: [...state.userAnswers, action.answers]
      }
    }
    
    default:
      return state;
  }
}


export const addUserAnswer = (answer) =>
( {type: ADD_USER_ANSWERS, answer})


export default quizReducer;