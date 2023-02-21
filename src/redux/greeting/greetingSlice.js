import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getGreetingData = createAsyncThunk(
  'messages/getGreetingData',
  async () => {
    const resp = await fetch('api/messages')
      .then((resp) => resp.json())
      .then((result) => result);
    return resp;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    success: false,
    text: '',
  },
  extraReducers: (builder) => {
    builder.addCase(getGreetingData.fulfilled, (state, action) => ({
      ...state,
      success: true,
      text: action.payload.text,
    }));
  },
});

export default greetingSlice.reducer;
export { getGreetingData };
