import React from 'react'

const Creator = ({name, overview, content, techs, contacts}) => {
    return (
        <div className="container-talkies">
            <h1>{name}</h1>
            <h3>{overview}</h3>
            <p>{content}</p>
            <h4>Toolset: {techs} </h4>
            <h4>Contacts: {contacts}</h4>
        </div>
    )
}

export default Creator
