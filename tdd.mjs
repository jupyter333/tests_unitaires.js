import {isEven} from "./utils.js";
import { expect } from 'chai';

describe('isEven function', function() {
    it('should return true when the number is even', function() {
        const result = isEven(4);
        expect(result).to.be.true;
    });

    it('should return false when the number is odd', function() {
        const result = isEven(3);
        expect(result).to.be.false;
    });
});
