import axios from "axios";
import styles from "../../styles/feed.module.scss";
import Image from 'next/image'
import { useRouter } from "next/router";

const Feed = ({ pageNumber, articles }: any) => {

	const router = useRouter();

	return (
		<div className='container'>
			{articles.map((article: any, i: number) => {
				return (
					<div className={styles.post} key={i}>
						<h2 onClick={()=> (window.location.href= article.url)}>{article.title}</h2>
						<p>{article.description}</p>
						{article.urlToImage && (
							<img
								src={article.urlToImage}
								alt="img"
							/>
						)}
					</div>
				);
			})}
						<div className={styles.paginator}>
				<div className={pageNumber === 1 ? styles.disabled : styles.active} onClick={() => {
					if (pageNumber > 1){
						router.push(`/feed/${pageNumber-1}`).then(()=> window.scroll(0, 0))
					}
				}}>Previous</div>
				<div>page # {pageNumber}</div>
				<div className={pageNumber === 5 ? styles.disabled : styles.active} onClick={() => {
					if (pageNumber < 5){
						router.push(`/feed/${pageNumber+1}`).then(()=> window.scroll(0, 0))
					}
				}}>Next</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async (context: any) => {
	const pageNumber = context.query.slug;

	if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
		return {
			props: {
				articles: [],
				pageNumber: 1,
			},
		};
	}

	const URL = `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}&apiKey=`;

	const response = await axios.get(
		`${URL}${process.env.NEXT_PUBLIC_MY_API_KEY}`
	);

	const { articles } = response.data;

	return {
		props: {
			articles,
			pageNumber: Number(pageNumber),
		},
	};
};

export default Feed;
