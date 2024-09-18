import { expect, should, assert } from 'chai';
import { isEven, isOdd, factorial } from './utils.js';

// Initialiser should
should();

describe('Fonctions Utilitaires', function() {
    before(() => console.log('Début des tests')); // avant tous les test ecrire ca
    after(() => console.log('Tests terminés')); // apres tous les test ecrire ca

    // isEven
    describe('isEven', function() { // test pour la fonction pair
        it('doit être vrai pour les nombres pairs', () => expect(isEven(4)).to.be.true);
        it('doit être faux pour les nombres impairs', () => expect(isEven(3)).to.be.false);
    });

    // isOdd
    describe('isOdd', function() { // test pour la fonction impair
        it('doit être vrai pour les nombres impairs', () => isOdd(3).should.be.true);
        it('doit être faux pour les nombres pairs', () => isOdd(4).should.be.false);
    });

    // factorial
    describe('factorial', function() { //test pour la fonction factorielle
        it('doit retourner 1 pour 0 et 1', () => {
            assert.equal(factorial(0), 1);
            assert.equal(factorial(1), 1);
        });
        it('doit retourner undefined pour les négatifs', () => assert.isUndefined(factorial(-1)));
    });
});