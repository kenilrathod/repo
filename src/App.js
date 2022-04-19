import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
// import Guide from './components/Guide'
// import Guideinner from './components/Guideinner';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IndexProvider from "./context/Index.provider";
function App() {
    return (
        <>
            <IndexProvider>
                <Router>
                    <Header />
                    {/* <Routes>
        <Route path="/" element={<Header/>} />
        <Route path="/login" element={<Login/>}/> 
        <Route path="/guide/:id" element={<Guideinner/>} />
      </Routes> */}
                </Router>
            </IndexProvider>
        </>
    );
}

export default App;
