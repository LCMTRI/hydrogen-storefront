import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="relative pb-32 pt-20">
			<div className='footer'></div>
			<section className="flex flex-row w-[1200px] mx-auto relative text-[#6c4f2c] font-medium">
				<div className="box-border py-3 border-l border-[#ddcdb9]">
					<dl className='ml-[40px] mr-[20px]'>
						<dt className='font-bold text-[#669858]'>
							<a href="/donguri/user_data/category_list.php">カテゴリ一覧</a>
						</dt>
						<dd className='pt-8'>
							<ul className='flex flex-col gap-3'>
								<li className='hover:opacity-60'>
									<a href="#">ファッション</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">リビング</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">インテリア</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">ライブラリー</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">玩具・ぬいぐるみ・ホビー</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">シーズニング</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">文具</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">キーホルダー</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#0">フラワーギフト</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#1">どんぐり共和国限定</a>
								</li>
							</ul>
						</dd>
					</dl>
				</div>

				<div className="box-border py-3 border-l border-[#ddcdb9] flex flex-row">
					<dl className='ml-[40px] mr-[20px]'>
						<dt className='font-bold text-[#669858]'>
							<a href="/donguri/user_data/work_list.php">作品一覧</a>
						</dt>
						<dd className='pt-8'>
							<ul className='flex flex-col gap-3'>
								<li className='hover:opacity-60'>
									<a href="#51">となりのトトロ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#52">魔女の宅急便</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#53">千と千尋の神隠し</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#54">天空の城ラピュタ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#55">紅の豚</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#56">もののけ姫</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#57">パンダコパンダ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#58">崖の上のポニョ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#59">耳をすませば</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#60">ハウルの動く城</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#61">風の谷のナウシカ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#62">平成狸合戦ぽんぽこ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#63">借りぐらしのアリエッティ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#64">猫の恩返し</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#65">コクリコ坂から</a>
								</li>
							</ul>
						</dd>
					</dl>

					<dl className="mr-[20px] pt-6">
						<dd className='pt-8'>
							<ul className='flex flex-col gap-3'>
								<li className='hover:opacity-60'>
									<a href="#">かぐや姫の物語</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">風立ちぬ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">火垂るの墓</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">おもひでぽろぽろ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">ホーホケキョとなりの山田くん</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">ゲド戦記</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">思い出のマーニー</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">レッドタートル ある島の物語</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">メアリと魔女の花</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">アーヤと魔女</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">スタジオポノック</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">スタジオジブリ関連</a>
								</li>
							</ul>
						</dd>
					</dl>
				</div>

				<div className="box-border py-3 border-l border-[#ddcdb9]">
					<dl className='ml-[40px] mr-[20px]'>
						<dt className='font-bold text-[#669858]'>
							お買い物について
						</dt>
						<dd className='pt-8'>
							<ul className='flex flex-col gap-3'>
								<li className='hover:opacity-60'>
									<a href="#">ログイン/会員登録</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">カート</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">お買い物ガイド</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">よくあるご質問</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">お問い合わせ</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#" target="_blank">店舗のご案内</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">プライバシーポリシー</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">特定商取引法に基づく表記</a>
								</li>
								<li className='hover:opacity-60'>
									<a href="#">
										ご利用規約
									</a>
								</li>
							</ul>
						</dd>
					</dl>
				</div>

				<div className="box-border py-3 border-x border-[#ddcdb9]">
					<dl className='ml-[40px] mr-[20px]'>
						<dt className='font-bold text-[#669858]'>
							<a href="#">ソーシャルメディア</a>
						</dt>
						<dd className='pt-8'>
							<ul className='flex flex-col gap-3'>
								<li className='hover:opacity-60 flex flex-row items-center gap-2'>
									<a href="#">
										<FaTwitterSquare className='w-6 h-6'/>
									</a>
									Twitter
								</li>
								<li className='hover:opacity-60 flex flex-row items-center gap-2'>
									<a href="#">
										<FaFacebookSquare className='w-6 h-6'/>
									</a>
									Facebook
								</li>
								<li className='hover:opacity-60 flex flex-row items-center gap-2'>
									<a href="#">
										<FaInstagramSquare className='w-6 h-6'/>
									</a>
									Instagram
								</li>
							</ul>
						</dd>
					</dl>
				</div>
			</section>
			<address className='relative pt-[60px] w-[1200px] mx-auto decoration-none not-italic' style={{ fontSize: ".6875rem", lineHeight: "2.2" }}>
				© 1984 Studio Ghibli - H  © 1986 Studio Ghibli  © 1988 Studio Ghibli  © Akiyuki Nosaka / Shinchosha,1988  © 1989 Eiko Kadono - Studio Ghibli - N  © 1991 Hotaru Okamoto - Yuko Tone - Studio Ghibli - NH  © 1992 Studio Ghibli - NN  © 1993 Saeko Himuro - Studio Ghibli - N  © 1994 Hatake Jimusho - Studio Ghibli - NH  © 1995 Aoi Hiiragi / Shueisha - Studio Ghibli - NH  © 1995 Studio Ghibli  © 1997 Studio Ghibli - ND  © 1999 Hisaichi Ishii - Hatake Jimusho - Studio Ghibli - NHD  © 2001 Studio Ghibli - NDDTM  © 2002 Nekonote-Do - Studio Ghibli - NDHMT  © 2002 TS - Studio Ghibli - NDHMT  © 2004 Studio Ghibli - NDDMT  © 2006 Studio Ghibli - NDHDMT
				<br />
				© 2008 Studio Ghibli - NDHDMT  © 2010 Studio Ghibli - NDHDMTW  © 2011 Chizuru Takahashi - Tetsuro Sayama - Studio Ghibli - NDHDMT  © 2013 Studio Ghibli - NDHDMTK  © 2013 Hatake Jimusho - Studio Ghibli - NDHDMTK
				<br />
				© 2014 Studio Ghibli - NDHDMTK  © 2016 Studio Ghibli - Wild Bunch - Why Not Productions - Arte France Cinéma - CN4 Productions - Belvision - Nippon Television Network - Dentsu - Hakuhodo DYMP - Walt Disney Japan - Mitsubishi - Toho  © 2020 NHK, NEP, Studio Ghibli  © BENELIC
			</address>
		</footer>
	)
}

export default Footer;