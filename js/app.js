// Application JavaScript

/**
 * Valide un email
 * @param {string} email 
 * @returns {boolean}
 */
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Valide un nom (non vide, au moins 2 caractères)
 * @param {string} name 
 * @returns {boolean}
 */
function validateName(name) {
    return name && name.trim().length >= 2;
}

/**
 * Valide un message (non vide, au moins 10 caractères)
 * @param {string} message 
 * @returns {boolean}
 */
function validateMessage(message) {
    return message && message.trim().length >= 10;
}

/**
 * Affiche une notification
 * @param {string} message 
 * @param {string} type - 'success' ou 'error'
 */
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        color: white;
        background-color: ${type === 'success' ? '#10b981' : '#ef4444'};
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', () => {
    // Gestion du formulaire de contact
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Validation
            if (!validateName(name)) {
                showNotification('Le nom doit contenir au moins 2 caractères', 'error');
                return;
            }
            
            if (!validateEmail(email)) {
                showNotification('Email invalide', 'error');
                return;
            }
            
            if (!validateMessage(message)) {
                showNotification('Le message doit contenir au moins 10 caractères', 'error');
                return;
            }
            
            // Succès
            showNotification('Message envoyé avec succès !', 'success');
            form.reset();
        });
    }
    
    // Bouton découvrir - scroll vers la section À propos
    const btnAction = document.getElementById('btn-action');
    if (btnAction) {
        btnAction.addEventListener('click', () => {
            document.getElementById('apropos').scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }
});

// Export pour les tests (Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { validateEmail, validateName, validateMessage };
}
