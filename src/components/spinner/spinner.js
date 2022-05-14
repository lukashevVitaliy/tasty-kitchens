import './spinner.scss';

export const Spinner = () => {

	return (
		<div className="spinner">
			<div className="spinner__wrap">
				<svg xmlns="http://www.w3.org/2000/svg" style={{ margin: "auto", background: "rgb(255, 255, 255)", display: "block", shapeRendering: "auto" }} width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
					<circle cx="50" cy="50" fill="none" stroke="#f7931e" strokeWidth="7" r="27" strokeDasharray="127.23450247038662 44.411500823462205">
						<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
					</circle>
				</svg>
			</div>
		</div>

	)
}