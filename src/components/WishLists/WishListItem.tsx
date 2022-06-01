import { FC } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

interface ListItem {
	listitem: Item;
}

export const WishListItem: FC<ListItem> = ({ listitem }) => {
	return (
		<Card sx={{ minWidth: 350 }}>
			<CardHeader title={listitem.name} subheader={listitem.type} />
			<CardContent>
				<Typography color='text.secondary'>
					Price: {listitem.price} |{' '}
				</Typography>
				<Typography color='text.primary'>
					How likely you are to buy this Item? {listitem.priority}
				</Typography>
			</CardContent>
		</Card>
	);
};
