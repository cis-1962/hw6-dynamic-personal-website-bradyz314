import { PostInfo } from '../features/PostsSlice';
import EditPost from './EditPost';

export default function Post({ id, title, imageUrl, description }: PostInfo) {
    return (
        <div className='flex-col flex grid col-span-1 row-span-1 justify-center items-center p-5'>
            <h2
                className='flex text-blue-500 decoration-solid text-xl mb-2'
            >
                {`Post #${id}: ${title}`}
            </h2>
            <img
                src={imageUrl}
                alt={`post#${id}-img`}
                className="flex max-w-xs max-h-80 self-center justify-self-center mb-5"
            />
            <p className='flex text-blue-500 decoration-solid text-xl mb-2'>
                {description}
            </p>
            <EditPost
                id={id}
                title={title}
                imageUrl={imageUrl}
                description={description}
            />
        </div>
    )
}