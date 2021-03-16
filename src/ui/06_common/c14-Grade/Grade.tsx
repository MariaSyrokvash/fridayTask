import React, {FC} from 'react';
import s from './Grade.module.scss'

type GradeTypeProps = {
	value: RatingValueType | number
	setRatingValue: (value: RatingValueType) => void
}

export const Grade: FC<GradeTypeProps> = ({value, setRatingValue}) => {
	return (
		<div className={s.box}>
			<Star selected={value > 0} setRatingValue={setRatingValue} value={1}/>
			<Star selected={value > 1} setRatingValue={setRatingValue} value={2}/>
			<Star selected={value > 2} setRatingValue={setRatingValue} value={3}/>
			<Star selected={value > 3} setRatingValue={setRatingValue} value={4}/>
			<Star selected={value > 4} setRatingValue={setRatingValue} value={5}/>
		</div>
	)
}


export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;


type StarPropsType = {
	selected: boolean
	setRatingValue: (value: RatingValueType) => void
	value: RatingValueType
}

const Star: FC<StarPropsType> = ({setRatingValue, selected, value}) => {
	return <div onClick={() => {
		setRatingValue(value)
	}} className={selected ? s.star : ''}>&#9733;</div>
}