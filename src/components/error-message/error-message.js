import './error-message.scss';
import error from './error.svg';

export const ErrorMessage = () => {
	return (
		<div className="error-message" >
			<div className="error-message__image">
				<img src={error} alt="error" />
			</div>
			<h3 className="error-message__title">Something went wrong...</h3>
		</div>
	)
}
