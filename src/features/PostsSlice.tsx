import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface PostInfo {
    id: number,
    title: string,
    imageUrl: string,
    description: string
    inEdit?: boolean
}

export interface PostsState {
    id: number,
    posts: PostInfo[]
}

const initialState: PostsState = {
    id: 1,
    posts: []
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<string[]>) => {
            const [title, url, desc] = action.payload;
            state.posts.push({
                id: state.id,
                title,
                imageUrl: url,
                description: desc,
                inEdit: false
            })
            state.id += 1;
        },
        removePost: (state, action: PayloadAction<number>) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        },
        updatePost: (state, action: PayloadAction<PostInfo>) => {
            const updated = action.payload;
            state.posts = state.posts.map((post) => post.id === updated.id ? updated : post)
        }
    }
})

export const { addPost, removePost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;