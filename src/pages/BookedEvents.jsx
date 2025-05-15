import { useEffect, useState } from 'react';
import EventCard from '../components/EventCard';
import EmptyState from '../components/shared/EmptyState';
import { getBookedEvents, removeBookedEvent } from '../utils';
import { Helmet } from 'react-helmet-async';

const BookedEvents = () => {
  const [displayEvents, setDisplayEvents] = useState([]);

  useEffect(() => {
    const bookedevents = getBookedEvents();
    setDisplayEvents(bookedevents);
  }, []);

  const handleRemove = (id) => {
    removeBookedEvent(id);
    const bookedevents = getBookedEvents();
    setDisplayEvents(bookedevents);
  };

  if (displayEvents.length < 1) {
    return <EmptyState />;
  }

  return (
    <section className='bg-base-200'>
      <div className=" fontStyle py-12 px-5 md:px-0 container mx-auto bg-base-200">
        <Helmet>
          <title>Booked Events | EventeXplorer</title>
        </Helmet>
        {/* Heading and Description */}
        <div className="text-center mb-10 max-w-xl mx-auto">
          <h2 className="text-4xl font-semibold mb-3 text-orange-600">Your Booked Events</h2>
          <p className="text-gray-600">
            Here's a list of events you've already booked. Manage your bookings or explore more events to add to your list!
          </p>
        </div>

        {/* Grid layout for event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayEvents.map((event) => (
            <EventCard
              deletable={true}
              handleRemove={handleRemove}
              key={event.id}
              event={event}
            />
          ))}
        </div>
      </div>
    </section>

  );
};

export default BookedEvents;
