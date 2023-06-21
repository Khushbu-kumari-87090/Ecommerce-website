import './App.css';
import {Route,Routes,useLocation} from "react-router-dom";
import MSLogin from './pages/login/MSLogin';
import MSRegister from './pages/register/register';
import Header from "./header/header";

function App() {

  return (
    
    <div className="App">
    
      <Routes>
        <Route path="/login" element={<MSLogin />}></Route>
        <Route path="/register" element={<MSRegister />}></Route>
      </Routes>
    </div>  
  );
}



export default App;









