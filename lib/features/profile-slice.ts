import { User } from "@/types/user";
import { createSlice } from "@reduxjs/toolkit";

type ProfileState = {
  user: User | null;
};

const initialState: ProfileState = {
  user: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = profileSlice.actions;

export default profileSlice.reducer;
