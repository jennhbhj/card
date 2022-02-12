import TwitterInfo from './components/TwitterInfo';
import Groups from './components/Groups';
import NatalChart from './components/NatalChart';
import DoNotFollowIf from './components/DoNotFollowIf';
import BeforeYouFollow from './components/BeforeYouFollow';

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
              <span>radfem;</span>
              <span>she/her;</span>
              <span>21 years old;</span>
              <span>INTP/ENTP(?);</span>
            </div>
          </div>
          <BeforeYouFollow />
          <DoNotFollowIf />
          <NatalChart />
          <Groups />
        </div>
      </div>
    </div>
  );
}

export default App;
