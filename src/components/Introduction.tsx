import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import EditIntroduction from "./EditIntroduction";

export default function Introduction() {
    const url = useSelector((state: RootState) => state.introduction.url);
    const description = useSelector((state: RootState) => state.introduction.description);
    return (
        <div className='bg-zinc-800 w-full h-full p-20'>
            <h1 className='block text-sky-700 text-left decoration-solid text-3xl mb-10'>
                Howdy gamers! Welcome to my website!
            </h1>
            <div className='grid grid-cols-3 p-10 mt-10 mx-auto'>
                {url && <img
                    src={url}
                    alt={`profile-img ${url}`}
                    className="max-w-sm max-h-96 col-span-1 self-center justify-self-center"
                />}
                <p className='text-sky-500 decoration-solid text-3xl self-center justify-self-center'>
                    {description}
                </p>
            </div>
            <EditIntroduction
                url={url}
                desc={description}
            />
        </div>
    )
}

// flex flex-row items-center 