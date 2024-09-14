import {Routes,Route} from "react-router-dom"; 

import Company from "./routes/Company";
import Learning from "./routes/Learning";
import Work from "./routes/Work";
import Testimonials from "./routes/Testimonials";
import Uses from "./routes/Uses";
import Research  from "./routes/Research";
import Home from "./routes/Home";
import LessonLibrary from "./routes/LessonLibrary";
import Dashboard from "./components/Dashboard/Dashboard";
import PECSNotebook from "./components/PECSNotebook";


function App() {


  return (
    <div className='App'>
      
    <Routes>
      <Route path="/" element={<Home/>}  />
      <Route path="/Learning" element={<Learning/>}  />
      <Route path="/Company" element={<Company/>}  />
      <Route path="/Work" element={<Work/>}  />
      <Route path="/Testimonials" element={<Testimonials/>}  />
      <Route path="/Research" element={<Research/>}  />
      <Route path="/Uses" element={<Uses/>}  />
      <Route path="/lesson-library" element={<LessonLibrary/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/pecs" element={<PECSNotebook/>}/>
    </Routes>

    
   
    </div>
  )
}

export default App
