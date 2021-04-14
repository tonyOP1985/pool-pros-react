import TopBar from './components/TopBar/TopBar';
import ToolBar from './components/ToolBar/ToolBar';
import Body from './components/Content/Body';
import WaterImg from './components/Content/WaterImg/WaterImg';

import './App.css';

const App = () => {
  return (
    <div>
      <TopBar />
      <ToolBar />
      <Body />
      <WaterImg />
    </div>
  );
}

export default App;
