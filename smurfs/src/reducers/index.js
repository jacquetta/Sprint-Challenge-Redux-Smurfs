/*
  Be sure to import in all of the action types from `../actions`
*/
import { FETCH_SMURF_START, FETCH_SMURF_SUCCESS,FETCH_SMURF_FAIL} from '../actions';

const initialState = {
  smurfs: [],
  isFetchingSmurfs: false,
  error: ''
};

function reducer(state = initialState, action) {
  switch (action.type){
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetchingSmurfs: true,
        error:''
      }

    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetchingSmurfs: true,
        error:''
      }
      
    case FETCH_SMURF_FAIL:
      return {
        ...state,
        isFetchingSmurfs: true,
        error: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
