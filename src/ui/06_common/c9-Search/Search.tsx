import React, {ChangeEvent, useState} from 'react';
import SuperInputText from '../c1-SuperInputText/SuperInputText';
import {useDispatch} from 'react-redux';
import SuperButton from '../c2-SuperButton/SuperButton';
import s from './Search.module.css'

export const Search = () => {
	const [value, setValue] = useState<string>('')
	const dispatch = useDispatch()

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		// event.currentTarget.value && setSearchNameAC(event.currentTarget.value)
		// event.currentTarget.value && dispatch(setSearchNameAC(event.currentTarget.value))
	}

	const onSearchHandler = () => {
		// dispatch(getPacksTC())
		setValue('')
	}

	const onKeyPressHandler = (e: any) => e.key === 'Enter' && onSearchHandler();

	return (
		<div>
			<SuperInputText onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler}
											placeholder={'product name'}/>


			<SuperButton className={s.searchBtn} onClick={onSearchHandler}>Search</SuperButton>
		</div>
	);
};

