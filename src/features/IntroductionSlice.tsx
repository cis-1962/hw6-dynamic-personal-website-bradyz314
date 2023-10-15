import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IntroductionState {
    url: string,
    description: string
}

const initialState = {
    url: '',
    description: '',
} as IntroductionState

export const introductionSlice = createSlice({
    name: 'introduction',
    initialState,
    reducers: {
        updateIntroduction: (state, action: PayloadAction<string[]>) => {
            const [url, desc] = action.payload;
            state.url = url;
            state.description = desc;
        }
    }
})

export const { updateIntroduction } = introductionSlice.actions;

export default introductionSlice.reducer;