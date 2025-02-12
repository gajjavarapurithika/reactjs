import { legacy_createStore as createStore} from 'redux';
import rootReducer from './reducors';

// Create the Redux store with the root reducer
const store = createStore(rootReducer);

// Export the store
export default store;
