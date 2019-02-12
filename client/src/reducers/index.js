import {combineReducers} from 'redux'; 
import SignInReducer from './SignInReducer'
import {reducer as formReducer} from 'redux-form'
import StreamReducer from './StreamReducer'

export default combineReducers({
	signedIn: SignInReducer,
	form: formReducer,
	streams: StreamReducer
});  