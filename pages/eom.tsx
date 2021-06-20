import react from 'react'; 
import axios from 'axios';
import { NextPage } from 'next'
import  Image  from 'next/image';
import styles from '../styles/eom.module.scss'
// nafe snippet for component func+ export

interface Props {
	employee : {
		name: string
		position: string
		image: string
		description: string
	}
}  


const Eom : NextPage<Props> = ({employee}) => {

	return (
		<div className='container'>
			<div className={styles.main}>
				<h1 className={styles.employee}>Employee of the month</h1>
				<h3>{employee.name}</h3>
				<h6>{employee.position}</h6>
				<Image className={styles.image} src={employee.image} width={400} height={400}/>
				<p>{employee.description}</p>
				
			</div>
		</div>
	);
}


export const getServerSideProps = async (context: any) => {
	try { 
		const response = await axios.get('https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth')
		return {
			props: {
				employee: response.data
			} as Props
		}

	} catch {
		return {
		  redirect: {
			destination: '/',
			permanent: false,
		  },
		}

	}
}

export default Eom;

