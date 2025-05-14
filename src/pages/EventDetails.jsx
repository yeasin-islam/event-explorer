import React, { useContext } from 'react'
import { useLoaderData, useParams } from 'react-router'
import Button from '../components/shared/Button'
import { MdAddShoppingCart, MdBookmarkAdd } from 'react-icons/md'
import { addBookedEvent, addToCart, getCart } from '../utils'
import { CartContext } from '../providers/Contexts'
// import { CartContext } from '../providers/Contexts'

const EventDetails = () => {
  const { setCart } = useContext(CartContext)
  const { id } = useParams()
  const data = useLoaderData()
  const singleEvent = data.find(event => event.id === parseInt(id))
  const {
    thumbnail,
    name,
    category,
    date,
    location,
    entry_fee,
    description,
    organizer,
  } = singleEvent || {}
  const handleBookedEvent = event => {
    addBookedEvent(event)
  }
  const handleCart = event => {
    // Save in localstorage
    addToCart(event)
    // update context state for instant change in ui
    setCart(getCart())
  }
  if (!singleEvent) return <p className="text-red-500">Event not found</p>;

  return (
    <div className='w-full '>
      <img src={thumbnail} className='w-full mx-auto md:w-auto  mb-8' alt='' />
      <div className='flex justify-between'>
        <h1 className='text-6xl font-thin mb-8'>{name}</h1>
        <div className='space-x-2'>
          <Button
            onClick={() => handleCart(singleEvent)}
            label={<MdAddShoppingCart />}
          />
          <Button
            onClick={() => handleBookedEvent(singleEvent)}
            label={<MdBookmarkAdd />}
          />
        </div>
      </div>
      <div className='space-y-4'>
        <h2 className='font-thin text-4xl'>Details: </h2>
        <p>
          <span className='font-bold'>Brand:</span> {category}
        </p>
        <p>
          <span className='font-bold'>Model:</span> {date}
        </p>
        {/* Storage Info */}
        <div className='flex gap-1'>
          <p className='font-bold'>Storage:</p>
          <div>
            <div>{organizer}</div>
          </div>
        </div>
        {/* Price info */}
        <div className='flex gap-1'>
          <p className='font-bold'>Price:</p>
          <div>
            {Object.entries(entry_fee).map(([storage, entry_fee]) => (
              <p key={storage} className=''>
                <span>{storage}:</span> <span>{entry_fee}</span>
              </p>
            ))}
          </div>
        </div>
        <p>
          <span className='font-bold'>Camera Info:</span> {location}
        </p>
        <p>
          <span className='font-bold'>Description:</span> {description}
        </p>
      </div>
    </div>
  )
}

export default EventDetails
