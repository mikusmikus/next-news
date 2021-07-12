import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/toolbar.module.scss";
import useTranslation from 'next-translate/useTranslation'

const Toolbar = () => {
	const router = useRouter();
	const { asPath } = router;
	const { t, lang } = useTranslation('navLinks');
	
	const home = t('nav_home')
	const languages = t('nav_languages')
	console.log(router);
	

	
	return (
		<>
		<div className={styles.main}>
		<div className={styles.languages}>
		<Link href={asPath} locale="en">
				<a> en</a>
			</Link>
		<Link href={asPath} locale="fr">
				<a> fr</a>
			</Link>
		<Link href={asPath} locale="no">
				<a> no</a>
			</Link>
		</div>
			<Link href='/'>
				<a> {home}</a>
			</Link>
			<Link href='/feed/1'>
				<a> Feed</a>
			</Link>
			<Link href='/characters'>
				<a> characters</a>
			</Link>
			<Link href='/eom'>
				<a> EOM</a>
			</Link>
			<Link href='/grid-test'>
				<a> Grid Test</a>
			</Link>
			<Link href='/languages'>
				<a>{languages}</a>
			</Link>
		</div>
		</>
	);
};

export default Toolbar;
