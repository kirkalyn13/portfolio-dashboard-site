import React from 'react'

const Talkies = ({title, content, showTechs, techs}) => {
    return (
        <div className="container-talkies">
            <h2>{title}</h2>
            <p>{content}</p>
            {showTechs === true ? 
                <h4>Technologies: {techs}</h4>
                : null}
        </div>
    )
}

export default Talkies
