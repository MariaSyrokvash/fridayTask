import React, {ChangeEvent} from 'react';
import {Slider} from '@material-ui/core';
import s from './DoubleRangeSlider.module.scss'
import {withStyles} from '@material-ui/styles';


const StyledSlider = withStyles({
	root: {
		color: '#FFC300',
	},
	thumb: {
		height: 16,
		width: 16,
		backgroundColor: '#FFC300',
		border: '2px solid #FFC300',
		marginTop: -8,
		marginLeft: -12,
		'&$PrivateValueLabel-label-7': {
			color: '#444444',
		},
		'&:focus, &:hover, &$active': {
			boxShadow: 'inherit',
		},
	}
})(Slider);

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

	const onChangeHandler = (event: ChangeEvent<{}>, value: (number[] | number)) => {
		onChangeRange && onChangeRange(value as number)
	}


	return (
		<div className={s.box}>
			<div className={s.wrap}>
				<p className={s.minPrice}>{minPrice}</p>
				<StyledSlider
					value={valueArray}
					onChange={onChangeHandler}
					valueLabelDisplay="auto"
					aria-labelledby="range-slider"
					min={minCardsCount}
					max={maxCardsCount}
				/>
				<p className={s.maxPrice}>{maxPrice}</p>
			</div>
		</div>

	);
}
