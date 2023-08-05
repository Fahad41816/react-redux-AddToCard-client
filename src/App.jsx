
import { Provider } from 'react-redux'
import './App.css'
import Main from './components/Main'
 
import Store from './Redux/Store'


function App() {
   

  return (
    <Provider store={Store}>
      <Main></Main>
    </Provider>
  )
}

export default App
