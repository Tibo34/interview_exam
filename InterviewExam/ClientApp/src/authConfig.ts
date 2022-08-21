export const msalConfig = {
    auth: {
        clientId: "61f9278b-1d08-4848-b106-38c990d7ae70",
        authority: "https://login.microsoftonline.com/59aa4c6d-c1a6-4ff1-9c9b-fb54a2227232", 
        redirectUri: "https://localhost:44331/" 
    },
    cache: {
        cacheLocation: "sessionStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
    scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};