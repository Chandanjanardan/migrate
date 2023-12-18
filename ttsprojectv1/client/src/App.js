import './App.css';
import Headers from './components/Headers';
import {Routes,Route} from "react-router-dom"
import Login from "./pages/Login"
import Index from './pages/Index';

function App() {
  return (
<>
<Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='/epohhn' element={<Index/>}/>
</Routes>
</>
  );
}

export default App;
