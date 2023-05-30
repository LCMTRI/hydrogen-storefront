import { Image } from '@shopify/hydrogen';
import React, { useEffect, useState } from 'react';
import { TbCategory2 } from 'react-icons/tb';
import { ImSearch } from 'react-icons/im';
import { BsCameraReels } from 'react-icons/bs';
import { GoMailRead } from 'react-icons/go';
import SearchBar from './SearchBar';

const Header = () => {

	const links = [
		{
			id: 0,
			name: "詳細検索", // detailed search
			icon: <ImSearch className="h-4 w-4" />,
		},
		{
			id: 1,
			name: "作品から探す", // search by work
			icon: <BsCameraReels className="h-4 w-4" />,
		},
		{
			id: 2,
			name: "カテゴリから探す", // search by category
			icon: <TbCategory2 className="h-4 w-4" />,
		},
	];
  return (
    <header
    role="banner"
    className={`flex h-[130px] bg-white py-3 px-11 sticky z-20 top-0 w-full leading-none gap-4 antialiased transition shadow-sm`}
		>
			<div className="flex w-full">
				<a className={`h-full`} href="/">
					<Image className='h-full' src='https://www.donguri-sora.com/user_data/assets/donguri/img/logo_totoro.gif' />
				</a>
				<div className='flex flex-row w-full justify-between'>
					<div className={`ml-10 grid grid-rows-2 content-stretch`}>
						<ul className={`flex flex-row gap-7 items-center h-full`}>
							{links.map(
								(link) => (
									<li>
										<a href="#" className='flex flex-row gap-2 hover:border-b-2 hover:border-[#6c4f2c] hover:bg-[#eee9e5] duration-200 p-2'>
											{link.icon}
											{link.name}
										</a>
									</li>
								)
							)}
						</ul>
						<div className='flex items-center h-full'>
							<SearchBar />
						</div>
					</div>

					<div className={`grid grid-rows-2 content-stretch`}>
						<ul className={`flex flex-row gap-7 items-center h-full`}>
							{links.map(
								(link) => (
									<li>
										<a href="#" className='flex flex-row gap-2 hover:border-b-2 hover:border-[#6c4f2c] hover:bg-[#eee9e5] duration-100 p-2'>
											{link.name}
										</a>
									</li>
								)
							)}
							<li className='pl-7 pr-2 border-l border-gray-400'>
								<a className='h-fit hover:opacity-60' href="#">
									<GoMailRead className='h-5 w-5'/>
								</a>
							</li>
						</ul>
						<div className='flex items-center justify-end gap-5'>
							<div className='h-full flex items-center' style={{background: `url('https://www.donguri-sora.com/user_data/assets/donguri/img/icon_cart.png') no-repeat left center`}}>
								<a className='text-[#6c4f2c] pl-6 hover:scale-105 duration-300' href="#">
									カート
								</a>
							</div>
							<div className='h-full flex items-center' style={{background: `url('https://www.donguri-sora.com/user_data/assets/donguri/img/icon_login.png') no-repeat left center`}}>
								<a className='text-[#6c4f2c] pl-9 hover:scale-105 duration-300' href="#">
									ログイン
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
    </header>
  )
}

export default Header