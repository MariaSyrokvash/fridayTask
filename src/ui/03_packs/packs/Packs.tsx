import React, {FC} from 'react';
import s from './Packs.module.scss'
import {PacksSettings} from './PacksSettings/PacksSettings';
import {PackType} from '../../../bll/reducers/packs-reducer';

type PacksPropsType = {
	theme?: string
	packs: Array<PackType>
}


export const Packs: FC<PacksPropsType> = ({theme,packs}) => {


	return (
		<div className={s.packsBox}>
			<PacksSettings theme={theme} packs={packs}/>
		</div>
	)
}