import React from 'react'
import styles from './Empty.module.css'

export function Empty() {
    return (
        <div>
            <h1 className={styles.empty}>No Results</h1>
        </div>
    )
}
