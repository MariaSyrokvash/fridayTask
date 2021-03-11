import React, {ChangeEvent, FC, useState} from 'react';
import SuperInputText from '../c1-SuperInputText/SuperInputText';
import {useDispatch} from 'react-redux';
import SuperButton from '../c2-SuperButton/SuperButton';
import s from './Search.module.scss'
import {getPacksTC, setSearchNamePacksAC} from '../../../bll/reducers/packs-reducer';
import searchIcon from './image/searchIcon.svg';

type SearchPropsType = {
	theme?: string
	searchName: string
	setSearchName: (value: string) => void
}

export const Search: FC<SearchPropsType> = ({theme, searchName, setSearchName}) => {
	const dispatch = useDispatch()

	const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
		event.currentTarget.value && setSearchName(event.currentTarget.value)
		event.currentTarget.value && dispatch(setSearchNamePacksAC(event.currentTarget.value))
	}

	const onSearchHandler = () => {
		dispatch(getPacksTC())
		setSearchName('')
	}

	const onKeyPressHandler = (e: any) => e.key === 'Enter' && onSearchHandler();

	return (
		<div className={s.searchBox}>
			<SuperInputText onKeyPress={onKeyPressHandler} onChange={onChangeInputHandler}
											placeholder={'search packs'} theme={theme}  inputClassName={s.search} value={searchName}/>


			<SuperButton className={`${s.searchBtn} ${theme === 'dark'? s.searchBtnDark: s.searchBtnLight}`} onClick={onSearchHandler}>
				<img className={s.searchIcon} src={searchIcon}/>
			</SuperButton>
		</div>
	);
};

