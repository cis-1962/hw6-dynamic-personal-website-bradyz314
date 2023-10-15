import { useDispatch } from 'react-redux';
import { PostInfo, updatePost } from '../features/PostsSlice';
import EditPost from './EditPost';

export default function Post({ id, title, imageUrl, description, inEdit }: PostInfo) {
    const dispatch = useDispatch();
    return (
        !inEdit ?
            <>
                <h2>{`Post #${id}: ${title}`}</h2>
                <img
                    src={imageUrl}
                    alt={`post#${id}-img`}
                />
                <p>{description}</p>
                <button
                    type='submit'
                    onClick={() => dispatch(updatePost({
                        id,
                        title,
                        imageUrl,
                        description,
                        inEdit: true
                    }))}
                >
                    Edit
                </button>
            </> :
                <EditPost
                    id={id}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                />
    )
}