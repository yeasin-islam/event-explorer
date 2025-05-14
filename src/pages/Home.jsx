import React, { useState } from 'react'
// import Hero from '../components/Hero'
import EventsContainer from '../components/EventsContainer'
import { useLoaderData } from 'react-router'
import Hero from './Hero'
import { Helmet } from 'react-helmet-async'
import CounteUp from '../components/CounteUp'

const Home = () => {
    const eventsData = useLoaderData()
    const [events, setEvents] = useState(eventsData)
    const handleSearch = (e, text) => {
        console.log(text)
        e.preventDefault()
        const searchedEvents = eventsData.filter(
            event =>
                event.name.toLowerCase().includes(text) ||
                event.brand.toLowerCase().includes(text)
        )
        setEvents(searchedEvents)
    }
    return (
        <>
            <Helmet>
                <title>
                    Home | EventExplorer
                </title>
            </Helmet>
            <div>
                <Hero handleSearch={handleSearch} />
                <EventsContainer events={events} />
                <CounteUp></CounteUp>
            </div>
        </>
    )
}

export default Home
