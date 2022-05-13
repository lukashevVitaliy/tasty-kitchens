import { useState } from 'react';
import Select from 'react-select';

import './sort-panel.scss';


export const SortPanel = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const options = [
		{ value: 'lowest', label: 'Lowest' },
		{ value: 'highest', label: 'Highest' }
	];


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
