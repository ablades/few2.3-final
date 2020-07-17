import React from 'react'
import './App.css'
import { createStore} from 'redux'
import Home from './components/home'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Home/>
      </div>
    </Provider>
  )
}

export default App;
