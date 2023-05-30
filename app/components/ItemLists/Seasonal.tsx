import { Image } from '@shopify/hydrogen';
import { FiArrowUpRight } from 'react-icons/fi';
import React from 'react'

const Seasonal = () => {
	return (
		<section className="seasonal-section mb-10 flex flex-col">
			<Image className='' src='https://www.donguri-sora.com/user_data/assets/donguri/img/top/bnr_bg.png' />
			<ul className='absolute w-full left-0 px-20 mt-10 z-10 grid grid-cols-3 place-items-center gap-8 h-full'>
				<li>
					<a className='seasonal-image relative' href="#">
						<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_furusato.jpg" alt="" />
						<div className="overlay">
							<div className="text flex flex-row items-center gap-2">
								さらに詳しく
								<FiArrowUpRight className='font-bold w-7 h-7' />
							</div>
							
						</div>
					</a>
				</li>
				<li>
					<a className='seasonal-image relative' href="#">
						<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_closet_b.jpg" alt="" />
						<div className="overlay">
							<div className="text flex flex-row items-center gap-2">
								さらに詳しく
								<FiArrowUpRight className='font-bold w-7 h-7' />
							</div>
						</div>
					</a>
				</li>
				<li>
					<a className='seasonal-image relative' href="#">
						<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_gbl_b3.jpg" alt="" />
						<div className="overlay">
							<div className="text flex flex-row items-center gap-2">
								さらに詳しく
								<FiArrowUpRight className='font-bold w-7 h-7' />
							</div>
						</div>
					</a>
				</li>
			</ul>
		</section>
	)
}

export default Seasonal;