import { Image } from '@shopify/hydrogen';

const ItemList1 = () => {
  return (
		<ul className="grid grid-cols-3 gap-2 justify-items-center">
				<li className='p-2 border border-gray-300/0 hover:shadow-lg hover:border-gray-200 hover:scale-105 duration-200'>
						<a href="#">
								<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_gbl-denim2023.jpg" alt="" />
								<p className="font-bold mt-2.5">
										GBL 抜染デニムシリーズ
								</p>
										<p className="mt-4">
										刺繍デザインとデニムの味わいが人気の抜染デニムシリーズに、ブラックデニムが新登場！
								</p>
						</a>
				</li>
				<li className='p-2 border border-gray-300/0 hover:shadow-lg hover:border-gray-200 hover:scale-105 duration-200'>
						<a href="#">
								<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_chihat2023.jpg" alt="" />
								<p className="font-bold mt-2.5">
										＼NEW／ちぃぼうしシリーズ
								</p>
										<p className="mt-4">
										立体的な耳がポイントの可愛らしいちぃぼうしシリーズに、「小トトロ」が仲間入り♪
								</p>
						</a>
				</li>
				<li className='p-2 border border-gray-300/0 hover:shadow-lg hover:border-gray-200 hover:scale-105 duration-200'>
						<a href="#">
								<Image src="https://www.donguri-sora.com/user_data/donguri/images/feature/bnr/bnr_pankopa2023s.jpg" alt="" />
								<p className="font-bold mt-2.5">
										パンダコパンダ -NEW ITEM-
								</p>
										<p className="mt-4">
										「パンダコパンダ」のにぎやかで楽しいグッズが大集合！
								</p>
						</a>
				</li>
		</ul>
  )
}

export default ItemList1