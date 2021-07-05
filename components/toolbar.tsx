import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/toolbar.module.scss";

const Toolbar = () => {
	const router = useRouter();
	return (
		<div className={styles.main}>
			<Link href='/'>
				<a> home</a>
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
		</div>
	);
};

export default Toolbar;
