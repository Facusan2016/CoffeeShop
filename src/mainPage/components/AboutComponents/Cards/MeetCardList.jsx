import React from 'react'
import { Teamdata } from '../Teamdata'
import { MeetCard } from './MeetCard'

export const MeetCardList = () => {

    //Importar datos

    return (
        <section className='meetCardList'>
            {
                Teamdata.map(member => <MeetCard key={member.id}{...member}/>)
            }
        </section>
    )
}
