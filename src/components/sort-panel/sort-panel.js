import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';

import { sortLowestRestaurants, sortHighestRestaurants } from '../../store/reducers/restaurantsSlice';

import './sort-panel.scss';


export const SortPanel = () => {
	const [selectedOption, setSelectedOption] = useState(null);
	const restaurants = useSelector(state => state.restaurants.restaurants);
	const dispatch = useDispatch();

	const options = [
		{ value: 'lowest', label: 'Lowest' },
		{ value: 'highest', label: 'Highest' }
	];

	useEffect(() => {
		if (selectedOption && selectedOption.value === 'lowest') {
			const sortLowestResto = [...restaurants].sort((a, b) => {
				return a.total_reviews - b.total_reviews;
			})
			dispatch(sortLowestRestaurants(sortLowestResto));
		} else if (selectedOption && selectedOption.value === 'highest') {
			const sortHighestResto = [...restaurants].sort((a, b) => {
				return b.total_reviews - a.total_reviews;
			})
			dispatch(sortHighestRestaurants(sortHighestResto));
		}
	}, [selectedOption])


	return (
		<div className="sort-panel">
			<Select
				defaultValue={selectedOption}
				onChange={setSelectedOption}
				options={options}
				classNamePrefix="custom-select"
				placeholder="Sort by Lowest"
				value={selectedOption}
			/>
		</div>
	)
}
