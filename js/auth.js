// Authentication management
const Auth = {
    // Check if user is authenticated
    checkAuth: function() {
        // Simple check - no need for complex path checking
        if (!this.isLoggedIn() && !window.location.pathname.includes('login.html')) {
            window.location.href = 'login.html';
        }
    },
    
    // Function to handle login
    login: function(email, password, rememberMe) {
        // For demo purposes, accept admin credentials
        if (email === 'admin@example.com' && password === 'admin123') {
            // Store login status
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);
            
            if (rememberMe) {
                localStorage.setItem('rememberedEmail', email);
                localStorage.setItem('rememberedPassword', password);
            } else {
                localStorage.removeItem('rememberedEmail');
                localStorage.removeItem('rememberedPassword');
            }
            
            return true;
        }
        return false;
    },
    
    // Function to handle logout
    logout: function() {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('rememberedEmail');
        localStorage.removeItem('rememberedPassword');
        window.location.href = 'login.html';
    },
    
    // Check if user is logged in
    isLoggedIn: function() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }
};

// Make Auth available globally
window.Auth = Auth; 