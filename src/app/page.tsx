'use client';
import React, { useState } from 'react';
import { Button, Htag, P, Tag, Rating } from '../components';
import { withLayout } from '../Layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(4);

	async function getData() {
		const firstCategory = 0;
		const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + 'api/top-page/find', {
			firstCategory
		});
    
		return {
			props: {
				menu,
				firstCategory
			}
		};
	}

	const data = getData();
	console.log(data);
	

	return (
		<>
			<Htag tag='h1'>Курсы по Photoshop</Htag>
			<Button appearance='primary' arrow='right'>Кнопка</Button>
			<Button appearance='ghost' arrow='down'>Кнопка</Button>
			<P size='s'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</P>
			<Tag size='s'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='s' color='green'>Green</Tag>
			<Tag color='primary'>Green</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
			<ul>
				{/* {data.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))} */}
			</ul>
		</>
	);
}

export default withLayout(Home);

interface HomeProps extends Record<string, unknown> {
    menu: MenuItem[];
    firstCategory: number;
}