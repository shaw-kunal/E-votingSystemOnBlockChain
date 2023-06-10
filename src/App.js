import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About"
import Home from "./pages/Home"
import Registration from "./pages/Registration"
import SingleCandidate from "./pages/SingleCandidate"
import VotingRegistration from "./pages/VotingRegistration"
import Result from "./pages/Result"
import Candidates from "./pages/Candidates"
import Voter from "./pages/Voter"
import VotingArea from "./pages/VotingArea"
import Login from "./pages/Login"
import UserManual from "./pages/UserManual"



const App = () => {
  return (

    <BrowserRouter>
      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vote" element={<UserManual/>}/>
        <Route path="/register" element={<Registration/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/candidates" element={<Candidates/>} />
        <Route path="/candidate/:id" element={<SingleCandidate />} />
        <Route path="votingReg" element={<VotingRegistration />} />
        <Route path="/result" element={<Result />} />
        <Route path="/voter" element={<Voter/>}/>
        <Route path="/votingArea" element={<VotingArea/>}/>



      </Routes>
    </BrowserRouter>
  )
}

export default App
