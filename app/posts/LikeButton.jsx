'use client'

import { useState } from "react"

export function LikeButton ({id}) {
    const [liked, setLiked] = useState(0) // 0: neutral, 1: liked, -1: disliked
    const [count, setCount] = useState(0)

    const handleLike = () => {
        if (liked === 1) {
            setLiked(0)
            setCount(count - 1)
        } else {
            if (liked === -1) setCount(count + 2)
            else setCount(count + 1)
            setLiked(1)
        }
    }

    const handleDislike = () => {
        if (liked === -1) {
            setLiked(0)
            setCount(count + 1)
        } else {
            if (liked === 1) setCount(count - 2)
            else setCount(count - 1)
            setLiked(-1)
        }
    }

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: '#2a2a2a',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            marginTop: '0.5rem'
        }}>
            <button 
                onClick={handleLike}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: liked === 1 ? '#09f' : '#666',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s'
                }}
            >
                ▲
            </button>
            <span style={{
                color: count > 0 ? '#09f' : count < 0 ? '#f44' : '#666',
                fontWeight: 'bold',
                minWidth: '2rem',
                textAlign: 'center'
            }}>
                {count}
            </span>
            <button 
                onClick={handleDislike}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: liked === -1 ? '#f44' : '#666',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    transition: 'color 0.2s'
                }}
            >
                ▼
            </button>
        </div>
    )
}