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
import SentenceBuilder from "./components/AACSNotebook";
import InteractiveLearningModule from "./components/InteractiveLearningModule";
import StorySequencing from "./components/StorySequencing";
import InteractiveStorybook from "./components/InteractiveStoryBook";
import JigsawPuzzle from "./components/JigSawPuzzle";
import VRVid from "./components/VRVid.jsx";


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
      <Route path="/aacs" element={<SentenceBuilder/>}/>
      <Route path="/interactive-learning-module" element={<InteractiveLearningModule/>}/>
      <Route path="/story" element={<StorySequencing/>}/>
      <Route path="/storybook" element={<InteractiveStorybook/>}/>
      <Route path="/puzzle" element={<JigsawPuzzle/>}/>
      <Route path="/vr/:title" element={<VRVid/>}/>
    </Routes>

    
   
    </div>
  )
}

export default App
