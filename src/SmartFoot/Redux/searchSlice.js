import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const generateAnswer = createAsyncThunk(
  'search/generateAnswer',
  async (query, { rejectWithValue }) => {
    try {
      const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
        method: "post",
        data: {
          contents: [
            {
              parts: [
                {
                  text: query,
                },
              ],
            },
          ],
        },
      });
      console.log('API Response:', response.data);
      return { answer: response.data.candidates[0].content.parts[0].text };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  answer: '',
  loading: false,
  error: null,
  history: JSON.parse(localStorage.getItem('chatHistory')) || [], // store chat history from localStorage
  theme: localStorage.getItem('theme') || 'light', // default theme
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    clearChat: (state) => {
      state.answer = '';  // Clear the current chat result
    },
    newChat: (state) => {
      if (state.answer) {
        state.history.push(state.answer); // Add the current chat to history before starting a new one
        localStorage.setItem('chatHistory', JSON.stringify(state.history)); // Store history in localStorage
      }
      state.answer = '';  // Clear current chat for a new one
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'; // Toggle between light and dark theme
      localStorage.setItem('theme', state.theme);
    },
    openChatFromHistory: (state, action) => {
      state.answer = action.payload; // Set the selected chat as the current answer
    },
    deleteChatHistory: (state, action) => {
      state.history = state.history.filter((_, index) => index !== action.payload); // Remove chat at the given index
      localStorage.setItem('chatHistory', JSON.stringify(state.history)); // Update localStorage
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateAnswer.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(generateAnswer.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload.answer;
      })
      .addCase(generateAnswer.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearChat, newChat, toggleTheme, openChatFromHistory, deleteChatHistory } = searchSlice.actions;
export default searchSlice.reducer;




// // src/redux/searchSlice.js

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const generateAnswer = createAsyncThunk(
//   'search/generateAnswer',
//   async (query, { rejectWithValue }) => {
//     try {
//       const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
//       const response = await axios({
//         url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`,
//         method: "post",
//         data: {
//           contents: [
//             {
//               parts: [
//                 {
//                   text: query,
//                 },
//               ],
//             },
//           ],
//         },
//       });
//       console.log('API Response:', response.data);
//       return { answer: response.data.candidates[0].content.parts[0].text };
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const searchSlice = createSlice({
//   name: 'search',
//   initialState: {
//     answer: '',
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(generateAnswer.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(generateAnswer.fulfilled, (state, action) => {
//         state.loading = false;
//         state.answer = action.payload.answer;
//       })
//       .addCase(generateAnswer.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export default searchSlice.reducer;








// import { createSlice } from '@reduxjs/toolkit';

// const searchSlice = createSlice({
//   name: 'search',
//   initialState: {
//     results: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     searchStart(state) {
//       state.loading = true;
//       state.error = null;
//     },
//     searchSuccess(state, action) {
//       state.loading = false;
//       state.results = action.payload;
//     },
//     searchError(state, action) {
//       state.loading = false;
//       state.error = action.payload;
//     },
//   },
// });

// export const { searchStart, searchSuccess, searchError } = searchSlice.actions;
// export default searchSlice.reducer;
