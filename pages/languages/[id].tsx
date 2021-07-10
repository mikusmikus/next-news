import axios from "axios";
import { useRouter } from 'next/dist/client/router';

const singleLanguage = ({data}: any) => {
	// const router = useRouter();
	// console.log(router);
	console.log(data);
	
	return (
		<div>
			{data && (
				<h1>{data.name}</h1>
			)}
		</div>
	);
}

export default singleLanguage;


export const getStaticProps = async ({params}: any) => {

 
	const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
	
	return {
		props: {
			// character: data,
			data
		},
	};
};

export const getStaticPaths = async () => {
	const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
	const paths = data.map((el: any) => ({ params: { id: el.id.toString() } }));

	return {
		paths,
		fallback: 'blocking',
	};
};
