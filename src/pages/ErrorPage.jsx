import React from 'react'
import { Link, useRouteError } from 'react-router'
import Navbar from '../components/Navbar'
import Button from '../components/shared/Button'
import { Helmet } from 'react-helmet-async'

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <div className='fontStyle py-24 text-center bg-base-200</>'>
        <Helmet>
        <title>
          Error Page | EventeXplorer
        </title>
      </Helmet>
        <h1 className='my-10 text-7xl font-thin text-gray-900'>
          {error?.status || 404}
        </h1>
        <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
          {error?.error?.message || 'Something Went Wrong!'}
        </p>
        <Link to='/'>
          <Button label='Go To Homepage' />
        </Link>
      </div>
    </>
  )
}

export default ErrorPage
