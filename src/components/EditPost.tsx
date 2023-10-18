import { useState } from "react";
import { useDispatch } from "react-redux";
import { PostInfo, removePost, updatePost } from "../features/PostsSlice"

export default function EditPost({ id, title: postTitle, imageUrl, description }: PostInfo) {
    const [title, setTitle] = useState(postTitle);
    const [image, setImage] = useState(imageUrl);
    const [desc, setDesc] = useState(description);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const update = (updated: boolean) => {
        if (updated) {
            dispatch(updatePost({
                id,
                title,
                imageUrl: image,
                description: desc,
            }));
        } else {
            setTitle(postTitle);
            setImage(imageUrl);
            setDesc(description);
        }
        setEdit(false);
    }
    return (
        <div className='flex-col flex justify-center items-center'>
            {edit ?
                <div>
                    <h4 className='text-blue-500 decoration-solid text-xl mb-2'>
                        Title
                    </h4>
                    <textarea
                        value={title}
                        placeholder='Enter title of the post...'
                        onChange={(e) => setTitle(e.target.value)}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
                    />
                    <h4 className='text-blue-500 decoration-solid text-xl mb-2'>
                        Image
                    </h4>
                    <textarea
                        value={image}
                        placeholder='Enter image url...'
                        onChange={(e) => setImage(e.target.value)}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
                    />
                    <h4 className='text-blue-500 decoration-solid text-xl mb-2'>
                        Description
                    </h4>
                    <textarea
                        value={desc}
                        placeholder='Enter description...'
                        onChange={(e) => setDesc(e.target.value)}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
                    />
                    <button
                        type='submit'
                        onClick={() => update(true)}
                        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-5 mt-5'
                    >
                        Save
                    </button>
                    <button
                        type='submit'
                        onClick={() => update(false)}
                        className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mr-5 mt-5'
                    >
                        Cancel
                    </button>
                    <button
                        type='submit'
                        onClick={() => {
                            update(false);
                            dispatch(removePost(id));
                        }}
                        className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mt-5'
                    >
                        Remove
                    </button>
                </div>
                :
                <button
                    type='submit'
                    onClick={() => setEdit(true)}
                    className='bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-5'
                >
                    Edit
                </button>
            }
        </div>
    )
}