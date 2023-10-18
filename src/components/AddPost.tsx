import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../features/PostsSlice";

export default function AddPost() {
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [desc, setDesc] = useState('');
    const [addingPost, setAddingPost] = useState(false);
    const dispatch = useDispatch();
    const edit = (add: boolean) => {
        if (add) {
            dispatch(addPost([title, image, desc]))
        }
        setAddingPost(false);
    }
    return (
        <div>
            <button
                type='submit'
                onClick={() => setAddingPost(true)}
                className='bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-5'
            >
                Add New Post
            </button>
            {addingPost && 
                <>
                    <h2 
                        className='block text-sky-700 text-left decoration-solid text-2xl my-8'
                    >
                        New Post
                    </h2>
                    <h4
                        className='block text-sky-500 text-left decoration-solid text-xl mb-2'
                    >
                        Title
                    </h4>
                    <textarea
                        value={title}
                        placeholder='Enter title of the post...'
                        onChange={(e) => setTitle(e.target.value)}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
                    />
                    <h4
                        className='block text-sky-500 text-left decoration-solid text-xl mb-2'
                    >
                        Image
                    </h4>
                    <textarea
                        value={image}
                        placeholder='Enter image url...'
                        onChange={(e) => setImage(e.target.value)}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
                    />
                    <h4
                        className='block text-sky-500 text-left decoration-solid text-xl mb-2'
                    >
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
                        onClick={() => edit(true)}
                        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-5 mt-5'
                    >
                        Submit
                    </button>
                    <button
                        type='submit'
                        onClick={() => edit(false)}
                        className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-5'
                    >
                        Cancel
                    </button>
                </>
            }
        </div>
    )
}