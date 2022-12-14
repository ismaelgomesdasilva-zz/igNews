/* eslint-disable @next/next/no-title-in-document-head */
import Document, { Html, Main, Head, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
						rel="stylesheet"
					/>
					<link href="/images/favicon.png" rel="shortcut icon" />
					<title>Ig news</title>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
