const {sum} = require('./myModule');
const {expect} = require('chai');
const {assert} = require('chai');

describe('Sum function', () => { 
    it('works', () => {
        expect(sum(1, 2)).to.equal(3);
        // or: 
        assert.equal(sum(1, 2), 3);
    });
})