import React from 'react'

const Talkies = ({title, content}) => {
    return (
        <div className="container-talkies">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Talkies
