import { applyMiddleware, combineReducers, legacy_createStore, compose } from "redux";
import quizReducer from './questions-reducer';
import {thunk}  from "redux-thunk";
import {reducer as formReducer} from 'redux-form';


let reducers = combineReducers({
  quiz: quizReducer,
  form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = legacy_createStore(reducers, composeEnhancers( applyMiddleware(thunk)));

export default store;