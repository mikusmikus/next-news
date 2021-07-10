import Link from "next/link";
import React from "react";
import styles from "../../styles/character.module.scss";

const Character = ({ character }: any) => {
	return (
		<div className='container'>
			<div className={styles.character}>
				<h1>
					This ir character:
					{character.id}
				</h1>
				<Link href='/characters'>Go back</Link>
				<h1>{character.name}</h1>
				<img src={character.image} alt={character.name} />
			</div>
		</div>
	);
};

export const getStaticProps = async (context: any) => {
	const { id } = context.params;

	const response = await fetch(
		`https://rickandmortyapi.com/api/character/${id}`
	);
	const data = await response.json();

	return {
		props: {
			character: data,
		},
	};
};

export const getStaticPaths = async () => {
	const response = await fetch("https://rickandmortyapi.com/api/character");
	const { results } = await response.json();

	const ids = results.map((res: any) => res.id);
	// const paths = ids.map((id: number) => ({ params: { id: id.toString() } }));

	const paths = results.map((res: any) => ({
		params: {id: res.id.toString()}
	}))


	// output need to be
	// paths : [
	//{ params: { id: '1' } },
	//{ params: { id: '2' } },
	// ]

	return {
		paths,
		// can use this with multiple languages
		fallback: false,
	};
};

export default Character;
