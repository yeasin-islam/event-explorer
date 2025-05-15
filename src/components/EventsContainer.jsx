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
    <section className='bg-base-200'>
      <div className='fontStyle py-12 px-4 md:px-0 sm:px-6 lg:px-8 text-center container mx-auto'>
        {/* Section Tag & Description */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold text-red-700 mb-4">Upcoming Events</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Discover Events That Spark Your Interest
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From tech meetups to local festivals — explore top hand-picked events happening around you.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10'>
          {displayEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        <div className="flex justify-center">
          <Button
            onClick={() => {
              setShowAll(prv => !prv)
              if (showAll) window.scrollTo(0, 0)
            }}
            label={showAll ? 'Show Less' : 'Show All'}
          />
        </div>
      </div>
    </section>
  )
}

export default EventsContainer
