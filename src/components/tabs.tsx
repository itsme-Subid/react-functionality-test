import { useAppSelector } from "../redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { setActiveTab } from "../redux/slices/tabSlice";
import { type Tab } from "../types/tab";

const Tabs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const tabs: Tab[] = useAppSelector((state) => state.tabReducer.tabs);
  const activeTab: Tab | null = useAppSelector(
    (state) => state.tabReducer.activeTab
  );
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    tab: Tab
  ) => {
    event.preventDefault();
    dispatch(setActiveTab(tab));
  };
  return (
    <ul className="tabs flex list-none border-b sticky top-0 bg-white border-between w-full overflow-x-auto">
      {tabs?.map((tab, index) => (
        <li
          key={index}
          className={
            activeTab?.id === tab.id ? "border-b-4 border-blue-500" : ""
          }
        >
          <a
            href={`#${tab.id}`}
            onClick={(event) => handleClick(event, tab)}
            className="p-4 inline-block font-semibold text-lg whitespace-nowrap"
          >
            {tab.tabName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
