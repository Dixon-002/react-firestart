const AUTH_ERROR_CODES = {
    'auth/email-already-in-use': 'This email address is already in use. Please try another email address.',
    'auth/weak-password': 'The password is too weak. Please enter a stronger password.',
    'auth/invalid-email': 'The email address is invalid. Please check and try again.',
    'auth/user-disabled': 'This account has been disabled. Please contact support for more information.',
    'auth/user-not-found': 'No user found with this email address. Please check and try again.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-credential': 'The provided credential is invalid. Please check and try again.',
    'auth/too-many-requests': 'We have detected too many requests from your device. Please wait a while then try again.',
    // Add more Firebase auth error codes and messages as needed
    // https://firebase.google.com/docs/reference/js/auth#autherrorcodes
};

export default AUTH_ERROR_CODES;