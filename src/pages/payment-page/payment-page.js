import { Header } from '../../components/header';

import './payment-page.scss';
import chech from '../../resources/icons/check_paym.svg';

export const PaymentPage = () => {
	return (
		<div className="payment-page">
			<Header />
			<div className="payment-page__wrap">
				<div className="payment-page__image">
					<img src={chech} alt="check" />
				</div>
				<h4 className="payment-page__title">Payment Successful</h4>
				<p className="payment-page__desc">
					Thank you for ordering<br />Your payment is successfully completed.
				</p>
				<a href="#" className="btn btn__paym">Go To Home Page</a>
			</div>

		</div>
	)
}
