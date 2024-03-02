import { useState } from 'react';
import { USERS } from '../constants/users';

export const usePaginate = () => {
	const [pages, setPages] = useState({ page: 1, itemsPerPage: 2 });

	const { usersPaginated, totalPages } = paginatedUsers(
		USERS,
		pages.page,
		pages.itemsPerPage
	);

	const isFirstPage = pages.page === 1;
	const isLastPage = pages.page === totalPages;

	const handleChangeItemsPerPage = event => {
		const numberUser = { itemsPerPage: Number(event.target.value), page: 1 };
		setPages(numberUser);
	};

    const nextPage=()=>{
        setPages({ ...pages, page: pages.page + 1 })
    }

    const prevPage=()=>{
        setPages({ ...pages, page: pages.page - 1 })
    }

	return {
		usersPaginated,
		handleChangeItemsPerPage,
		isFirstPage,
		isLastPage,
		itemsPerPage: pages.itemsPerPage,
		page: pages.page,
        nextPage,
        prevPage,
        totalPages
	};
};

const paginatedUsers = (users, page, usersPerPage) => {
	const star = (page - 1) * usersPerPage;
	const end = star + usersPerPage;
	const totalPages = Math.ceil(users.length / usersPerPage);
	const usersPaginated = users.slice(star, end);
	return { usersPaginated, totalPages };
};
