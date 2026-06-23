// Function to show the Sign-Up Form
function showSignUpForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signUpForm').style.display = 'block';
}

// Function to show the Sign-In Form
function showSignInForm() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signUpForm').style.display = 'none';
}

// Sign In Form Submit
document.getElementById('signInForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Owner specific email/password
    if (email === 'rushikesh.pattiwar@adypu.edu.in' && password === 'Rushikesh@10') {
        alert('Owner Login Successful!');
        window.location.href = "/owner-dashboard";  // Redirect to owner dashboard
    } else {
        alert('Invalid credentials or role!');
    }
});

// Sign Up Form Submit
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const role = document.getElementById('role').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (role === 'serviceProvider') {
        const companyName = document.getElementById('companyName').value;
        const serviceType = document.getElementById('serviceType').value;
        const serviceArea = document.getElementById('serviceArea').value;
        const portfolio = document.getElementById('portfolio').value;
        console.log('Service Provider:', { email, companyName, serviceType, serviceArea, portfolio });
        alert('Service Provider Registered!');
        // Store data in the database (make API call here)

    } else if (role === 'consumer') {
        const eventPreferences = document.getElementById('eventPreferences').value;
        const interests = document.getElementById('interests').value;
        console.log('Consumer:', { email, eventPreferences, interests });
        alert('Consumer Registered!');
        // Store data in the database (make API call here)
    }
});

// Show role-specific fields based on selected role
document.getElementById('role').addEventListener('change', function() {
    const role = this.value;
    if (role === 'serviceProvider') {
        document.getElementById('serviceProviderFields').style.display = 'block';
        document.getElementById('consumerFields').style.display = 'none';
    } else if (role === 'consumer') {
        document.getElementById('serviceProviderFields').style.display = 'none';
        document.getElementById('consumerFields').style.display = 'block';
    }
});
