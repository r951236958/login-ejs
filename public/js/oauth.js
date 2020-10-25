var GoogleAuth;
var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';

function handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('client:auth2', initClient);
}

function initClient() {
    // In practice, your app can retrieve one or more discovery documents.
    var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

    // Initialize the gapi.client object, which app uses to make API requests.
    // Get API key and client ID from API Console.
    // 'scope' field specifies space-delimited list of access scopes.
    gapi.client.init({
        'apiKey': 'AIzaSyDnKchHmT4vUSJWAHNvWWHIYkgpjqwmmkc',
        'clientId': '466631687987-8a8fqfu18nt5b32cjqp5ps72d2fn8frj.apps.googleusercontent.com',
        'discoveryDocs': [discoveryUrl],
        'scope': SCOPE
    }).then(function () {
        GoogleAuth = gapi.auth2.getAuthInstance();

        // Listen for sign-in state changes.
        GoogleAuth.isSignedIn.listen(updateSigninStatus);

        // Handle initial sign-in state. (Determine if user is already signed in.)
        var user = GoogleAuth.currentUser.get();
        setSigninStatus();

        // Call handleAuthClick function when user clicks on
        // "Sign In/Authorize" button.
        $('#sign-in-or-out-button').click(function () {
            handleAuthClick();
        });
        $('#revoke-access-button').click(function () {
            revokeAccess();
        });

        GoogleAuth.attachClickHandler('sign-in-or-out-button', {}, onSuccess, onFailure);
    });
}

function handleAuthClick() {
    if (GoogleAuth.isSignedIn.get()) {
        // User is authorized and has clicked "Sign out" button.
        GoogleAuth.signOut();
    } else {
        // User is not signed in. Start Google auth flow.
        GoogleAuth.signIn();
    }
}

function revokeAccess() {
    GoogleAuth.disconnect();
}


function setSigninStatus() {
    var user = GoogleAuth.currentUser.get();
    var isAuthorized = user.hasGrantedScopes(SCOPE);

    if (isAuthorized) {
        var userName = user.getBasicProfile().getName();
        var userEmail = user.getBasicProfile().getEmail();
        $('#sign-in-or-out-button > .buttonText').text('Sign out');
        $('#revoke-access-button').css('display', 'inline-block');
        $('#user-profile').css('display', 'block');
        $('#user-name').text('Name:' + userName);
        $('#user-email').text('Email:' + userEmail);
        $('#auth-status').html('You are currently signed in and have granted ' +
            'access to this app.');

    } else {
        $('#sign-in-or-out-button > .buttonText').text('Sign In/Authorize');
        $('#revoke-access-button').css('display', 'none');
        $('#user-profile').css('display', 'none');
        $('#auth-status').html('You have not authorized this app or you are ' +
            'signed out.');
    }
}

var onSuccess = function (user) {
    console.log('Signed in as ' + user.getBasicProfile().getName());
};

var onFailure = function (error) {
    console.log(error);
};

function updateSigninStatus() {
    setSigninStatus();
}