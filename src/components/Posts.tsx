import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import Post from './Post';
import AddPost from './AddPost';

export default function Posts() {
    const posts = useSelector((state: RootState) => state.posts.posts);
    return (
        <div className='p-20'> 
            <h1 className='block text-sky-700 text-left decoration-solid text-3xl mb-10'>
                My Posts!
            </h1>
            <div className='grid grid-cols-4 grid-auto-rows p-20'>
                {posts.map((post) => <Post
                    id={post.id}
                    title={post.title}
                    imageUrl={post.imageUrl}
                    description={post.description}
                />)}
            </div>
            <AddPost/>
        </div>
    )
}