import logo from './logo.svg';
import './App.css';
import Addtask from './Addtask';
import Todolist from './Todolist'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'



function App() {
  const persistConfig = {
    key:'root',
    storage
  }
  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return (
    <div className="App">
      <h1>Redux Persist</h1>
      <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Addtask />
          <Todolist />
      </PersistGate>
        
      </Provider>
      
    </div>
  );
}

export default App;
