// Auto-login script for testing
function autoLogin() {
    // Directly set login credentials in localStorage
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userEmail', 'admin@example.com');
    
    // Redirect to dashboard
    window.location.href = 'dashboard.html';
}

// Run auto-login when script is loaded
autoLogin(); 