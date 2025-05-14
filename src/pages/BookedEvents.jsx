import { useEffect, useState } from 'react'
import EventCard from '../components/EventCard'
import EmptyState from '../components/shared/EmptyState'
import { getBookedEvents, removeBookedEvent } from '../utils'
import { Helmet } from 'react-helmet-async'
const BookedEvents = () => {
  const [displayEvents, setDisplayEvents] = useState([])
  useEffect(() => {
    const bookedevents = getBookedEvents()
    setDisplayEvents(bookedevents)
  }, [])
  const handleRemove = id => {
    removeBookedEvent(id)
    const bookedevents = getBookedEvents()
    setDisplayEvents(bookedevents)
  }
  if (displayEvents.length < 1) {
    return <EmptyState />
  }
  return (
    <>
    <Helmet>
        <title>
          BookedEvents | EventExplorer
        </title>
      </Helmet>
    <div className='py-12'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
        {displayEvents.map(event => (
          <EventCard
            deletable={true}
            handleRemove={handleRemove}
            key={event.id}
            event={event}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default BookedEvents
