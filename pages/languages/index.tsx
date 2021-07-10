import axios from 'axios'
import Link from 'next/link';
import React from 'react';

const Languages = ({data}: any) => {
	
	return (
		<ul>
			{data && data.map((el:any) => 
		<li key={el.id}>
			<Link href={`/languages/${el.id}`}>
			<a >
				{el.name}
			</a>
			</Link>
		</li>
				)}
		</ul>
	);
}


export async function getStaticProps(context: any) {
	
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
	
	
	return {
		props: {
			data
		}, 
	}
}


export default Languages;