import React from 'react';
import marked from 'marked';

import styles from './Previewer.module.scss';

const previewer = (props) => {
    marked.setOptions({
        breaks: true
    })
    return (
        <div className={styles.Previewer}>
            <h3 className={styles.Header}>Previewer</h3>
            <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.text)}} ></div>
        </div>
    )
}

export default previewer;