'use client'

import styles from './ScrollingBanner.module.css'

export function ScrollingBanner() {
    return (
        <div className={styles.scrollingBanner}>
            <div className={styles.scrollingText}>
                El mejor canal de Twitch de programación: alvaro
            </div>
        </div>
    )
}
