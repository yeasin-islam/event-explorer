import { useState } from 'react'
import { useLoaderData, useParams, useNavigate } from 'react-router'
import { MdBookmarkAdd } from 'react-icons/md'
import { addBookedEvent } from '../utils'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'

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

    // Prevent adding the same event twice
    const result = addBookedEvent(singleEvent)

    // Check if the event was added successfully
    if (result === 'added') {
      toast.success('Event added successfully!')
      setTimeout(() => {
        // Navigate to the booked events page after the toast
        navigate('/booked-events')
      }, 300) // Slight delay to show the success toast
    } else if (result === 'already_added') {
      toast.error('You have already added this event!')
    }
  }


  if (!singleEvent) return <p className="text-red-500">Event not found</p>

  return (
    <div className="fontStyle w-full container mx-auto px-4 sm:px-6 lg:px-8 my-5">
      
      <Helmet>
        <title>Event Details | EventeXplorer</title>
      </Helmet>
      <div className="flex justify-center mb-8">
        <img src={thumbnail} className="w-full sm:w-3/4 md:w-1/2 mx-auto rounded-lg shadow-lg" alt={name} />
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-800">{name}</h1>
      </div>

      <div className="space-y-4 mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Event Details:</h2>
        <p className="text-lg text-gray-600"><span className="font-semibold">Category:</span> {category}</p>
        <p className="text-lg text-gray-600"><span className="font-semibold">Date:</span> {date}</p>
        <p className="text-lg text-gray-600"><span className="font-semibold">Organizer:</span> {organizer}</p>
        <p className="text-lg text-gray-600"><span className="font-semibold">Location:</span> {location}</p>

        <div className="font-semibold text-lg text-gray-800">Entry Fee: {entry_fee}</div>


        <p className="text-lg text-gray-600 mt-4"><span className="font-semibold">Description:</span> {description}</p>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="mt-10 space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full px-4 py-2 text-lg"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full px-4 py-2 text-lg"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary w-full sm:w-auto mt-6 mx-auto flex items-center justify-center py-2 px-6 text-lg rounded-lg"
        >
          <MdBookmarkAdd className="mr-2" /> Book Event
        </button>
      </form>
    </div>
  )
}

export default EventDetails
