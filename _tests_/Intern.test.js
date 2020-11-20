const Intern = require('../lib/Intern.js')

describe('When an intern object is created', () => {
    let george;
    beforeEach(() => {
        george = new Intern("George O'Jungle", 1111, 'george@ojungle.com', 'U of Amazon')
    });
    test('Create an intern Object', () => {
        expect(george.name).toEqual(expect.any(String));
        expect(george.id).toEqual(expect.any(Number));
        expect(george.email).toBe('george@ojungle.com');
        expect(george.school).toBe('U of Amazon');
    })

    describe('When a school is created', () => {
        let george;
        beforeEach(() => {
            george = new Intern("George O'Jungle", 1111, 'george@ojungle.com', 'U of Amazon')
        });
        test('Get school', () => {
            expect(george.getSchool()).toEqual(expect.stringContaining('U of Amazon'));
        })
    })

    describe('When an intern role is created', () => {
        let george;
        beforeEach(() => {
            george = new Intern("George O'Jungle", 1111, 'george@ojungle.com', 'U of Amazon')
        });
        test('Get intern role', () => {
            expect(george.getRole()).toEqual(expect.stringContaining('Intern'));
        })
    })
})