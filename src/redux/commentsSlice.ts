import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from './store';

interface Comment {
  id: number;
  created: string;
  text: string;
  author: number;
  parent: number | null;
  likes: number;
  children?: Comment[];
}

interface CommentsState {
  comments: Comment[];
  page: number;
  total_pages: number;
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: [],
  page: 1,
  total_pages: 1,
  loading: false,
  error: null,
};

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async (page: number, thunkAPI) => {
    try {
      const response = await axios.get('/api/comments', { params: { page } });
      return response.data;
    } catch (err) {
      const error = err as Error;
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addLike(state, action: PayloadAction<number>) {
      const commentId = action.payload;
      const commentToUpdate = state.comments.find(comment => comment.id === commentId);
      if (commentToUpdate) {
        commentToUpdate.likes += 1;
      }
    },
    removeLike(state, action: PayloadAction<number>) {
      const commentId = action.payload;
      const commentToUpdate = state.comments.find(comment => comment.id === commentId);
      if (commentToUpdate && commentToUpdate.likes > 0) {
        commentToUpdate.likes -= 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loading = false;
        const newComments = action.payload.data.filter((newComment: Comment) => !state.comments.some((existingComment) => existingComment.id === newComment.id));
        state.comments = [...state.comments, ...newComments];
        state.page = action.payload.pagination.page;
        state.total_pages = action.payload.pagination.total_pages;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { addLike, removeLike } = commentsSlice.actions;

export const selectComments = (state: RootState) => state.comments;

export default commentsSlice.reducer;