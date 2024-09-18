import { countLength } from './countLength.js';
import { expect } from 'chai'; // Utilisation de import pour chai

// Début de la suite de tests Mocha
describe('Voici des test simples', function() {

    it('devrait retourner la longueur correcte pour une chaîne donnée', function() {

        // Chaine de test
        let myString = "Hello, world!";
        let stringLength = countLength(myString);

        // Assertion : vérifier si la longueur calculée est égale à la longueur réelle
        expect(stringLength).to.equal(myString.length);
    });
    it('Voici un dummy test ', function(){
        let a = 2;
        let b = 3;
        expect(a+b).equal(5)
    });
        // On pourrait continuer à faire de it dans ce block
});
