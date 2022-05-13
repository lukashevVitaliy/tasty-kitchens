import './page-404.scss';
import page404 from '../../resources/img/page-error.svg';


export const Page404 = () => {
	return (
		<div className="page-404">
			<div className="page-404__wrap">
				<div className="page-404__image">
					<img src={page404} alt="page 404" />
				</div>
				<h4 className="page-404__title">Page Not Found</h4>
				<p className="page-404__desc">
					We are sorry, the page you requested could not be found.<br />
					Please go back to the homepage
				</p>
				<a href="#" className="btn btn__home">Home Page</a>
			</div>

		</div>
	)
}
