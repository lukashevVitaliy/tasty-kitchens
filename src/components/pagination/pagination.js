import './pagination.scss';

export const Pagination = ({ page, totalPages, nextPage, prevPage }) => {

	return (
		<div className="pagination">
			<button
				type="button"
				className="pagination__arrow-left"
				onClick={prevPage}
			>❮</button>
			<span className="pagination__num">{page} of {totalPages}</span>
			<button
				type="button"
				className="pagination__arrow-right"
				onClick={nextPage}
			>❯</button>
		</div>
	)
}
