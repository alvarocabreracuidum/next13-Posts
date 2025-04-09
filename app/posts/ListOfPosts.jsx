import { LikeButton } from "./LikeButton.jsx"
import Link from "next/link"
import Image from "next/image"

const fetchPosts = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            next: {
                revalidate: 60
            }
        });
        
        if (!res.ok) {
            throw new Error('Error al cargar los posts');
        }
        
        return res.json();
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}

export async function ListOfPosts() {
    const posts = await fetchPosts();

    if (!posts.length) {
        return (
            <div style={{
                padding: '2rem',
                textAlign: 'center',
                color: '#666'
            }}>
                No se pudieron cargar los posts. Por favor, intenta más tarde.
            </div>
        );
    }

    return (
        <div style={{
            display: 'grid',
            gap: '2rem',
            padding: '1rem'
        }}>
            {posts.slice(0, 5).map((post, index) => (
                <article 
                    key={post.id}
                    style={{
                        background: '#1a1a1a',
                        borderRadius: '12px',
                        padding: '1.5rem',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        border: '1px solid #333'
                    }}
                >
                    <Link 
                        href={`/posts/${post.id}`}
                        style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}
                    >
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: '300px',
                            marginBottom: '1.5rem',
                            borderRadius: '8px',
                            overflow: 'hidden'
                        }}>
                            <Image
                                src={`https://picsum.photos/seed/${post.id}/800/400`}
                                alt={`Imagen de portada para ${post.title}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                style={{
                                    objectFit: 'cover',
                                }}
                                priority={index === 0}
                            />
                        </div>
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
