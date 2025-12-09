const { validateEmail, validateName, validateMessage } = require('../js/app');

describe('validateEmail', () => {
    test('devrait accepter un email valide', () => {
        expect(validateEmail('test@example.com')).toBe(true);
        expect(validateEmail('user.name@domain.fr')).toBe(true);
        expect(validateEmail('user+tag@example.org')).toBe(true);
    });

    test('devrait rejeter un email invalide', () => {
        expect(validateEmail('')).toBe(false);
        expect(validateEmail('invalid')).toBe(false);
        expect(validateEmail('test@')).toBe(false);
        expect(validateEmail('@example.com')).toBe(false);
        expect(validateEmail('test @example.com')).toBe(false);
    });
});

describe('validateName', () => {
    test('devrait accepter un nom valide', () => {
        expect(validateName('Jean')).toBe(true);
        expect(validateName('Marie-Claire')).toBe(true);
        expect(validateName('AB')).toBe(true);
    });

    test('devrait rejeter un nom invalide', () => {
        expect(validateName('')).toBe(false);
        expect(validateName('A')).toBe(false);
        expect(validateName('   ')).toBe(false);
        expect(validateName(null)).toBe(false);
        expect(validateName(undefined)).toBe(false);
    });
});

describe('validateMessage', () => {
    test('devrait accepter un message valide', () => {
        expect(validateMessage('Ceci est un message valide')).toBe(true);
        expect(validateMessage('1234567890')).toBe(true);
    });

    test('devrait rejeter un message invalide', () => {
        expect(validateMessage('')).toBe(false);
        expect(validateMessage('Court')).toBe(false);
        expect(validateMessage('123456789')).toBe(false); // 9 caractères
        expect(validateMessage(null)).toBe(false);
        expect(validateMessage(undefined)).toBe(false);
    });
});
