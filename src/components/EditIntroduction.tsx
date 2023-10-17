import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateIntroduction } from "../features/IntroductionSlice";

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
        }
        setEdit(false);
    }
    return (
        <div>
            {edit ? 
                <div>
                    <h3>Image</h3>
                    <textarea
                        value={url}
                        placeholder='Enter Image Url...'
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <h3>Description</h3>
                    <textarea
                        value={desc}
                        placeholder='Enter Description...'
                        onChange={(e) => setDesc(e.target.value)}
                    />
                    <button
                        type='submit'
                        onClick={() => updateEdit(true)}
                    >
                        Submit
                    </button>
                    <button
                        type='submit'
                        onClick={() => updateEdit(false)}
                    >
                        Cancel
                    </button>
                </div> :
                <button
                    type='submit'
                    onClick={() => setEdit(true)}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Edit
                </button>
            }
        </div>
    )
}