import logo from './logo.svg';
import './App.css';
import Addtask from './Addtask';
import Todolist from './Todolist'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './reducers/rootReducer';



function App() {
  const store = createStore(rootReducer)
  return (
    <div className="App">
      <h1>Redux Persist</h1>
      <Provider store={store}>
        <Addtask />
        <Todolist/>
      </Provider>
      
    </div>
  );
}

export default App;
