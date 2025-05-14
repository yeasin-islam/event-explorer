import React, { useEffect, useState } from 'react'
import EventCard from './EventCard'
import Button from './shared/Button'

const EventsContainer = ({ events }) => {
  const [displayEvents, setDisplayEvents] = useState([])
  const [showAll, setShowAll] = useState(false)
  useEffect(() => {
    if (showAll) {
      setDisplayEvents(events)
    } else {
      setDisplayEvents(events.slice(0, 6))
    }
  }, [showAll, events])

  return (
    <div className='py-12 text-center container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
        {displayEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      <Button
        onClick={() => {
          setShowAll(prv => !prv)
          if (showAll) window.scrollTo(0, 0)
        }}
        label={showAll ? 'Show Less' : 'Show All'}
      />
    </div>
  )
}

export default EventsContainer
