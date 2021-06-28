import TopBar from './components/TopBar/TopBar';
import ToolBar from './components/ToolBar/ToolBar';
import Body from './components/Content/Body';
import WaterImg from './components/Content/WaterImg/WaterImg';
import DealersContent from './components/Content/Dealers/DealersContent';
import Footer from './components/Footer/Footer';

import './App.css';

const App = () => {
  return (
    <div>
      <TopBar />
      <ToolBar />
      <Body />
      <WaterImg />
      <DealersContent />
      <Footer />
    </div>
  );
}

export default App;
