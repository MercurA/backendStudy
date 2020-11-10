import { Auth0Provider } from '@auth0/auth0-react';
import Layout from '@components/layout/Layout';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import App, { AppContext } from 'next/app';
import getConfig from 'next/config';
import Router, { withRouter } from 'next/router';
import React from 'react';
import { Provider } from 'react-redux';

import makeStore, { RootState } from '../redux/store';
import theme from '../styles/theme';

const { publicRuntimeConfig } = getConfig();

const onRedirectCallback = (appState) => {
    if (appState && appState.returnTo) {
        Router.push({
            pathname: '/',
            query: appState.returnTo.query
        });
    }
};
class Main extends App<ReduxWrapperAppProps<RootState>> {
    async componentDidMount(): Promise<void> {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        jssStyles?.parentNode?.removeChild(jssStyles);
    }

    public render() {
        const { Component, pageProps, store } = this.props;

        return (
            <Auth0Provider
                domain={publicRuntimeConfig.domain}
                clientId={publicRuntimeConfig.clientId}
                redirectUri={publicRuntimeConfig.redirectUri}
                onRedirectCallback={onRedirectCallback}
                useRefreshTokens={true} // https://stackoverflow.com/questions/63537913/auth0-does-not-persist-login-on-page-refresh-for-email-password
                cacheLocation="localstorage"
                scope="read:current_user update:current_user_metadata">
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    </ThemeProvider>
                </Provider>
            </Auth0Provider>
        );
    }
}

Main.getInitialProps = async ({ Component, ctx }: AppContext) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    return { pageProps };
};

export default withRedux(makeStore)(withRouter(Main));
