import axios from "axios";
import { useRouter } from "next/dist/client/router";

const singleLanguage = ({ data, extraData }: any) => {
	// const router = useRouter();
	// console.log(router);
	// console.log(data);
	console.log(data);
	const { locale, locales } = useRouter();
	console.log(locales);
	return (
		<div>
			<h1 style={{ fontSize: "50px" }}>
				{extraData[locale as "en" | "no" | "fr"]}
			</h1>
			{data && <h1>{data.name}</h1>}
		</div>
	);
};

export default singleLanguage;

export const getStaticProps = async ({ params }: any) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/users/${params.id}`
	);

	const extraData = {
		en: "Title English",
		fr: "Title French",
		no: "Title Norway",
	};

	return {
		props: {
			// character: data,
			data,
			extraData,
		},
	};
};

export const getStaticPaths = async ({ locales }: any) => {
	const { data } = await axios.get(
		"https://jsonplaceholder.typicode.com/users"
	);
	// lai generētu static pages, nepieciešami visi path ar iespējamiem locals.
	const paths1 = data.map((el: any) => ({
		params: { id: el.id.toString() },
		locale: locales[0],
	}));
	const paths2 = data.map((el: any) => ({
		params: { id: el.id.toString() },
		locale: locales[1],
	}));
	const paths3 = data.map((el: any) => ({
		params: { id: el.id.toString() },
		locale: locales[2],
	}));

	const paths = [...paths1, ...paths2, ...paths3];

	return {
		paths: paths,

		fallback: false,
	};
};
