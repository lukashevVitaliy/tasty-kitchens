import { Autoplay, FreeMode, Keyboard, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/autoplay';
import 'swiper/scss/free-mode';
import 'swiper/scss/keyboard';
import 'swiper/scss/pagination';

import './slider-promo.scss';
import viber from '../../resources/icons/viber.png';


export const SliderPromo = () => {
	return (
		<Swiper
			style={{
				"--swiper-pagination-bullet-horizontal-gap": "12px"
			}}
			modules={[Pagination, Keyboard, FreeMode, Autoplay]}
			spaceBetween={50}
			slidesPerView={1}
			autoplay={false}
			freeMode={false}
			keyboard={{
				enabled: true,
				onlyInViewport: true,
				pageUpDown: true
			}}
			pagination={{ clickable: true }}
			loop={true}
		>
			<SwiperSlide className="slider-promo">
				<div className="slider-promo__image"></div>
				<div className="slider-promo__info">
					<h1 className="slider-promo__title">South Indian Food</h1>
					<p className="slider-promo__desc">Best offers on South India holiday tour packages at Veena World.</p>
					<div className="slider-promo__contacts">
						<img src={viber} alt="viber phone" />
						<span>+123 456 789</span>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="slider-promo">
				<div className="slider-promo__image"></div>
				<div className="slider-promo__info">
					<h1 className="slider-promo__title">South Indian Food</h1>
					<p className="slider-promo__desc">Best offers on South India holiday tour packages at Veena World.</p>
					<div className="slider-promo__contacts">
						<img src={viber} alt="viber phone" />
						<span>+123 456 789</span>
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide className="slider-promo">
				<div className="slider-promo__image"></div>
				<div className="slider-promo__info">
					<h1 className="slider-promo__title">South Indian Food</h1>
					<p className="slider-promo__desc">Best offers on South India holiday tour packages at Veena World.</p>
					<div className="slider-promo__contacts">
						<img src={viber} alt="viber phone" />
						<span>+123 456 789</span>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	)
}
