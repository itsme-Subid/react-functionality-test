import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { type Tab } from "../../types/tab";

type TabState = { tabs: Tab[]; activeTab: Tab | null };

const initialState = {} as TabState;

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setTabs: (state, action: PayloadAction<TabState["tabs"]>) => {
      state.tabs = action.payload;
    },
    setActiveTab: (state, action: PayloadAction<TabState["activeTab"]>) => {
      state.activeTab = action.payload;
    },
  },
});

export const { setTabs, setActiveTab } = tabSlice.actions;
export default tabSlice.reducer;
