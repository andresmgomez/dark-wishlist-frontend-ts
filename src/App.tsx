import { FC, useState } from 'react';
import './App.css';
import { AddWishList } from './components/WishLists/AddWishList';

import { WishList } from './components/WishLists/WishList';
import { initialList } from './constants/wishlist';

export const App: FC = () => {
	const [listItems] = useState(initialList);
	return (
		<div className='App'>
			<header className='App-header'>
				<div className='addForm'>
					<AddWishList />
				</div>
				<WishList wishlist={listItems} />
			</header>
		</div>
	);
};

export default App;
