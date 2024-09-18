import sinon from 'sinon';
import { isEven, isOdd } from './utils.js';
import { expect } from 'chai';

describe('Test avec Spy et Stub', function() {
    it('espionne et compte les appels de isEven', function() {
        const spy = sinon.spy(isEven);
        spy(4); spy(6); // isEven est appele deux fois avec parametres 4 et 6.

        expect(spy.calledTwice).to.be.true; // est-ce que le espion est appelé deux fois?
        expect(spy.calledWith(4)).to.be.true; // est-ce qu'il a été appelé avec 4
        expect(spy.calledWith(6)).to.be.true; // est-ce qu'il a été appelé avec 4
    });

    it('stub isEven pour toujours retourner vrai', function() {
        const stub = sinon.stub().returns(true); // on set stub to return vrai toujours
        expect(stub(5)).to.be.true;  //return toujours vrai
        expect(stub.calledOnce).to.be.true; // est-ce que le stub est appelé au moins une fois
    });

    it('stub isOdd pour toujours retourner faux', function() {
        const stub = sinon.stub().returns(false);
        expect(stub(7)).to.be.false;
        expect(stub.calledOnce).to.be.true;
    });
});
