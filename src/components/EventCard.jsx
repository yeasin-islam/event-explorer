import React from 'react'
import { Link } from 'react-router'
import { MdDeleteForever } from 'react-icons/md'

const EventCard = ({ event, deletable, handleRemove }) => {
  const { id, thumbnail,
    name,
    category,
    date,
    location,
    entry_fee,
    description,
    organizer, } = event || {}
  return (
    <div className='fontStyle card bg-base-300  shadow-sm pt-5 text-center items-center'>
      <div className="overflow-hidden rounded-xl w-72 h-48 group">
        <img
          src={thumbnail}
          alt="Event Thumbnail"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className='card-body text-left'>
        <div className="flex gap-5 text-center">
          <p className="border bg-[#09982F10] border-[#09982F20] text-[#09982F] rounded-full p-1">
            Category: {category}
          </p>
          <p className="border bg-[#176AE510] border-[#176AE520] text-[#176AE5] rounded-full p-1">
            Date: {date}
          </p>
        </div>
        <h2 className='card-title'>{name}</h2>
        <p className='text-gray-500'>{description}</p>
        <p className='font-medium'>Organizer: {organizer}</p>
        <h4>Entry Fee: <span className='text-[#09982F] font-semibold'> {entry_fee}</span></h4>
        <p className='font-medium'>Location: {location}</p>
        <div className='card-actions justify-end'>
          <Link to={`/event-details/${id}`}>
            <button className='relative inline-block px-4 py-2 font-medium group cursor-pointer'>
              <span className='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
              <span className='relative text-black group-hover:text-white'>
                View Details
              </span>
            </button>
          </Link>

          {deletable && (
            <div
              onClick={() => handleRemove(id)}
              className='bg-gray-900 p-3 ml-5 rounded-full hover:bg-gray-300 group  cursor-pointer hover:scale-105 absolute -top-5 -right-5'
            >
              <MdDeleteForever
                size={20}
                className='text-gray-100 group-hover:text-gray-900'
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventCard
