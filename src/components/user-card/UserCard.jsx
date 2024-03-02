const UserCard = ({ user }) => {
	return (
		<div>
			<img src={user.profileImage} alt={user.name + 'profile image'}  />
			<span>{user.name}</span>
		</div>
	);
};

export default UserCard;
