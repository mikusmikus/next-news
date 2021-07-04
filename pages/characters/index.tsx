import Link from "next/link";
import React from "react";
import styles from "../../styles/characters.module.scss";
import Image from 'next/image'

const Characters = ({ characters }: any) => {
	console.log(characters);

	return (
		<div className='container'>
			<h1 className={styles.title} >This is Characters page</h1>
			<div className={styles.cardWrapper}>
				{characters.map((character: any, index: number) => {
					return (
						<Link key={index} href="/characters/[id]" as={`/characters/${character.id}`} >
							<a className={styles.card}>
							<h3>{character.name}</h3>
							<Image src={character.image} alt={character.name} width={300} height={300} layout="responsive"/>
							{/* <img src={character.image} alt={character.name} /> */}
							</a>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export const getStaticProps = async () => {


	const response = await fetch(
		"https://rickandmortyapi.com/api/character"
	);
	const { results } = await response.json()

	
	return {
		props: {
			characters: results,
			revalidate: 60,
		},
	};
};
export default Characters;
