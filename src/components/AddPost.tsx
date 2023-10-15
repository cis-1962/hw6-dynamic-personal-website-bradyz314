import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/PostsSlice";

interface AddPostProps {
    endAdd: (boolean) => void
}

export default function AddPost({endAdd: end} : AddPostProps) {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const dispatch = useDispatch();
    const edit = (add: boolean) => {
        if (add) {
            dispatch(addPost([title, image, desc]))
        }
        end(false);
    }
    return (
        <div>
            <h2>New Post</h2>
            <h4>Title</h4>
            <textarea
                value={title}
                placeholder='Enter title of the post...'
                onChange={(e) => setTitle(e.target.value)}
            />
            <h4>Image</h4>
            <textarea
                value={image}
                placeholder='Enter image url...'
                onChange={(e) => setImage(e.target.value)}
            />
            <h4>Description</h4>
            <textarea
                value={desc}
                placeholder='Enter description...'
                onChange={(e) => setDesc(e.target.value)}
            />
            <button
                type='submit'
                onClick={() => edit(true)}
            >
                Save
            </button>
            <button
                type='submit'
                onClick={() => edit(false)}
            >
                Cancel
            </button>
        </div>
    )
}