import React from 'react'

//Each card recieves information as parameters

export const MeetCard = ({
    id,
    name,
    job,
    description
}) => {

  const member = `/coffee-about/Portraits/${id}.jpg` //I find the correspondent picture on Public folder

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
