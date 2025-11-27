import React from 'react'

const ImageCard = ({ animeTitle, animeImg }) => {
    return (
            <div className="w-60 hover-3d">
                {/* content */}
                <figure className="max-w-100 rounded-2xl">
                    <img src={animeImg} alt={animeTitle} />
                </figure>
                {/* 8 empty divs needed for the 3D effect */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

    )
}

export default ImageCard