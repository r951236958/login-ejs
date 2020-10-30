//import netlifyIdentity from 'netlify-identity-widget'
// Open the modal
//netlifyIdentity.open();

// Get the current user:
// Available after on('init') is invoked
//const user = netlifyIdentity.currentUser();

// Bind to events
const netlifyAuth = {
    isAuthenticated: false,
    user: null,
    initialize(callback) {
      window.netlifyIdentity = netlifyIdentity
      netlifyIdentity.on('init', (user) => {
        callback(user)
      })
      netlifyIdentity.init()
    },
    authenticate(callback) {
      this.isAuthenticated = true
      netlifyIdentity.open()
      netlifyIdentity.on('login', (user) => {
        this.user = user
        callback(user)
        netlifyIdentity.close()
      })
    },
    signout(callback) {
      this.isAuthenticated = false
      netlifyIdentity.logout()
      netlifyIdentity.on('logout', () => {
        this.user = null
        callback()
      })
    },
  }
//netlifyIdentity.on('init', user => console.log('init', user));
//netlifyIdentity.on('login', user => console.log('login', user));
//netlifyIdentity.on('logout', () => console.log('Logged out'));
//netlifyIdentity.on('error', err => console.error('Error', err));
//netlifyIdentity.on('open', () => console.log('Widget opened'));
//netlifyIdentity.on('close', () => console.log('Widget closed'));

// Unbind from events
//netlifyIdentity.off('login'); // to unbind all registered handlers
//netlifyIdentity.off('login', handler); // to unbind a single handler

// Close the modal
//netlifyIdentity.close();

// Log out the user
//netlifyIdentity.logout();

// Refresh the user's JWT
// Call in on('login') handler to ensure token refreshed after it expires (1hr)  
// Note: this method returns a promise.
//netlifyIdentity.refresh().then((jwt)=>console.log(jwt))

// Change language
//netlifyIdentity.setLocale('en');

//export default netlifyAuth