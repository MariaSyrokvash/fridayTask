import React, {FC, useState} from 'react';
import {Search} from '../../../06_common/c9-Search/Search';
import SuperButton from '../../../06_common/c2-SuperButton/SuperButton';
import s from './PacksSettings.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {setIdProfileAC} from '../../../../bll/reducers/profile-reducer';
import {AppRootState} from '../../../../bll/store';
import {
	addPackTC,
	getPacksTC,
	PackType,
	setCurrentPageAC,
	setMinMaxPriceRangeAC, setSearchNamePacksAC
} from '../../../../bll/reducers/packs-reducer';
import {DoubleRangeSlider} from '../../../06_common/c8-DoubleRangeSlider/DoubleRangeSlider';
import {Table} from '../../../06_common/c11-Table/Table';
import {PaginationComponent} from '../../../06_common/c7-Pagination/Pagination';
import {PATH} from '../../../05_routes/Routes';
import {NavLink, Route, useHistory} from 'react-router-dom';
import {ModalBase} from '../../../06_common/c6-ModalForm/ModalBase/ModalBase';
import {Toaster} from 'react-hot-toast';
import {RequestStatusType} from '../../../../bll/reducers/app-reducer';
import Loader from '../../../06_common/c5-Loader/Loader';

type PacksPropsType = {
	theme?: string
	packs: Array<PackType>
}

export const PacksSettings: FC<PacksPropsType> = ({theme, packs}) => {
	const headerElementPacks = ['USERNAME', 'NAME', 'COUNT', 'TIME', 'CARDS', 'TRAIN', 'OPERATIONS']
	const myId = useSelector<AppRootState, string | null>(state => state.profile.profile._id)
	const minCardsCount = useSelector<AppRootState, number>(state => state.packs.minCardsCount)
	const maxCardsCount = useSelector<AppRootState, number>(state => state.packs.maxCardsCount)
	const minPrice = useSelector<AppRootState, number>(state => state.packs.min)
	const maxPrice = useSelector<AppRootState, number>(state => state.packs.max)
	const [activeBtn, setActiveBtn] = useState<string>('all')
	const packsPerPage = useSelector<AppRootState, number>(state => state.packs.packsPerPage)
	const cardPacksTotalCount = useSelector<AppRootState, number>(state => state.packs.cardPacksTotalCount)
	const totalPages = Math.ceil(cardPacksTotalCount / packsPerPage)
	const [searchName, setSearchName] = useState<string>('')
	let [input, setInput] = useState<string>('')
	const history = useHistory()
	const dispatch = useDispatch()
	const valueArray = [minPrice, maxPrice]

	const getAllPacks = () => {
		setActiveBtn('all')
		setSearchName('')
		dispatch(setSearchNamePacksAC(''))
		dispatch(setMinMaxPriceRangeAC(0, 24))
		dispatch(setIdProfileAC(null))
		dispatch(getPacksTC())
	}

	const getMyPacks = () => {
		setActiveBtn('own')
		setSearchName('')
		dispatch(setSearchNamePacksAC(''))
		dispatch(setMinMaxPriceRangeAC(0, 24))
		dispatch(setIdProfileAC(myId))
		dispatch(getPacksTC())
	}

	const onChangeRange = (value: number | [number, number]) => {
		if (Array.isArray(value)) {
			dispatch(setMinMaxPriceRangeAC(value[0], value[1]))
		}
	}

	const handlePageChange = (e: { selected: number }) => {
		const selectedPage = e.selected + 1;
		dispatch(setCurrentPageAC(selectedPage))
		dispatch(getPacksTC())
	};

	const closeModal = () => {
		history.push(PATH.PACKS)
		setInput('')
	}
	const onChangeText = (value: string) => setInput(value)

	const onClickAddPackHandler = () => {
		dispatch(addPackTC(input))
		closeModal()
		setInput('')
	}


	return (
		<div className={s.settings}>
			<Toaster />
			<Search theme={theme} searchName={searchName} setSearchName={setSearchName}/>

			<div className={s.settingsBtnBox}>
				<SuperButton className={activeBtn === 'all' ? s.settingsBtnActive : s.settingsBtn} onClick={getAllPacks}>All
					packs</SuperButton>
				<SuperButton className={activeBtn === 'own' ? s.settingsBtnActive : s.settingsBtn} onClick={getMyPacks}>My
					packs</SuperButton>
			</div>

			<NavLink to={PATH.PACKS + '/add'} className={s.addPack}>
				<SuperButton className={s.addBtn}>
					Add pack
				</SuperButton>
			</NavLink>
			<DoubleRangeSlider maxCardsCount={maxCardsCount} maxPrice={maxPrice}
												 minCardsCount={minCardsCount} minPrice={minPrice}
												 valueArray={valueArray} onChangeRange={onChangeRange}/>
			<Table headerElement={headerElementPacks} packs={packs}/>

			<PaginationComponent handlePageChange={handlePageChange} totalPages={totalPages}/>

			<Route path={PATH.PACKS + '/add'}
						 render={() => <ModalBase closeModal={closeModal} input={input} onChangeText={onChangeText}
																			addNewItemHandler={onClickAddPackHandler} isAddingForm={true}
																			title='Please, enter the name of the pack'/>}/>
		</div>
	)
}