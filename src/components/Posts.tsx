import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import Post from "./Post";
import AddPost from "./AddPost";

export default function Posts() {
    const posts = useSelector((state: RootState) => state.posts.posts);
    const [adding, setAdding] = useState<boolean>(false);
    return (
        <>
            <h1>My Posts!</h1>
            <button
                type='submit'
                onClick={() => setAdding(true)}
            >
                Add New Post
            </button>
            {posts.map((post) => <Post
                id={post.id}
                title={post.title}
                imageUrl={post.imageUrl}
                description={post.description}
                inEdit={post.inEdit}
            />)}
            {adding && (
                <div>
                    <AddPost 
                        endAdd={setAdding}
                    />
                </div>
            )}
        </>
    )
}