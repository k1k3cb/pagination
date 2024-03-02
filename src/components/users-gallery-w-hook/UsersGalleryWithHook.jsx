import { usePaginate } from '../../hooks/usePaginate';
import UserCard from '../user-card/UserCard';
import { StyledGalleryContainer } from './styles';

const UsersGalleryWithHook = () => {
	const {
		usersPaginated,
		handleChangeItemsPerPage,
		isFirstPage,
		isLastPage,
		itemsPerPage,
		page,
		nextPage,
		prevPage,
		totalPages
	} = usePaginate();

	return (
		<>
			<StyledGalleryContainer>
				{usersPaginated.map(user => (
					<UserCard key={user.userId} user={user} />
				))}
			</StyledGalleryContainer>
			<div>
				<label>Número de usuario a mostrar:</label>
				<select value={itemsPerPage} onChange={handleChangeItemsPerPage}>
					<option value='1'> 1 usuarios</option>
					<option value='2'> 2 usuarios</option>
					<option value='3'>3 usuarios</option>
				</select>
			</div>

			<button disabled={isFirstPage} onClick={prevPage}>
				Prev
			</button>
			<span>
				Página {page} de {totalPages}
			</span>
			<button disabled={isLastPage} onClick={nextPage}>
				Next
			</button>
		</>
	);
};

export default UsersGalleryWithHook;
