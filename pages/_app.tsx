import '../styles/globals.css';

interface IProps {
    Component: () => JSX.Element;
    pageProps: any;
}

function MyApp( { Component, pageProps }: IProps ) {
    return <Component {...pageProps} />;
}

export default MyApp;
