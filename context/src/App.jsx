import { useState,createContext } from 'react'
import './App.css'
import Header from './component/Header'
import CompA from './component/CompA'

const AppState =createContext();

function App() {
  const [data, setData] = useState("webMantra")

  const[app, setApp] = useState("myApp")
  const [name, setName] = useState({name: 'yogesh', age: 22});

  return (
      <div>
      <AppState.Provider value={{app, name}}>
        <Header/>
        <CompA data={data} />
        </AppState.Provider>
      </div>
      
      
   
  )
}

export default App;
export {AppState}
