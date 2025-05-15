import React, { useState } from 'react'
import Button from '../components/shared/Button'
import Slider from '../components/slider/Slider'

const Hero = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState('')

    return (
        <div className='bg-slate-500'>
            <div className='container mx-auto px-4 py-10 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10'>
                {/* Text Content */}
                <div className='w-full md:w-1/2 text-center md:text-left space-y-4'>
                    <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white'>
                        Find Events That Move You
                    </h1>
                    <p className='text-gray-200 text-sm sm:text-base'>
                        From local meetups to major festivals, EventeXplorer helps you discover, explore, and attend events that match your vibe. Dive into categories, save your favorites, and never miss out on what’s happening around you.
                    </p>
                    <form
                        onSubmit={e => {
                            e.preventDefault()
                            handleSearch(e, searchText)
                            setSearchText('')
                        }}
                        className='flex flex-col sm:flex-row items-center sm:items-stretch gap-3 mt-4'
                    >
                        <input
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            placeholder='Search Events by Name'
                            type='text'
                            className='w-full sm:w-2/3 h-12 px-4 bg-white border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-400'
                        />
                        <Button type='submit' label='Search' />
                    </form>
                </div>

                {/* Slider */}
                <div className='w-full md:w-1/2 flex h-96 justify-center'>
                    <Slider />
                </div>
            </div>
        </div>
    )
}

export default Hero
