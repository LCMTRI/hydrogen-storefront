import React from 'react'
import { ImSearch } from 'react-icons/im';

const SearchBar = () => {
  return (
    <div className='flex flex-row overflow-hidden w-96'>
			<input className='rounded-l-full py-2 pl-4 border border-[#6c4f2c] bg-[#eee9e5] outline-none w-full' type="text" placeholder='製品を検索' />
			<a className='flex items-center justify-center border-2 border-[#6c4f2c] bg-[#6c4f2c] w-16 rounded-r-full text-white' href="/">
				<ImSearch className='h-5 w-5'/>
			</a>
    </div>
  )
}

export default SearchBar;