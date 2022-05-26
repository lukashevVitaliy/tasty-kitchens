import { Link } from 'react-router-dom';
import { Header } from '../../components/header';

import './payment-page.scss';
import chech from '../../resources/icons/check_paym.svg';

const PaymentPage = () => {
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
				<Link to="/restaurants" className="btn btn__paym">Go To Home Page</Link>
			</div>

		</div>
	)
}

export default PaymentPage;