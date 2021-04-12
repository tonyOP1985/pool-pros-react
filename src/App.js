import TopBar from './components/TopBar/TopBar';
import ToolBar from './components/ToolBar/ToolBar';
import Body from './components/Content/Body';

import './App.css';

const App = () => {
  return (
    <div>
      <TopBar />
      <ToolBar />
      <Body />
    </div>
  );
}

export default App;
