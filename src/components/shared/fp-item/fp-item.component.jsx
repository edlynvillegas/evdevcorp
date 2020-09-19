import React from 'react'
import './fp-item.styles.scss'

const FPItem = ({ title, description, image }) => {
    const split_title = title.split(' ')
    return(
        <div className="fp-item">
            <div className="fp-content">
                <figure>
                    <img src={image} alt={title} />
                </figure>
                <div className="fp-info">
                    <div>
                        <p>{split_title[0]} <span>{split_title[1]}</span></p>
                        <p>{description}</p>
                    </div>
                    <div>
                        <button className="btn-secondary">View Project</button>
                    </div>
                    {/* <span><p>{split_title[0]}</p></span> */}
                </div>
            </div>
        </div>
    )
}

export default React.memo(FPItem)