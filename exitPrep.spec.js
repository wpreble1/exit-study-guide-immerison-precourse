/* global chai sinon shuffle replaceKeysInObj doctorsReduced */
/* global doctorsFilteredAndMapped doctorsReduced doctors */

/* eslint no-global-assign: 0 */

'use strict';
mocha.setup('bdd');

const assert = window.assert = chai.assert;
const expect = window.expect = chai.expect;
const should = window.should = chai.should();

describe('1) pureShuffle', () => {

    it('should not modify the original object', function () {
        const numbers = [4, 5, 6];
        const shuffled = pureShuffle(numbers).sort();

        expect(shuffled).to.not.equal(numbers);
        expect(numbers).to.eql([4, 5, 6]);
    });

    it('should have the same elements as the original object', function () {
        const numbers = [4, 5, 6];
        const shuffled = pureShuffle(numbers).sort();

        expect(shuffled).to.eql([4, 5, 6]);
    });

    it('should not be in the same order as the original object', function () {
        const numbers = [4, 5, 6, 7, 8, 9, 10];
        const shuffled = pureShuffle(numbers);

        // This test will fail 1/9! times
        expect(shuffled).to.not.eql([4, 5, 6, 7, 8, 9, 10]);
    });

});
describe('2) dirtyShuffle', () => {

    it('should have the same elements as the original object', function () {
        const numbers = [4, 5, 6];
        const shuffled = dirtyShuffle(numbers).sort();

        expect(shuffled).to.eql([4, 5, 6]);
    });

    it('should not be in the same order as the original object', function () {
        const numbers = [4, 5, 6, 7, 8, 9, 10];
        const shuffled = dirtyShuffle(numbers);

        // This test will fail 1/9! times
        expect(shuffled).to.not.eql([4, 5, 6, 7, 8, 9, 10]);
    });

});

describe('3) Update object', function() {
    
    const input = {
        banana: 'yellow',
        apple: 'red',
        carrot: 'purple', 
        spinach: 'green',
    },
    input2 = {
        shoe: 'leather',
        sweater: 'cashmere blend',
        pants: 'cotton twill',
        bag: 'canvas',
        spinach: 'stain',
    };

    const output = update(input, input2);

    it('should return an object', function (){
        expect(typeof (update(input, input2))).to.equal('object');
    });

    it('should return an object with the appropriate key/value pairs', function (){
        expect(output.hasOwnProperty('pants')).to.equal(true);
        expect(output.hasOwnProperty('apple')).to.equal(true);
        expect(output.spinach).to.equal('stain');
    } )
});


describe('4) Default object values', function() {
    
    const input = {
        banana: 'yellow',
        apple: 'red',
        carrot: 'purple', 
        spinach: 'green',
    },
    input2 = {
        shoe: 'leather',
        sweater: 'cashmere blend',
        pants: 'cotton twill',
        bag: 'canvas',
        spinach: 'stain',
    };

    const output = defaults(input, input2);

    it('should return an object', function (){
        expect(typeof (defaults(input, input2))).to.equal('object');
    });

    it('should return an object with the appropriate key/value pairs', function (){
        expect(output.hasOwnProperty('pants')).to.equal(true);
        expect(output.hasOwnProperty('apple')).to.equal(true);
        expect(output.spinach).to.equal('green');
    } )
});

