import React, {FC} from 'react';
// import s from './Paginate.module.css';

type PaginatePropsType = {
	totalPacksCount: number
	packsPerPage: number
	page: number
	handlePageChange: (pageNumber: number) => void
}


export const Paginate: FC<PaginatePropsType> = ({
	totalPacksCount,packsPerPage,page,handlePageChange
																								}) => {


	return (
		<>
			Paginate
		</>
	)
}