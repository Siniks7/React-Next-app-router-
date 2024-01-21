import React from 'react';
import { Button, Htag } from '../components';

export default function Home() {
	return (
		<>
			<Htag tag='h1'>Курсы по Photoshop</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
		</>
	);
}
