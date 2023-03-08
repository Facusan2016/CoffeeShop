import React from 'react'
import { Teamdata } from '../Teamdata' //Importing data from Teamdata.js
import { MeetCard } from './MeetCard'

export const MeetCardList = () => {


    return (
        <section className='meetCardList'>
            {
                Teamdata.map(member => <MeetCard key={member.id}{...member}/>)
            }
        </section>
    )
}
