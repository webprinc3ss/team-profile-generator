const Manager = require('../lib/Manager.js')

describe('When an manager object is created', () => {
    let bigR;
    beforeEach(() => {
        bigR = new Manager("Big Red", 9999, 'big@red.com', '702-555-1111')
    });
    test('Create an manager Object', () => {
        expect(bigR.name).toEqual(expect.any(String));
        expect(bigR.id).toEqual(expect.any(Number));
        expect(bigR.email).toBe('big@red.com');
        expect(bigR.office).toEqual(expect.any(String));
    })

    describe('When a office number is created', () => {
        let bigR;
        beforeEach(() => {
            bigR = new Manager("Big Red", 9999, 'big@red.com', '702-555-1111')
        });
        test('Get office number', () => {
            expect(bigR.getOffice()).toEqual(expect.any(String));
        })
    })

    describe('When an manager role is created', () => {
        let bigR;
        beforeEach(() => {
            bigR = new Manager("Big Red", 9999, 'big@red.com', '702-555-1111')
        });
        test('Get manager role', () => {
            expect(bigR.getRole()).toEqual(expect.stringContaining('Team Manager'));
        })
    })
})