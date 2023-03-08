import React from 'react'
import { MeetCardList } from './Cards'

export const Meet = () => { //Main container of the meet section cards.
  return (
    <section className='main-meet'>
      <h1>Meet the team</h1>
      <h2>Nunc commodo mattis magna, ut sagittis dolor placerat hendrerit. Proin maximus lacus sed risus vestibulum, hendrerit pretium nisl efficitur. Donec.</h2>
      <MeetCardList/>
    </section>
  )
}
