import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateIntroduction } from '../features/IntroductionSlice';

interface EditIntroductionProps {
    url: string,
    desc: string,
}

export default function EditIntroduction({ url: orgUrl, desc: orgDesc }: EditIntroductionProps) {
    const [url, setUrl] = useState(orgUrl);
    const [desc, setDesc] = useState(orgDesc);
    const [edit, setEdit] = useState(false);
    const dispatch = useDispatch();
    const updateEdit = (update: boolean) => {
        if (update) {
            dispatch(updateIntroduction([url, desc]));
        } else {
            setUrl(orgUrl);
            setDesc(orgDesc)
        }
        setEdit(false);
    }
    return (
        <div>
            {edit ?
                <div>
                    <h3 className='text-blue-500 decoration-solid text-xl mb-2'>
                        Image
                    </h3>
                    <textarea
                        value={url}
                        placeholder='Enter Image Url...'
                        onChange={(e) => setUrl(e.target.value)}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
                    />
                    <h3 className='text-blue-500 decoration-solid text-xl mb-2'>
                        Description
                    </h3>
                    <textarea
                        value={desc}
                        placeholder='Enter Description...'
                        onChange={(e) => setDesc(e.target.value)}
                        className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4'
                    />
                    <button
                        type='submit'
                        onClick={() => updateEdit(true)}
                        className='bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-5 mt-5'
                    >
                        Submit
                    </button>
                    <button
                        type='submit'
                        onClick={() => updateEdit(false)}
                        className='bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mt-5'
                    >
                        Cancel
                    </button>
                </div> :
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