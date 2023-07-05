import { useAppSelector } from "../redux/store";
import { Tab } from "../types/tab";

const TabContent = () => {
  const activeTab: Tab | null = useAppSelector(
    (state) => state.tabReducer.activeTab
  );
  return (
    <div className="tabs__panels p-4">
      {activeTab && (
        <div className="tabs__panel" key={activeTab.id} id={activeTab.id}>
          <p>{activeTab.tabContent}</p>
        </div>
      )}
    </div>
  );
};

export default TabContent;
