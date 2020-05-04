import Head from 'next/head';
import Header from './header';

const Block = (props) => {
	return(
		<div>
			<Head>
				<title>Woocommerce Nextjs</title>
				<link rel="stylesheet" href="https://bootswatch.com/4/lumen/bootstrap.min.css"/>
			</Head>
			<Header/>
			{props.children}
		</div>
	)
}

export default Block;