import React from 'react'
import { Link } from 'react-router'
import Button from './Button'

const EmptyState = () => {
  return (
    <div className='py-24 text-center'>
      <h1 className='mb-3 text-7xl font-thin text-gray-900'>No Data Found!</h1>
      <p className='mb-8 text-xl  text-gray-900 md:text-2xl'>
        Browse, Search Events. Book Events Now, My Booked Events.
      </p>
      <Link to='/'>
        <Button label='Back' />
      </Link>
    </div>
  )
}

export default EmptyState
