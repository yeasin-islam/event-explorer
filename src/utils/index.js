import toast from 'react-hot-toast'

export const getBookedEvents = () => {
  let bookedevents = []
  const storedBookedEvents = localStorage.getItem('bookedevents')
  if (storedBookedEvents) {
    bookedevents = JSON.parse(storedBookedEvents)
  }
  return bookedevents
}
export const addBookedEvent = event => {
  let bookedevents = getBookedEvents()
  const isExist = bookedevents.find(b => b.id === event.id)
  if (isExist) return toast.error('Already Added!')

  bookedevents.push(event)
  localStorage.setItem('bookedevents', JSON.stringify(bookedevents))
  toast.success('Event added Successfully!')
}

export const removeBookedEvent = id => {
  let bookedevents = getBookedEvents()
  const remaining = bookedevents.filter(b => b.id !== id)
  localStorage.setItem('bookedevents', JSON.stringify(remaining))
  toast.success('Event Removed from BookedEvent List!')
}

export const getCart = () => {
  let cart = []
  const storedCart = localStorage.getItem('cart')
  if (storedCart) {
    cart = JSON.parse(storedCart)
  }
  return cart
}
export const addToCart = event => {
  let cart = getCart()
  const isExist = cart.find(b => b.id === event.id)
  if (isExist) return toast.error('Already Added!')

  cart.push(event)
  localStorage.setItem('cart', JSON.stringify(cart))
  toast.success('Cart Updated!')
}
