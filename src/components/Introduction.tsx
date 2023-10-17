import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import EditIntroduction from "./EditIntroduction";

export default function Introduction() {
    const url = useSelector((state: RootState) => state.introduction.url);
    const description = useSelector((state: RootState) => state.introduction.description);
    return (
        <div className='bg-gray-300 flex flex-column w-full h-full p-20'>
            <h1 className='block text-sky-400 text-left decoration-solid text-3xl mb-10'>
                Howdy gamers. Tis I!
            </h1>
            <div className='flex flex-row items-center flex-1 justify-center p-10'>
            {url && <img
                        src={url}
                        alt='profile-img'
                        className="basis-1/2"
                />}
                <p className='basis-1/2 text-sky-300 decoration-solid text-xl'>
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