describe('5) Replace values in object', function () {

    var tallyKeys = function (obj) {
        let count = 0;
        for (const k in obj) {
            if (typeof obj[k] === 'object') {
                count += tallyKeys(obj[k]);
            }
            count++;
        }
        return count;
    };

    it('should return an object', function () {
        const input = {
            'echo': { 'xray': 'yankee' },
            'tango': {
                'romeo': { 'echo': 'romeo' },
                'papa': { 'yankee': 'romeo' }
            },
            'yankee': 'echo'
        };
        expect(typeof (replaceValuesInObj(input, 'romeo', 'alpha'))).to.equal('object');
        expect(typeof (replaceValuesInObj(input, 'echo', 0))).to.equal('object');
    });

    it('should return object containing replaced values', function () {
        const input = {
            'romeo': { 'xray': 'yankee' },
            'tango': {
                'romeo': { 'echo': 'romeo' },
                'papa': { 'yankee': 'romeo' }
            },
            'yankee': 'romeo'
        };
        const output = replaceValuesInObj(input, 'romeo', 'foxtrot');

        expect(output.romeo.xray).to.equal('yankee');
        expect(output.tango.romeo.echo).to.equal('foxtrot');
        expect(output.tango.romeo.foxtrot).to.equal(undefined);
        expect(output.tango.papa.yankee).to.equal('foxtrot');
        expect(output.yankee).to.equal('foxtrot');

        expect(Object.values(output).includes('romeo')).to.equal(false);

        expect(output.tango.hasOwnProperty('romeo')).to.equal(true);
        expect(output.tango.hasOwnProperty('papa')).to.equal(true);

        expect(output.tango.romeo.hasOwnProperty('echo')).to.equal(true);
        expect(output.tango.romeo.hasOwnProperty('foxtrot')).to.equal(false);
        expect(output.tango.papa.hasOwnProperty('yankee')).to.equal(true);
    });

    it('should return object with same number of keys', function () {
        const input = {
            'echo': { 'xray': 'yankee' },
            'tango': {
                'romeo': { 'echo': 'romeo' },
                'papa': { 'yankee': 'romeo' }
            },
            'yankee': 'echo'
        };
        const output1 = replaceValuesInObj(input, 'romeo', 'foxtrot');
        const output2 = replaceValuesInObj(output1, 'romeo', 'foxtrot');
        expect(tallyKeys(input)).to.equal(8);
        expect(tallyKeys(output1)).to.equal(8);
        expect(tallyKeys(output2)).to.equal(8);
    });

    it('should use recursion by calling self', function () {
        const input = {
            'echo': { 'xray': 'yankee' },
            'tango': {
                'romeo': { 'echo': 'romeo' },
                'papa': { 'yankee': 'romeo' }
            },
            'yankee': 'echo'
        };
        const originalReplaceValuesInObj = replaceValuesInObj;
        replaceValuesInObj = sinon.spy(replaceValuesInObj);
        replaceValuesInObj(input, 'romeo', 'alpha');
        expect(replaceValuesInObj.callCount).to.be.above(1);
        replaceValuesInObj = originalReplaceValuesInObj;
    });

});

describe('6) Add keys to existing object', function () {

    it('should return an object', function () {
        const input = {
            'echo': { 'xray': 'yankee' },
            'tango': {
                'romeo': { 'echo': 'romeo' },
                'papa': { 'yankee': 'romeo' }
            },
            'yankee': 'echo'
        };
        expect(typeof (addKeysToExistingObj(input, 'romeo', 'alpha'))).to.equal('object');
        expect(typeof (addKeysToExistingObj(input, 'echo', 0))).to.equal('object');
    });

    it('should return object containing new key/value pair', function () {
        const input = {
            'romeo': { 'xray': 'yankee' },
            'tango': {
                'romeo': { 'echo': 'romeo' },
                'papa': { 'yankee': 'romeo' }
            },
            'yankee': 'romeo'
        };
        const output = addKeysToExistingObj(input, 'cheeseburger', 'fries');

        expect(output.romeo.xray).to.equal('yankee');
        expect(output.romeo.cheeseburger).to.equal('fries');
        expect(output.tango.romeo.echo).to.equal('romeo');
        expect(output.tango.romeo.cheeseburger).to.equal('fries');
        expect(output.tango.romeo.fries).to.equal(undefined);
        expect(output.tango.papa.yankee).to.equal('romeo');
        expect(output.tango.papa.cheeseburger).to.equal('fries');
        expect(output.yankee).to.equal('romeo');
        expect(output.cheeseburger).to.equal('fries');

        expect(Object.values(output).includes('fries')).to.equal(true);
        expect(Object.keys(output).includes('cheeseburger')).to.equal(true);

        expect(output.tango.hasOwnProperty('romeo')).to.equal(true);
        expect(output.tango.hasOwnProperty('papa')).to.equal(true);

        expect(output.tango.romeo.hasOwnProperty('echo')).to.equal(true);
        expect(output.tango.romeo.hasOwnProperty('foxtrot')).to.equal(false);
        expect(output.tango.papa.hasOwnProperty('yankee')).to.equal(true);
    });


    it('should use recursion by calling self', function () {
        const input = {
            'echo': { 'xray': 'yankee' },
            'tango': {
                'romeo': { 'echo': 'romeo' },
                'papa': { 'yankee': 'romeo' }
            },
            'yankee': 'echo'
        };
        const originalAddKeysToExistingObj = addKeysToExistingObj;
        addKeysToExistingObj = sinon.spy(addKeysToExistingObj);
        addKeysToExistingObj(input, 'romeo', 'alpha');
        expect(addKeysToExistingObj.callCount).to.be.above(1);
        addKeysToExistingObj = originalAddKeysToExistingObj;
    });

});




