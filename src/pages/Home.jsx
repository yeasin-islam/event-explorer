import React, { useState } from 'react'
// import Hero from '../components/Hero'
import EventsContainer from '../components/EventsContainer'
import { useLoaderData } from 'react-router'
import Hero from './Hero'
import { Helmet } from 'react-helmet-async'
import CounteUp from '../components/CounteUp'
import PeopleSaySection from '../components/Peoplesay'

const Home = () => {
    const eventsData = useLoaderData()
    const [events, setEvents] = useState(eventsData)
    const handleSearch = (e, text) => {
        console.log(text)
        e.preventDefault()
        const searchedEvents = eventsData.filter(
           ( event ) =>
                event?.name?.toLowerCase().split(' ').includes(text) ||
                event.category?.toLowerCase().split(' ').includes(text)
        )
        setEvents(searchedEvents)
    }
    return (
        <>
            <Helmet>
                <title>
                    Home | EventeXplorer
                </title>
            </Helmet>
            <div className='fontStyle'>
                <Hero handleSearch={handleSearch} />
                <EventsContainer events={events} />
                <CounteUp></CounteUp>
                <PeopleSaySection></PeopleSaySection>
            </div>
        </>
    )
}

export default Home
