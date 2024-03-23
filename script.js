// Function to open login popup
function openPopup() {
    document.getElementById('loginPopup').style.display = 'block';
  }
  
  // Function to close login popup
  function closePopup() {
    document.getElementById('loginPopup').style.display = 'none';
  }
  
  // Function to handle login with Google
  function loginWithGoogle() {
    // Add your Google login logic here
    console.log('Login with Google');
  }
  
  // Function to handle creating a new profile
  function createProfile() {
    // Add your profile creation logic here
    console.log('Create Profile');
  }
  
  // Event listener for login button click
  document.getElementById('loginBtn').addEventListener('click', openPopup);
  
  // Event listener for login form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now
    // Add your login logic here
    console.log('Login form submitted');
  });
  