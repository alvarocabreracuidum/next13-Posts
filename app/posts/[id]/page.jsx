import { LikeButton } from '../LikeButton'

const fetchPost = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json())
}

export default async function PostPage({ params }) {
    const { id } = params
    const post = await fetchPost(id)

    return (
        <article style={{
            background: '#1a1a1a',
            borderRadius: '12px',
            padding: '2rem',
            margin: '2rem',
            border: '1px solid #333',
            maxWidth: '800px',
            margin: '2rem auto'
        }}>
            <h1 style={{ 
                color: '#09f',
                marginTop: 0,
                marginBottom: '1.5rem',
                fontSize: '2rem'
            }}>
                {post.title}
            </h1>
            <p style={{
                color: '#ccc',
                lineHeight: '1.8',
                fontSize: '1.1rem',
                marginBottom: '2rem'
            }}>
                {post.body}
            </p>
            <div style={{
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <LikeButton id={id} />
            </div>
        </article>
    )
}