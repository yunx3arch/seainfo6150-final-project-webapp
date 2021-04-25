import React from 'react';
import style from "./Error.module.css";


const Error = () => {
    return (
        <div className={style.error}>
            <div>
                <h1>404</h1>
                <p>Sorry, the content you're looking for does not exist.</p>
            </div>
            <p>You can use the Menu above to go to other pages.</p>
        </div>

    )
}

export default Error
