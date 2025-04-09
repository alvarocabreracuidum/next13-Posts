import { CommentLike } from './CommentLike'

const fecthComments= async (id) => {
    await new Promise(resolve => setTimeout(resolve,1000))
   
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, { 
        next: {
            revalidate: 60
        }
    })
        .then(res => res.json()) 
}

export default async function Post ({ children,params }) {
    const { id } = params
    const comments = await fecthComments(id)
   
    return (
        <ul style={{ 
            background: "#444", 
            fontSize: "12px", 
            padding: "20px", 
            listStyle: "none",
            margin: 0
        }}>
            {comments.map(comment => (
                <li key={comment.id} style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    padding: '10px',
                    marginBottom: '15px',
                    borderBottom: '1px solid #555'
                }}>
                    <div style={{ marginBottom: '12px', textAlign: 'left', width: '100%' }}>
                        <small>{comment.body}</small>
                    </div>
                    <CommentLike id={comment.id} />
                </li>
            ))}
        </ul>
    )
}