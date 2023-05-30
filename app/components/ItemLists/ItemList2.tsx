import { Image } from '@shopify/hydrogen';

const ItemList2 = () => {
	return (
		<ul className="grid grid-cols-4 gap-2 justify-items-center mb-20">
			<li className='p-2 border border-gray-200/0 hover:shadow-lg hover:border-gray-200 hover:scale-105 duration-200'>
				<a href="#">
					<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_flowerglass2022.jpg" alt="" />
					<p className="font-bold mt-2.5">
						＞ジジのガラス食器シリーズ♪
					</p>
				</a>
			</li>
			<li className='p-2 border border-gray-200/0 hover:shadow-lg hover:border-gray-200 hover:scale-105 duration-200'>
				<a href="#">
					<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_leisure2023s.jpg" alt="" />
					<p className="font-bold mt-2.5">
						＞行楽・レジャーグッズ★
					</p>
				</a>
			</li>
			<li className='p-2 border border-gray-200/0 hover:shadow-lg hover:border-gray-200 hover:scale-105 duration-200'>
				<a href="#">
					<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_mug2023.jpg" alt="" />
					<p className="font-bold mt-2.5">
						＞ぽこぽことしたマグカップ♪
					</p>
				</a>
			</li>
			<li className='p-2 border border-gray-200/0 hover:shadow-lg hover:border-gray-200 hover:scale-105 duration-200'>
				<a href="#">
					<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_lanternkey2022.jpg" alt="" />
					<p className="font-bold mt-2.5">
						＞スイッチで光る！ミニランタンのキーチェーン
					</p>
				</a>
			</li>
		</ul>
	)
}

export default ItemList2;