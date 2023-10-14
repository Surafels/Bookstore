import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/eMt0DeyQWpFLeW6SoZUE/books';
const initialState = {
  books: [],
  isLoading: false,
  error: false,
};

// Async thunk for fetching books from the backend
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(apiUrl);
  console.log(response.data, 'data');
  return response.data;
});

// Async thunk for adding a book
export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post(apiUrl, book);
  return { ...book, id: response.data.item_id };
});

// Async thunk for removing a book
export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${apiUrl}/${bookId}`);
  return bookId;
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // Fetch books reducers
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.books = Object.keys(action.payload).map((item) => {
          const book = action.payload[item][0];
          return {
            id: item,
            title: book.title,
            author: book.author,
            category: book.category,
          };
        });
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });

    // Add book reducer
    builder
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        const { title, author } = action.payload;
        if (title || author) {
          state.books.push(action.payload);
        }
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });

    // Remove book reducer
    builder
      .addCase(removeBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const bookId = action.payload;
        state.books = state.books.filter((book) => book.id !== bookId);
      })
      .addCase(removeBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default bookSlice.reducer;
