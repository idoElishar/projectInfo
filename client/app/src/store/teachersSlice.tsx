/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gql } from "@apollo/client";
import client from '../apolloClient/client';
import { Course } from '../featchers/courses/interfaces/CourseInterface';
export const GET_COURSES_DETAILS = gql`
  query GetCoursesDetails {
    Courses {
      id
      courseName
      description
      lectures {
        title
      }
      exercises {
        title
      }
      topicsCovered {
        topic
      }
      lecturer
      imageURL
    }
  }
`;

export const fetchCourses = createAsyncThunk(
  'courses/fetchCourses',
  async () => {
    const response = await client.query({
      query: GET_COURSES_DETAILS,
    });
    return response.data.Courses;
  }
);


interface CourseSliceState {
  Courses: Course[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CourseSliceState = {
  Courses: [],
  status: 'idle',
  error: null,
};

export const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {},
  extraReducers: (builder:any) => {
    builder
      .addCase(fetchCourses.pending, (state:any) => {
        state.status = 'loading';
      })
      .addCase(fetchCourses.fulfilled, (state:any, action:any) => {
        state.status = 'succeeded';
        state.Courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state:any, action:any) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default courseSlice.reducer;
