import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from './store';
import getAuthorsRequest from 'src/api/authors/getAuthorsRequest';

interface Author {
  id: number;
  name: string;
  avatar: string;
}

interface AuthorsState {
  data: Author[] | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthorsState = {
  data: null,
  status: 'idle',
  error: null,
};

export const fetchAuthors = createAsyncThunk(
  'authors/fetchAuthors',
  async (_, thunkAPI) => {
    try {
      const response = await getAuthorsRequest();
      return response;
    } catch (err) {
      const error = err as Error;
      return thunkAPI.rejectWithValue(error.message || 'Failed to fetch authors'); 
    }
  }
);

const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthors.pending, (state) => {
        state.status = 'loading';
        state.error = null; 
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchAuthors.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectAuthors = (state: RootState) => state.authors; 

export default authorsSlice.reducer; 
