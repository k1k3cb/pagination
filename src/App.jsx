import UsersGalleryWithHook from './components/users-gallery-w-hook/UsersGalleryWithHook';
import UsersGallery from './components/users-gallery/UsersGallery';

const App = () => {
	return (
		<>
			<h1>Pagination</h1>
			<UsersGallery />

			<h2>Con hook</h2>
			<UsersGalleryWithHook/>
		</>
	);
};

export default App;
