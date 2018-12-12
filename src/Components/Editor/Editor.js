import React from 'react';

import styles from './Editor.module.scss';

const editor = (props) => {
    return (
        <div className={styles.Editor}>
            <h3 className={styles.Header}>Editor</h3>
            <textarea 
                id='editor'
                className={styles.Textarea} 
                value={props.text}
                onChange={props.change}/>
        </div>
    )
}

export default editor;