import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import EditIntroduction from "./EditIntroduction";

export default function Introduction() {
    const url = useSelector((state: RootState) => state.introduction.url);
    const description = useSelector((state: RootState) => state.introduction.description);
    const [edit, setEdit] = useState(false);
    return (
        <>
            <h1>Howdy gamers. Tis I!</h1>
            {!edit ?
                <>
                    {url && <img
                            src={url}
                            alt='profile-img'
                        />}
                    <p>{description}</p>
                    <button
                        type='submit'
                        onClick={() => setEdit(!edit)}
                    >
                Edit
            </button>
                </>
                :
                <EditIntroduction
                    url={url}
                    desc={description}
                    endEdit={setEdit}
                />
            }
        </>
    )
}
