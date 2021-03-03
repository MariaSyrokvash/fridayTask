import React from 'react';


type DoubleRangeSliderType = {
	maxCardsCount: number
	minCardsCount: number
	minPrice: number
	maxPrice: number
	valueArray:  Array<number>
	onChangeRange: (value: number | [number, number]) => void
}
export const DoubleRangeSlider: React.FC<DoubleRangeSliderType> = (
	{
		minPrice, maxPrice, valueArray, onChangeRange, minCardsCount,maxCardsCount
	}

	) => {




	return (
		<div >
			DoubleRangeSlider
		</div>

	);
}
