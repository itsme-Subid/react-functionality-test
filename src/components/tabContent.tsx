import { useAppSelector } from "../redux/store";
import { Tab } from "../types/tab";

const TabContent = () => {
  const activeTab: Tab | null = useAppSelector(
    (state) => state.tabReducer.activeTab
  );
  return (
    <div className="tabs__panels p-4 h-full overflow-y-auto">
      {activeTab && (
        <div className="tabs__panel" key={activeTab.id} id={activeTab.id}>
          <p className="mb-24">{activeTab.tabContent}</p>
        </div>
      )}
    </div>
  );
};

export default TabContent;
