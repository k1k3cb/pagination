import { useState } from 'react';
import { USERS } from '../../constants/users';
import UserCard from '../user-card/UserCard';
import { StyledGalleryContainer } from './styles';

const UsersGallery = () => {
	const [pages, setPages] = useState({ page: 1, itemsPerPage: 2 });

	const { usersPaginated, totalPages } = paginatedUsers(
		USERS,
		pages.page,
		pages.itemsPerPage
	);

	const isFirstPage = pages.page === 1;
	const isLastPage = pages.page === totalPages;

	return (
		<>
			<StyledGalleryContainer>
				{usersPaginated.map(user => (
					<UserCard key={user.userId} user={user} />
				))}
			</StyledGalleryContainer>
			<div>
				<label>Número de usuario a mostrar:</label>
				<select
					value={pages.itemsPerPage}
					onChange={event => handleChangeItemsPerPage(event, setPages)}
				>
					<option value='1'> 1 usuarios</option>
					<option value='2'> 2 usuarios</option>
					<option value='3'>3 usuarios</option>
				</select>
			</div>

			<button
				disabled={isFirstPage}
				onClick={() => setPages({ ...pages, page: pages.page - 1 })}
			>
				Prev
			</button>
			<span>Página {pages.page} de {totalPages}</span>
			<button
				disabled={isLastPage}
				onClick={() => setPages({ ...pages, page: pages.page + 1 })}
			>
				Next
			</button>
		</>
	);
};

const paginatedUsers = (users, page, usersPerPage) => {
	const star = (page - 1) * usersPerPage;
	const end = star + usersPerPage;
	const totalPages = Math.ceil(users.length / usersPerPage);
	const usersPaginated = users.slice(star, end);
	return { usersPaginated, totalPages };
};

const handleChangeItemsPerPage = (event, setPages) => {
	const numberUser = { itemsPerPage: Number(event.target.value), page: 1 };
	setPages(numberUser);
};

export default UsersGallery;
