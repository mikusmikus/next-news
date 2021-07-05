import styles from "../styles/grid-test.module.scss";

const gridTest = () => {
	return (
		<div className={styles.pageGrid}>
			<main className={styles.main}>main</main>
			<div className={styles.header}>header</div>
			<div className={styles.nom}><h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, perspiciatis!</h1></div>
			<div className={styles.yom}>yom</div>
			<div className={styles.dom}><p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nobis, fugit hic magnam numquam doloribus veritatis beatae laboriosam nisi totam recusandae atque! Veritatis odio impedit perferendis dolore enim neque asperiores magnam ab molestias, blanditiis maiores explicabo repudiandae culpa voluptatem animi, molestiae harum voluptate labore eum officiis quidem eveniet beatae accusamus totam? Atque totam doloribus consequatur qui tempore rem, earum unde natus quia repudiandae, assumenda architecto sed repellat dolorem eum in id veniam numquam adipisci quisquam eveniet? Earum dolore laudantium, quidem sunt omnis architecto ex autem porro magnam nesciunt itaque animi dolorem. Iusto, nihil in dolores repudiandae sapiente quidem. Autem, consectetur.</p></div>
			<div className={styles.bgImage}>BG image here</div>
		</div>
	);
};

export default gridTest;
