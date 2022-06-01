import { List } from '@mui/material';
import { FC } from 'react';
import { WishListItem } from './WishListItem';

interface ListItems {
	wishlist: Item[];
}

export const WishList: FC<ListItems> = ({ wishlist }) => {
	return (
		<List>
			{wishlist.map(listitem => {
				return <WishListItem key={listitem.name} listitem={listitem} />;
			})}
		</List>
	);
};
