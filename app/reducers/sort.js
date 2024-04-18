import { ChangeSort } from '../actions/sort';

const InitialState = {
  sort: 'old',
};

export default function posts(state = InitialState, action) {
  switch (action.type) {
    case ChangeSort: {
      //Redux compares old state to new state with === to know if it changed. 
      //If we mutate the state instead of creating a new copy, this test will fail and 
      //updates to the state will not be propogated to subscribers listening 
      //for this state change.
      state = { ...state, sort: action.sort }
      return state;
    }

    default:
      return state;
  }
}