describe('7) comediansFilteredAndMapped()', () => {
    const tComedians = [
        { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
        { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
        { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
        { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
        { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
        { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
        { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
        { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
        { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
        { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
    ];

    const tResult = [
            {
                appearanceNumber: '#8',
                name: 'Sterling K. Brown',
                seasonsActive: 6
            },
            {
                appearanceNumber: '#9',
                name: 'Jay Pharoah',
                seasonsActive: 7
            },
            {
                appearanceNumber: '#10',
                name: 'Leslie Jones',
                seasonsActive: 5
            }
        ]

    before(function () {
        sinon.spy(Array.prototype, 'filter');
        sinon.spy(Array.prototype, 'map');
    });

    afterEach(function () {
        Array.prototype.filter.reset();
        Array.prototype.map.reset();
    });

    after(function () {
        Array.prototype.filter.restore();
        Array.prototype.map.restore();
    });

    it('should exist', () => {
        comediansFilteredAndMapped.should.be.an.instanceOf(Function);
        should.exist(comedians);
    });

    it('should use the native filter', function () {
        comediansFilteredAndMapped(tComedians);
        Array.prototype.filter.called.should.be.true;
        Array.prototype.map.called.should.be.true;
    });

    it('should return an array', () =>
        comediansFilteredAndMapped(tComedians).should.be.an('array'));

    it('should return the proper array', () =>
        comediansFilteredAndMapped(tComedians).should.eql(tResult));

});

describe('8) comediansPluckedAndFiltered()', () => {
    const tComedians = [
        { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
        { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
        { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
        { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
        { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
        { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
        { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
        { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
        { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
        { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
    ];

    const tResult = ['Kenan Thompson', 'Sterling K. Brown'];

    before(function () {
        sinon.spy(Array.prototype, 'filter');
        sinon.spy(window, 'pluck');
    });

    afterEach(function () {
        Array.prototype.filter.reset();
        window.pluck.reset();
    });

    after(function () {
        Array.prototype.filter.restore();
        window.pluck.restore();
    });

    it('should exist', () => {
        comediansPluckedAndFiltered.should.be.an.instanceOf(Function);
        should.exist(comedians);
    });

    it('should use the native filter', function () {
        comediansPluckedAndFiltered(tComedians);
        Array.prototype.filter.called.should.be.true;
        window.pluck.called.should.be.true;
    });

    it('should return an array', () =>
        comediansPluckedAndFiltered(tComedians).should.be.an('array'));

    it('should return the proper array', () =>
        comediansPluckedAndFiltered(tComedians).should.eql(tResult));

});

describe('9) comediansReduced1()', () => {
    const tComedians = [
        { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
        { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
        { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
        { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
        { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
        { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
        { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
        { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
        { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
        { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
    ];

    const tResult = [
        {
            appearanceNumber: '#8',
            name: 'Sterling K. Brown',
            seasonsActive: 6
        },
        {
            appearanceNumber: '#9',
            name: 'Jay Pharoah',
            seasonsActive: 7
        },
        {
            appearanceNumber: '#10',
            name: 'Leslie Jones',
            seasonsActive: 5
        }
    ];
    

    before(() => sinon.spy(Array.prototype, 'reduce'));

    afterEach(() => Array.prototype.reduce.reset());

    after(() => Array.prototype.reduce.restore());

    it('should exist', () => {
        comediansReduced1.should.be.an.instanceOf(Function);
        should.exist(comedians);
    });

    it('should use the native .reduce()', () => {
        comediansReduced1(tComedians);
        Array.prototype.reduce.called.should.be.true;
    });

    it('should return an array', function () {
        comediansReduced1(tComedians).should.be.an('array');
    });

    it('should return the proper array', function () {
        comediansReduced1(tComedians).should.eql(tResult);
    });

});

describe('10) comediansReduced2()', () => {
    const tComedians = [
        { number: 1, actor: "Eddie Murphy", begin: 1980, end: 1984 },
        { number: 2, actor: "Michael Che", begin: 1984, end: 1986 },
        { number: 3, actor: "Damon Wayans", begin: 1985, end: 1986 },
        { number: 4, actor: "Tim Meadows", begin: 1991, end: 2000 },
        { number: 5, actor: "Tracy Morgan", begin: 1996, end: 2003 },
        { number: 6, actor: "Maya Rudolph", begin: 2000, end: 2007 },
        { number: 7, actor: "Kenan Thompson", begin: 2003, end: 2018 },
        { number: 8, actor: "Sterling K. Brown", begin: 2005, end: 2010 },
        { number: 9, actor: "Jay Pharoah", begin: 2010, end: 2016 },
        { number: 10, actor: "Leslie Jones", begin: 2014, end: 2018 },
    ];

    const tResult = ['Kenan Thompson', 'Sterling K. Brown'];

    before(() => sinon.spy(Array.prototype, 'reduce'));

    afterEach(() => Array.prototype.reduce.reset());

    after(() => Array.prototype.reduce.restore());

    it('should exist', () => {
        comediansReduced2.should.be.an.instanceOf(Function);
        should.exist(comedians);
    });

    it('should use the native .reduce()', () => {
        comediansReduced2(tComedians);
        Array.prototype.reduce.called.should.be.true;
    });

    it('should return an array', function () {
        comediansReduced2(tComedians).should.be.an('array');
    });

    it('should return the proper array', function () {
        comediansReduced2(tComedians).should.eql(tResult);
    });

});