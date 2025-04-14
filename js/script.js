/* // Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hidden');
        
        // Toggle the SVG icons
        const menuIcon = this.querySelector('.block');
        const closeIcon = this.querySelector('.hidden');
        menuIcon.classList.toggle('block');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('block');
    });
    
    // Modal toggles
    function setupModal(modalId, triggerSelectors) {
        const modal = document.getElementById(modalId);
        const triggers = document.querySelectorAll(triggerSelectors);
        const closeButtons = modal ? modal.querySelectorAll('[data-dismiss]') : [];
        
        triggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                modal.classList.remove('hidden');
            });
        });
        
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                modal.classList.add('hidden');
            });
        });
        
        // Close when clicking outside modal content
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        }
    }
    
    setupModal('login', 'a[href="#login"]');
    setupModal('signup', 'a[href="#signup"]');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Calculator functionality
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const income = parseFloat(document.getElementById('income').value) || 0;
            const expenses = parseFloat(document.getElementById('expenses').value) || 0;
            const savingsGoal = parseFloat(document.getElementById('savings-goal').value) || 0;
            
            const monthlySavings = income - expenses;
            const savingsRate = income > 0 ? (monthlySavings / income) * 100 : 0;
            const timeToGoal = monthlySavings > 0 ? Math.ceil(savingsGoal / monthlySavings) : 0;
            
            document.getElementById('monthlySavings').textContent = `₹${monthlySavings.toLocaleString('en-IN')}`;
            document.getElementById('savingsRate').textContent = `${savingsRate.toFixed(1)}%`;
            document.getElementById('timeToGoal').textContent = `${timeToGoal} ${timeToGoal === 1 ? 'month' : 'months'}`;
            
            document.getElementById('resultsContainer').classList.remove('hidden');
        });
    }
    
    // Dashboard and analytics buttons functionality
    const exploreDashboardBtn = document.getElementById('exploreDashboardBtn');
    const viewCategoryBtn = document.getElementById('viewCategoryBtn');
    const viewTimeBtn = document.getElementById('viewTimeBtn');
    const viewProjectionsBtn = document.getElementById('viewProjectionsBtn');
    const viewForecastsBtn = document.getElementById('viewForecastsBtn');
    
    function showAlert(message) {
        alert(message);
    }
    
    if (exploreDashboardBtn) {
        exploreDashboardBtn.addEventListener('click', function() {
            showAlert("Dashboard feature will be shown here with interactive charts and financial overview.");
        });
    }
    
    if (viewCategoryBtn) {
        viewCategoryBtn.addEventListener('click', function() {
            showAlert("Category analytics will display your spending patterns by different categories.");
        });
    }
    
    if (viewTimeBtn) {
        viewTimeBtn.addEventListener('click', function() {
            showAlert("Time-based analytics will show your financial progress over different time periods.");
        });
    }
    
    if (viewProjectionsBtn) {
        viewProjectionsBtn.addEventListener('click', function() {
            showAlert("Future projections will estimate where your current financial path is taking you.");
        });
    }
    
    if (viewForecastsBtn) {
        viewForecastsBtn.addEventListener('click', function() {
            showAlert("Financial forecasts will provide AI-powered predictions based on your spending and saving patterns.");
        });
    }
});
*/

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('button[aria-controls="mobile-menu"]');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('hidden');
        
        // Toggle the SVG icons
        const menuIcon = this.querySelector('.block');
        const closeIcon = this.querySelector('.hidden');
        menuIcon.classList.toggle('block');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('block');
    });
    
    // Modal toggles
    function setupModal(modalId, triggerSelectors) {
        const modal = document.getElementById(modalId);
        const triggers = document.querySelectorAll(triggerSelectors);
        const closeButtons = modal ? modal.querySelectorAll('[data-dismiss]') : [];
        
        triggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                modal.classList.remove('hidden');
            });
        });
        
        closeButtons.forEach(button => {
 javascript
            button.addEventListener('click', function() {
                modal.classList.add('hidden');
            });
        });
        
        // Close when clicking outside modal content
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.add('hidden');
                }
            });
        }
    }
    
    setupModal('login', 'a[href="#login"]');
    setupModal('signup', 'a[href="#signup"]');
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Calculator functionality
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function() {
            const income = parseFloat(document.getElementById('income').value) || 0;
            const expenses = parseFloat(document.getElementById('expenses').value) || 0;
            const savingsGoal = parseFloat(document.getElementById('savings-goal').value) || 0;
            
            const monthlySavings = income - expenses;
            const savingsRate = income > 0 ? (monthlySavings / income) * 100 : 0;
            const timeToGoal = monthlySavings > 0 ? Math.ceil(savingsGoal / monthlySavings) : 0;
            
            document.getElementById('monthlySavings').textContent = `₹${monthlySavings.toLocaleString('en-IN')}`;
            document.getElementById('savingsRate').textContent = `${savingsRate.toFixed(1)}%`;
            document.getElementById('timeToGoal').textContent = `${timeToGoal} ${timeToGoal === 1 ? 'month' : 'months'}`;
            
            document.getElementById('resultsContainer').classList.remove('hidden');
        });
    }
    
    // Dashboard and analytics buttons functionality
    const exploreDashboardBtn = document.getElementById('exploreDashboardBtn');
    const viewCategoryBtn = document.getElementById('viewCategoryBtn');
    const viewTimeBtn = document.getElementById('viewTimeBtn');
    const viewProjectionsBtn = document.getElementById('viewProjectionsBtn');
    const viewForecastsBtn = document.getElementById('viewForecastsBtn');
    
    function showAlert(message) {
        alert(message);
    }
    
    if (exploreDashboardBtn) {
        exploreDashboardBtn.addEventListener('click', function() {
            showAlert("Dashboard feature will be shown here with interactive charts and financial overview.");
        });
    }
    
    if (viewCategoryBtn) {
        viewCategoryBtn.addEventListener('click', function() {
            showAlert("Category analytics will display your spending patterns by different categories.");
        });
    }
    
    if (viewTimeBtn) {
        viewTimeBtn.addEventListener('click', function() {
            showAlert("Time-based analytics will show your financial progress over different time periods.");
        });
    }
    
    if (viewProjectionsBtn) {
        viewProjectionsBtn.addEventListener('click', function() {
            showAlert("Future projections will estimate where your current financial path is taking you.");
        });
    }
    
    if (viewForecastsBtn) {
        viewForecastsBtn.addEventListener('click', function() {
            showAlert("Financial forecasts will provide AI-powered predictions based on your spending and saving patterns.");
        });
    }
});