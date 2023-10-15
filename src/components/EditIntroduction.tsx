import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateIntroduction } from "../features/IntroductionSlice";

interface EditIntroductionProps {
    url: string,
    desc: string,
    endEdit: (boolean) => void,
}

export default function EditIntroduction({ url: orgUrl, desc: orgDesc, endEdit: end }: EditIntroductionProps) {
    const [url, setUrl] = useState(orgUrl);
    const [desc, setDesc] = useState(orgDesc);
    const dispatch = useDispatch();
    const edit = (update: boolean) => {
        if (update) {
            dispatch(updateIntroduction([url, desc]));
        }
        end(false);
    }
    return (
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
                onClick={() => edit(true)
                }
            >
                Submit
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