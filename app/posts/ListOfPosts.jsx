import { LikeButton } from "./LikeButton.jsx"
import Link from "next/link"

const fetchPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export async function ListOfPosts() {
    const posts = await fetchPosts()

    return (
        <div style={{
            display: 'grid',
            gap: '2rem',
            padding: '1rem'
        }}>
            {posts.slice(0, 5).map(post => (
                <article 
                    key={post.id}
                    style={{
                        background: '#1a1a1a',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        transition: 'transform 0.2s',
                        cursor: 'pointer',
                        border: '1px solid #333'
                    }}
                >
                    <Link 
                        href='/posts/[id]' 
                        as={`/posts/${post.id}`}
                        style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <h2 style={{ 
                            color: '#09f',
                            marginTop: 0,
                            marginBottom: '1rem',
                            fontSize: '1.5rem'
                        }}>
                            {post.title}
                        </h2>
                        <p style={{
                            color: '#ccc',
                            lineHeight: '1.6',
                            margin: 0
                        }}>
                            {post.body}
                        </p>
                    </Link>
                    <div style={{
                        marginTop: '1.5rem',
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <LikeButton id={post.id} />
                    </div>
                </article>
            ))}
        </div>
    )
}
