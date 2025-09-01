// APCA Admin Portal JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Sidebar functionality
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const mainContent = document.getElementById('main-content');
    
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                sidebar.classList.toggle('open');
                
                // Add overlay for mobile
                if (sidebar.classList.contains('open')) {
                    const overlay = document.createElement('div');
                    overlay.id = 'sidebar-overlay';
                    overlay.className = 'fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden';
                    overlay.addEventListener('click', function() {
                        sidebar.classList.remove('open');
                        overlay.remove();
                    });
                    document.body.appendChild(overlay);
                } else {
                    const overlay = document.getElementById('sidebar-overlay');
                    if (overlay) overlay.remove();
                }
            } else {
                // Desktop sidebar collapse
                if (sidebar.classList.contains('collapsed')) {
                    sidebar.classList.remove('collapsed');
                    sidebar.style.width = '256px';
                    mainContent.style.marginLeft = '256px';
                    
                    // Show text
                    const sidebarTexts = document.querySelectorAll('.sidebar-text');
                    sidebarTexts.forEach(text => text.style.display = 'block');
                } else {
                    sidebar.classList.add('collapsed');
                    sidebar.style.width = '64px';
                    mainContent.style.marginLeft = '64px';
                    
                    // Hide text
                    const sidebarTexts = document.querySelectorAll('.sidebar-text');
                    sidebarTexts.forEach(text => text.style.display = 'none');
                }
            }
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 1024) {
            sidebar.classList.remove('open');
            const overlay = document.getElementById('sidebar-overlay');
            if (overlay) overlay.remove();
            
            // Reset desktop sidebar
            if (!sidebar.classList.contains('collapsed')) {
                sidebar.style.width = '256px';
                mainContent.style.marginLeft = '256px';
                const sidebarTexts = document.querySelectorAll('.sidebar-text');
                sidebarTexts.forEach(text => text.style.display = 'block');
            }
        } else {
            // Mobile reset
            sidebar.style.width = '';
            mainContent.style.marginLeft = '';
        }
    });

    // Universal search functionality
    const searchBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = searchInput?.value || '';
            showNotification(`Searching for: ${query || 'all items'}`, 'info');
        });
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchBtn?.click();
            }
        });
    }

    // Universal notification button
    const notificationBtn = document.getElementById('notification-btn');
    if (notificationBtn) {
        notificationBtn.addEventListener('click', function() {
            showNotificationPopup();
        });
    }

    // Show notification popup
    function showNotificationPopup() {
        const popup = document.getElementById('notification-popup');
        if (popup) {
            popup.classList.remove('hidden');
        }
    }

    // Close notification popup
    const closeNotificationPopup = document.getElementById('close-notification-popup');
    if (closeNotificationPopup) {
        closeNotificationPopup.addEventListener('click', function() {
            document.getElementById('notification-popup').classList.add('hidden');
        });
    }

    // Members page functionality
    window.showAddMember = function() {
        document.getElementById('members-list-section').classList.add('hidden');
        document.getElementById('add-member-section').classList.remove('hidden');
    }

    window.showMembersList = function() {
        document.getElementById('add-member-section').classList.add('hidden');
        document.getElementById('members-list-section').classList.remove('hidden');
    }

    // Check URL parameters for members page
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('action') === 'add') {
        showAddMember();
    }

    // Events page functionality
    window.openCreateEventDialog = function() {
        const eventForm = document.getElementById('event-form');
        if (eventForm) {
            eventForm.classList.remove('hidden');
        }
    }

    // Check URL parameters for events page
    if (urlParams.get('action') === 'create') {
        openCreateEventDialog();
    }

    // Event form close functionality
    const closeEventFormBtn = document.getElementById('close-form-btn');
    const cancelEventFormBtn = document.getElementById('cancel-form-btn');
    
    if (closeEventFormBtn) {
        closeEventFormBtn.addEventListener('click', function() {
            document.getElementById('event-form').classList.add('hidden');
        });
    }
    
    if (cancelEventFormBtn) {
        cancelEventFormBtn.addEventListener('click', function() {
            document.getElementById('event-form').classList.add('hidden');
        });
    }

    // Create event button
    const createEventBtn = document.getElementById('create-event-btn');
    if (createEventBtn) {
        createEventBtn.addEventListener('click', openCreateEventDialog);
    }

    // Search functionality for members page
    const searchInput = document.getElementById('search-members');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const rows = document.querySelectorAll('tbody tr');
            
            rows.forEach(row => {
                const memberName = row.querySelector('td:nth-child(2) p')?.textContent.toLowerCase();
                const memberEmail = row.querySelector('td:nth-child(3) p')?.textContent.toLowerCase();
                
                if (memberName?.includes(searchTerm) || memberEmail?.includes(searchTerm)) {
                    row.style.display = '';
                } else {
                    row.style.display = 'none';
                }
            });
        });
    }
    
    // Quick action buttons
    const quickActionButtons = document.querySelectorAll('[data-action]');
    quickActionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            showNotification(`${action} functionality would be implemented here`);
        });
    });
    
    // Table row actions
    const actionButtons = document.querySelectorAll('button[title]');
    actionButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const action = this.getAttribute('title');
            const row = this.closest('tr');
            const memberName = row.querySelector('td:nth-child(2) p')?.textContent;
            
            if (memberName) {
                showNotification(`${action} ${memberName} - functionality would be implemented here`);
            } else {
                showNotification(`${action} - functionality would be implemented here`);
            }
        });
    });
    
    // Checkbox functionality
    const selectAllCheckbox = document.querySelector('thead input[type="checkbox"]');
    const rowCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    
    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener('change', function() {
            rowCheckboxes.forEach(checkbox => {
                checkbox.checked = this.checked;
            });
        });
    }
    
    // Update select all checkbox based on individual selections
    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCount = document.querySelectorAll('tbody input[type="checkbox"]:checked').length;
            if (selectAllCheckbox) {
                selectAllCheckbox.checked = checkedCount === rowCheckboxes.length;
                selectAllCheckbox.indeterminate = checkedCount > 0 && checkedCount < rowCheckboxes.length;
            }
        });
    });
    
    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification fixed top-4 right-4 px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300`;
        
        switch (type) {
            case 'success':
                notification.className += ' bg-green-500 text-white';
                break;
            case 'error':
                notification.className += ' bg-red-500 text-white';
                break;
            case 'warning':
                notification.className += ' bg-yellow-500 text-black';
                break;
            default:
                notification.className += ' bg-blue-500 text-white';
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
    
    // Form validation (if forms exist)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Form submission functionality would be implemented here', 'success');
        });
    });
    
    // Add smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize tooltips (simple implementation)
    const tooltipElements = document.querySelectorAll('[title]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const title = this.getAttribute('title');
            if (title) {
                const tooltip = document.createElement('div');
                tooltip.className = 'fixed bg-gray-900 text-white px-2 py-1 text-sm rounded shadow-lg z-50 pointer-events-none';
                tooltip.textContent = title;
                tooltip.id = 'tooltip';
                
                document.body.appendChild(tooltip);
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
                tooltip.style.top = rect.top - tooltip.offsetHeight - 5 + 'px';
                
                // Remove title to prevent browser tooltip
                this.setAttribute('data-title', title);
                this.removeAttribute('title');
            }
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.getElementById('tooltip');
            if (tooltip) tooltip.remove();
            
            // Restore title
            const dataTitle = this.getAttribute('data-title');
            if (dataTitle) {
                this.setAttribute('title', dataTitle);
                this.removeAttribute('data-title');
            }
        });
    });

    // Universal user dropdown functionality
    const userMenuBtn = document.getElementById('user-menu-btn');
    const userDropdown = document.getElementById('user-dropdown');
    
    if (userMenuBtn && userDropdown) {
        userMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('hidden');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (userDropdown && !userDropdown.contains(event.target) && !userMenuBtn?.contains(event.target)) {
            userDropdown.classList.add('hidden');
        }
    });

    // Advertisement page functionality
    const createAdBtn = document.getElementById('create-ad-btn');
    const adForm = document.getElementById('ad-form');
    const closeAdFormBtn = document.getElementById('close-ad-form-btn');
    const cancelAdFormBtn = document.getElementById('cancel-ad-form-btn');

    if (createAdBtn && adForm) {
        createAdBtn.addEventListener('click', function() {
            adForm.classList.remove('hidden');
        });
    }

    if (closeAdFormBtn && adForm) {
        closeAdFormBtn.addEventListener('click', function() {
            adForm.classList.add('hidden');
        });
    }

    if (cancelAdFormBtn && adForm) {
        cancelAdFormBtn.addEventListener('click', function() {
            adForm.classList.add('hidden');
        });
    }

    // Newsletter page functionality
    const uploadNewsletterBtn = document.getElementById('upload-newsletter-btn');
    const newsletterForm = document.getElementById('newsletter-form');
    const closeNewsletterFormBtn = document.getElementById('close-newsletter-form-btn');
    const cancelNewsletterFormBtn = document.getElementById('cancel-newsletter-form-btn');

    if (uploadNewsletterBtn && newsletterForm) {
        uploadNewsletterBtn.addEventListener('click', function() {
            newsletterForm.classList.remove('hidden');
        });
    }

    if (closeNewsletterFormBtn && newsletterForm) {
        closeNewsletterFormBtn.addEventListener('click', function() {
            newsletterForm.classList.add('hidden');
        });
    }

    if (cancelNewsletterFormBtn && newsletterForm) {
        cancelNewsletterFormBtn.addEventListener('click', function() {
            newsletterForm.classList.add('hidden');
        });
    }

    // Matrimony profile form functionality
    const createProfileBtn = document.getElementById('create-profile-btn');
    const profileForm = document.getElementById('profile-form');
    const closeProfileFormBtn = document.getElementById('close-profile-form-btn');

    if (createProfileBtn && profileForm) {
        createProfileBtn.addEventListener('click', function() {
            profileForm.classList.remove('hidden');
        });
    }

    if (closeProfileFormBtn && profileForm) {
        closeProfileFormBtn.addEventListener('click', function() {
            profileForm.classList.add('hidden');
        });
    }
});