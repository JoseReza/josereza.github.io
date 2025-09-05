// Sistema de autenticación con contraseña
class AuthSystem {
    constructor() {
        this.correctPassword = 'acceso-2025'; // Cambia esta contraseña por la que desees
        this.sessionKey = 'portfolio_authenticated';
        this.sessionDuration = 24 * 60 * 60 * 1000; // 24 horas en milisegundos
        
        this.init();
    }

    init() {
        // Verificar si ya está autenticado
        if (this.isAuthenticated()) {
            this.showContent();
            return;
        }

        // Mostrar modal de autenticación
        this.showAuthModal();
        this.setupEventListeners();
    }

    setupEventListeners() {
        const authForm = document.getElementById('authForm');
        const passwordInput = document.getElementById('passwordInput');

        authForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin();
        });

        // Permitir login con Enter
        passwordInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleLogin();
            }
        });

        // Enfocar el input al cargar
        passwordInput.focus();
    }

    handleLogin() {
        const passwordInput = document.getElementById('passwordInput');
        const errorMessage = document.getElementById('errorMessage');
        const password = passwordInput.value.trim();

        // Limpiar mensaje de error anterior
        errorMessage.textContent = '';

        if (password === this.correctPassword) {
            this.authenticate();
            this.showContent();
        } else {
            this.showError('Contraseña incorrecta. Inténtalo de nuevo.');
            passwordInput.value = '';
            passwordInput.focus();
        }
    }

    authenticate() {
        const sessionData = {
            authenticated: true,
            timestamp: Date.now()
        };
        localStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
    }

    isAuthenticated() {
        try {
            const sessionData = localStorage.getItem(this.sessionKey);
            if (!sessionData) return false;

            const parsed = JSON.parse(sessionData);
            const now = Date.now();
            
            // Verificar si la sesión ha expirado
            if (now - parsed.timestamp > this.sessionDuration) {
                localStorage.removeItem(this.sessionKey);
                return false;
            }

            return parsed.authenticated === true;
        } catch (error) {
            console.error('Error verificando autenticación:', error);
            localStorage.removeItem(this.sessionKey);
            return false;
        }
    }

    showContent() {
        const authModal = document.getElementById('authModal');
        const mainContent = document.getElementById('mainContent');
        
        authModal.style.display = 'none';
        mainContent.style.display = 'block';
    }

    showAuthModal() {
        const authModal = document.getElementById('authModal');
        authModal.style.display = 'flex';
    }

    showError(message) {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
        
        // Ocultar el mensaje después de 5 segundos
        setTimeout(() => {
            errorMessage.style.display = 'none';
        }, 5000);
    }

    // Método para cerrar sesión (opcional)
    logout() {
        localStorage.removeItem(this.sessionKey);
        location.reload();
    }
}

// Inicializar el sistema de autenticación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new AuthSystem();
});

// Función global para cerrar sesión (puedes llamarla desde cualquier lugar)
function logout() {
    localStorage.removeItem('portfolio_authenticated');
    location.reload();
}
