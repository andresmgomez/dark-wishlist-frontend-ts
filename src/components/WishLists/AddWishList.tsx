import {
	Box,
	FormControl,
	Input,
	InputLabel,
	Select,
	MenuItem,
	Switch,
	Button,
} from '@mui/material';
import { FC, FormEvent, useState } from 'react';

export const AddWishList: FC = () => {
	const [wishlistName, setWishListName] = useState<string>('');
	const [wishlistType, setWishListType] = useState<string>('');
	const [wishlistPrice, setWishListPrice] = useState<number>(23.99);
	const [wishlistPriority, setWishListPriority] = useState<number>(5);
	const [desireToBuy, setDesireToBuy] = useState<boolean>(true);

	const onAddList = async (e: FormEvent) => {
		e.preventDefault();
	};

	return (
		<Box component='form' noValidate autoComplete='off'>
			<form onSubmit={e => onAddList(e)}>
				<FormControl variant='standard'>
					<InputLabel htmlFor='wishlist-name'>WishList Name</InputLabel>
					<Input
						id='wishlist-name'
						value={wishlistName}
						onChange={e => setWishListName(e.target.value)}
					/>
				</FormControl>
				<FormControl variant='standard'>
					<InputLabel htmlFor='wishlist-type'>WishList Type</InputLabel>
					<Input
						id='wishlist-type'
						value={wishlistType}
						onChange={e => setWishListType(e.target.value)}
					/>
				</FormControl>
				<FormControl variant='standard'>
					<InputLabel htmlFor='wishlist-price'>WishList Price</InputLabel>
					<Input
						id='wishlist-price'
						value={wishlistPrice}
						onChange={e => setWishListPrice(parseFloat(e.target.value))}
					/>
				</FormControl>
				<FormControl>
					<Select
						value={wishlistPriority}
						onChange={e =>
							setWishListPriority(e.target.value as 1 | 2 | 3 | 4 | 5)
						}
					>
						<MenuItem value={1}>{1}</MenuItem>
						<MenuItem value={2}>{2}</MenuItem>
						<MenuItem value={3}>{3}</MenuItem>
						<MenuItem value={4}>{4}</MenuItem>
						<MenuItem value={4}>{5}</MenuItem>
					</Select>
				</FormControl>
				<FormControl>
					<Switch
						checked={desireToBuy}
						onChange={() => setDesireToBuy(!desireToBuy)}
					/>
				</FormControl>
				<Button variant='contained' color='primary' size='medium' type='submit'>
					Add Wishlist
				</Button>
			</form>
		</Box>
	);
};
