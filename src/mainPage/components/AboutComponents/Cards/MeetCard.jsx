import React from 'react'

export const MeetCard = ({
    id,
    name,
    job,
    description
}) => {

  const member = `src/mainPage/components/AboutComponents/assets/Portraits/${id}.jpg`

  return (
    <article className='card'>
        <div className='card-description'><h3>{description}</h3></div>
        <img className='card-img' src={member}></img>
        <div className='card-info'>
            <h3>{name}</h3>
            <h4>{job}</h4>
        </div>
    </article>
  )
}
