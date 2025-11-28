import React from 'react'

const EpisodesList = ({ animeInfo, episodes }) => {
    return (
        <div className="max-h-80 overflow-auto">
            <ul className="list bg-base-100 rounded-box shadow-md">

                <li className="p-5 pb-2 text-xs opacity-60 tracking-wide">Episodes</li>

                {episodes?.map((episode) => (
                    <li className="list-row hover:cursor-pointer hover:bg-accent/20
                    transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-95">
                        <div className="text-4xl font-thin opacity-30 tabular-nums">{episode.number}</div>
                        <div><img className="size-10 rounded-box" src={animeInfo.image} /></div>
                        <div className="list-col-grow">
                            <div>{episode.title}</div>
                            <div className='space-x-2'>
                                {episode.is_subbed == true ?
                                    <div className="text-xs uppercase font-semibold badge badge-outline badge-warning">ENG SUB</div>
                                    : null
                                }
                                {episode.is_dubbed == true ?
                                    <div className="text-xs uppercase font-semibold badge badge-outline badge-success">ENG DUB</div>
                                    : null
                                }
                            </div>
                        </div>
                        <button className="btn btn-square btn-ghost">
                            <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                        </button>
                    </li>
                ))}


            </ul>
        </div>
    )
}

export default EpisodesList