module.exports = {
    publicRuntimeConfig: {
        // Will be available on both server and client
        domain: process.env.NEXT_PUBLIC_DOMAIN,
        clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
        redirectUri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        login: process.env.NEXT_PUBLIC_LOGIN
    }
};
