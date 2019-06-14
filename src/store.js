import { createStore } from 'redux' 
import QUOTE from './reducers/index'

const store = createStore(QUOTE)

export default store