import { useState } from "react";
import { useDispatch } from "react-redux";
import { PostInfo, removePost, updatePost } from "../features/PostsSlice"

export default function EditPost({id, title: postTitle, imageUrl, description} : PostInfo) {
    const [title, setTitle] = useState(postTitle);
    const [image, setImage] = useState(imageUrl);
    const [desc, setDesc] = useState(description);
    const dispatch = useDispatch();
    return (
        <>
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
                onClick={() => dispatch(updatePost({
                    id,
                    title,
                    imageUrl: image,
                    description: desc,
                    inEdit: false
                }))}
            >
                Save
            </button>
            <button
                type='submit'
                onClick={() => dispatch(updatePost({
                    id,
                    title: postTitle,
                    imageUrl,
                    description,
                    inEdit: false
                }))}
            >
                Cancel
            </button>
            <button
                type='submit'
                onClick={() => dispatch(removePost(id))}
            >
                Remove
            </button>
        </>
    )
}