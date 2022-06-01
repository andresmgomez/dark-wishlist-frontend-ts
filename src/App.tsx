import { FC } from 'react';
import './App.css';
import { WishListItem } from './components/WishLists/WishListItem';
import { initialList } from './constants/wishlist';

export const App: FC = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<WishListItem listitem={initialList[0]} />
				<WishListItem listitem={initialList[1]} />
				<WishListItem listitem={initialList[2]} />
			</header>
		</div>
	);
};

export default App;
