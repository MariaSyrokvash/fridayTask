import React, {FC, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../../bll/store';
import {Redirect, Route, useHistory} from 'react-router-dom';
import {PATH} from '../../05_routes/Routes';
import {Packs} from './Packs';
import {deletePackTC, getPacksTC, PackType, updatePackTС} from '../../../bll/reducers/packs-reducer';
import {setIdProfileAC} from '../../../bll/reducers/profile-reducer';
import {ModalBase} from '../../06_common/c6-ModalForm/ModalBase/ModalBase';
import {ModalConfirm} from '../../06_common/c6-ModalForm/ModalBase/ModalConfirm/ModalConfirm';

type PacksContainerPropsType = {
	theme?: string
}

export const PacksContainer: FC<PacksContainerPropsType> = ({theme}) => {
	const dispatch = useDispatch()
	const [value, setValue] = useState<string>('')
	const isLoggedIn = useSelector<AppRootState, boolean>(state => state.login.isLoggedIn)
	const packs = useSelector<AppRootState, Array<PackType>>(state => state.packs.packs)
	const history = useHistory()

	useEffect(() => {
		dispatch(setIdProfileAC(null))
		dispatch(getPacksTC())
	}, [dispatch])

	if (!isLoggedIn) {
		return <Redirect to={PATH.LOGIN}/>
	}

	const closeModal = () => {
		history.push(PATH.PACKS)
	}
	const onChangeTextUpdateHandler = (value: string) => {
		setValue(value)
	}
	const closeUpdateModal = () => {
		closeModal()
		setValue('')
	}

	const updatePack = (packId: string, value: string) => {
		dispatch(updatePackTС(packId, value))
		closeModal()
		setValue('')
	}

	const confirmRemovePack = (packId: string) => {
		dispatch(deletePackTC(packId))
		closeModal()
	}

	return (
		<>
			<Packs theme={theme} packs={packs}/>
			<Route path={PATH.PACKS + '/update/:packId'}
						 render={() => <ModalBase isAddingForm={false} closeModal={closeUpdateModal} input={value}
																			onChangeText={onChangeTextUpdateHandler}
																			addTextHandler={updatePack} theme={theme}
																			title='Please, update name of pack'/>} />

			<Route path={PATH.PACKS + '/delete/:packId'}
						 render={() => <ModalConfirm confirmHandler={confirmRemovePack}
																				 cancelHandler={closeModal} theme={theme}
																				 title='Are you sure you want to delete this pack?'/>}/>
		</>
	)
}

