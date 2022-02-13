import TwitterInfo from './components/TwitterInfo';
import Groups from './components/Groups';
import NatalChart from './components/NatalChart';
import GeneralInfo from './components/GeneralInfo';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="card-container">
        <div className="card-content">
          <TwitterInfo />
          <div className="under-the-sea">
            <span>
              call me <b>nana</b>!
            </span>
            <div className="general-info">
              <span>радфем;</span>
              <span>she/her;</span>
              <span>21 годик;</span>
              <span>INTP/ENTP(?);</span>
            </div>
          </div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<GeneralInfo />} />
            <Route path="/natalchart" element={<NatalChart />} />
            <Route path="/groups" element={<Groups />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
