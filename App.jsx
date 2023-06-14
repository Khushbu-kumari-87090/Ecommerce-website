import './App.css';
import {Route,Routes,useLocation} from "react-router-dom";
import MOLogin from './pages/login/MOLogin';
import MORegister from './pages/register/register';
import Header from "./header/header";
import Header2 from './header2/header2';
import WalletConnection from './features/walletConnection/Wallet';
import Check from './pages/check/check';
import MoListCard from './components/MoListCard/MoListCard';
import MoFilter from './components/MoFilter/MoFilter';
import ProjectDetails from './NewProject/ProjectDetails/ProjectDetails';
import MoAttachments from  './components/MoAttachment/MoAttachment';
import MoDatePicker from  './components/MoDatePicker/MoDatePicker';
import MoDropdown from './components/MoDropdown/MoDropdown';
import MuiFileUploader from './components/MoAttach/MoAttach';
import ListDividers from './components/MoAddMember/MoAddMember';

function App() {

  // const pathName = useLocation();
  // console.log(pathName);
  // const path = pathName.pathname;


  return (
    
    <div className="App">
      {/* {path === "/login" || path === "/walletConnection" ? <Header userName={pathName} /> : <Header2 userName={pathName.state === null ? "" : pathName.state} />}
       */}
      <Routes>
        {/* <Route path="/check" element={<Check />}></Route> */}
        <Route path="/login" element={<MOLogin />}></Route>
        <Route path="/register" element={<MORegister />}></Route>
        <Route path="/walletConnection" element={<WalletConnection />}></Route>
        <Route path="/list" element={<MoListCard />}></Route>
        <Route path="/filter" element={<MoFilter />}></Route>
        <Route path="/projectDetails" element={<ProjectDetails />}></Route>
        <Route path="/attachment" element={<MoAttachments />}></Route>
        <Route path="/datePicker" element={<MoDatePicker />}></Route>
        <Route path="/dropdown" element={<MoDropdown />}></Route>
        <Route path="/upload" element={<MuiFileUploader />}></Route>
        <Route path="/listdiv" element={<ListDividers />}></Route>
      </Routes>
    </div>  
  );
}



export default App;









