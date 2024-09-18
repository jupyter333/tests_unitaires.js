import { expect, should } from 'chai'; // Pas besoin de redeclarer 'expect' et 'should'

should(); // Initialiser 'should' pour l'utiliser dans les tests

describe('Question Question', () => {
    it('expect method', () => {
        expect(5).to.be.a('number');
        expect(5).to.be.above(3);
    })
    it('should method', () => {
        (5).should.be.a('number');
        (5).should.be.above(3);
    })
});
