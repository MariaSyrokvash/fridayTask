import React from 'react';
import ReactPaginate from 'react-paginate';
import p from './pagination.module.scss';

type PaginationComponentPropsType = {
	totalPages: number;
	handlePageChange:(selectedItem: { selected: number }) => void;
}


export const PaginationComponent: React.FC<PaginationComponentPropsType> = ({
																											 totalPages,
																											 handlePageChange,
																										 }) => {
	return (
		<div className={p.paginationBox}>
			<ReactPaginate pageCount={totalPages}
										 marginPagesDisplayed={1}
										 pageRangeDisplayed={2}
										 previousLabel={'Previous'}
										 nextLabel={'Next'}
										 containerClassName={p.pagination}
										 activeClassName={p.active}
										 onPageChange={handlePageChange}
										 pageLinkClassName={p.pageLinkClassName}
										 pageClassName={p.pageClassName}
										 nextClassName={p.nextClassName}
										 previousClassName={p.previousClassName}
										 breakClassName={p.breakClassName}
										 previousLinkClassName={p.previousLinkClassName}
										 nextLinkClassName={p.nextLinkClassName}
										 breakLinkClassName={p.breakLinkClassName}
										 disabledClassName={p.disabledClassName}
			/>
		</div>
	);
};