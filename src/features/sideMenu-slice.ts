import { createSlice } from '@reduxjs/toolkit';

export interface SideMenuState {
	isOpen: boolean;
}

const initialState: SideMenuState = {
	isOpen: false,
};

export const sideMenuSlice = createSlice({
	name: 'sideMenu',
	initialState,
	reducers: {
		openSideMenu: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.isOpen = true;
		},
		closeSideMenu: (state) => {
			state.isOpen = false;
		},
	},
});

// Action creators are generated for each case reducer function
export const { openSideMenu, closeSideMenu } = sideMenuSlice.actions;

export default sideMenuSlice.reducer;
