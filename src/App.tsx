import "./App.css";
import Aside from "./components/aside";
import Tabs from "./components/tabs";
import TabContent from "./components/tabContent";

const App = () => {
  return (
    <div className="app flex">
      <Aside />
      <div className="right-side h-screen overflow-y-auto">
        <Tabs />
        <TabContent />
      </div>
    </div>
  );
};

export default App;
