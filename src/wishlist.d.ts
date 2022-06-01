import { FormEvent } from 'react';

interface Item {
	name: string;
	type: string;
	price: number;
	priority: number;
	desireToBuy: boolean;
}

type AddList = (form: FormEvent) => void;
