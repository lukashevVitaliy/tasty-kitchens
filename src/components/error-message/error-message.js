import './error-message.scss';
import error from './error.svg';

export const ErrorMessage = () => {
	return (
		<div className="error-message" >
			<div className="error-message__wrap">
				<div className="error-message__image">
					<img src={error} alt="error" />
				</div>
				<h2 className="error-message__title">Something went wrong...</h2>
			</div>
		</div>
	)
}
