import 'src/styles/global.scss';

import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
