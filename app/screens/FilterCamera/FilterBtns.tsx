import React from 'react';
import {Button, View} from 'react-native';

interface ButtonProps {
    titles: Array<string>,
    style: object,
    onPressFunc: Function,
}


function FilterBtns({titles, style, onPressFunc}: ButtonProps) {
	const FilterBtnComponents = titles.map((title, idx) =>
		<View style={style} key={idx}>
			<Button
				title={title}
				onPress={() => onPressFunc()}
			/>
		</View>,
	);

	return (
		<>
			{FilterBtnComponents}
		</>
	);
}

export default FilterBtns;
