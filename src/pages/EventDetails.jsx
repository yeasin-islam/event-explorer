import { useState } from 'react'
import { useLoaderData, useParams, useNavigate } from 'react-router'
import { MdBookmarkAdd } from 'react-icons/md'
import { addBookedEvent } from '../utils'
import toast from 'react-hot-toast'

const EventDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
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

  const [formData, setFormData] = useState({ name: '', email: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    const { name, email } = formData
    if (!name || !email) {
      toast.error('Please enter both name and email')
      return
    }

    const result = addBookedEvent(singleEvent)
    if (result === 'added') {
      toast.success('Event added successfully!')
      setTimeout(() => {
        navigate('/booked-events')
      }, 300) // Slight delay so toast shows
    } else {
      toast.error('Already added!')
    }
  }

  if (!singleEvent) return <p className="text-red-500">Event not found</p>

  return (
    <div className='w-full'>
      <img src={thumbnail} className='w-full mx-auto md:w-auto mb-8' alt='' />
      <div className='flex justify-between'>
        <h1 className='text-6xl font-thin mb-8'>{name}</h1>
      </div>

      <div className='space-y-4'>
        <h2 className='font-thin text-4xl'>Details:</h2>
        <p><span className='font-bold'>Brand:</span> {category}</p>
        <p><span className='font-bold'>Model:</span> {date}</p>
        <p><span className='font-bold'>Organizer:</span> {organizer}</p>
        <p><span className='font-bold'>Location:</span> {location}</p>
        <div className='font-bold'>Entry Fee:</div>
        <ul>
          {Object.entries(entry_fee).map(([type, fee]) => (
            <li key={type}>{type}: {fee}</li>
          ))}
        </ul>
        <p><span className='font-bold'>Description:</span> {description}</p>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="mt-10 space-y-4">
        <div>
          <label className="label">Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-neutral mt-4">
          <MdBookmarkAdd className="mr-2" /> Book Event
        </button>
      </form>
    </div>
  )
}

export default EventDetails
