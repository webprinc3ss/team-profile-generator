const Employee = require('../lib/Employee.js');

describe('When an employee object is created', () => {
    let eloise;
    beforeEach(() => {
        eloise = new Employee('Eloise Madera', 8888, 'eloise@test.com')
    });
    test('Create an Employee Object', () => {
        expect(eloise.name).toEqual(expect.any(String));
        expect(eloise.name).toEqual("Eloise Madera");
        expect(eloise.id).toEqual(expect.any(Number));
        expect(eloise.email).toBe('eloise@test.com');
    })

    describe('When an employee name is created', () => {
        let eloise;
        beforeEach(() => {
            eloise = new Employee('Eloise Madera', 8888, 'eloise@test.com')
        });
        test('Get employee name', () => {
            expect(eloise.getName()).toEqual(expect.stringContaining('Eloise Madera'));
        })
    })

    describe('When an employee id is created', () => {
        let eloise;
        beforeEach(() => {
            eloise = new Employee('Eloise Madera', 8888, 'eloise@test.com')
        });
        test('Get employee id', () => {
            expect(eloise.getId()).toEqual(expect.any(String));
        })
    })

    describe('When an employee email is created', () => {
        let eloise;
        beforeEach(() => {
            eloise = new Employee('Eloise Madera', 8888, 'eloise@test.com')
        });
        test('Get employee email', () => {
            expect(eloise.getEmail()).toEqual(expect.any(String));
        })
    })

    describe('When an employee role is created', () => {
        let eloise;
        beforeEach(() => {
            eloise = new Employee('Eloise Madera', 8888, 'eloise@test.com')
        });
        test('Get employee role', () => {
            expect(eloise.getRole()).toEqual(expect.stringContaining('Employee'));
        })
    })
})

