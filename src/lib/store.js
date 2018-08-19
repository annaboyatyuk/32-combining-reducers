import {createStore, combineReducers} from 'redux';
import categoryState from '../reducer/category';
import expenseState from '../reducer/expense';

const rootReducer = combineReducers({
  categoryState,
  expenseState,
});

export default () => createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

