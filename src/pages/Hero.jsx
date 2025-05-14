import React, { useState } from 'react'
// import Button from '../shared/Button'
import bannerImg from '/public/image.png'
import Button from '../components/shared/Button'
import Slider from '../components/slider/Slider'
const Hero = ({ handleSearch }) => {
    const [searchText, setSearchText] = useState('')
    return (
        <div className='bg-slate-500'>
            <div className='py-12 container mx-auto md:flex justify-between max-h-full items-center'>
                <div className='text-center space-y-4 md:w-2/4 md:text-left'>
                    <h1 className='text-4xl md:text-7xl font-bold text-gray-900'>
                        Find Events That Move You
                    </h1>
                    <p className=' text-gray-100'>
                        From local meetups to major festivals, EventExplorer helps you discover, explore, and attend events that match your vibe. Dive into categories, save your favorites, and never miss out on what’s happening around you.


                    </p>
                    <form
                        onSubmit={e => {
                            handleSearch(e, searchText)
                            setSearchText('')
                        }}
                        className='flex flex-col justify-start items-center w-full mb-4 md:flex-row'
                    >
                        <input
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            placeholder='Search Phone by Name'
                            type='text'
                            className='w-2/3 h-12 px-4 mb-3  bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:outline-none focus:shadow-outline'
                        />
                        <Button type='submit' label='Search' />
                    </form>
                </div>
                <Slider></Slider>
            </div>
        </div>
    )
}

export default Hero
