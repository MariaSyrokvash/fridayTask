import React, {FC, ReactNode} from 'react';
import s from './Table.module.css'



type TablePropsType = {
	// headerElement: Array<string>
	// renderPacksBody?: (cardPacks: Array<PackType>) => ReactNode
	// renderCardsBody?: (cardPacks: Array<CardType>) => ReactNode
	// isTableCard?: boolean
}

export const Table: FC<TablePropsType> = () => {


	const renderHeader = (headerElement: Array<string>) => {
		return headerElement.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>
		})
	}


	return (
		<div className={s.tableBox}>

		</div>
	)
}
