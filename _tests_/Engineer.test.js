const Engineer = require('../lib/Engineer.js')

describe('When an engineer object is created', () => {
    let sammy;
    beforeEach(() => {
        sammy = new Engineer('Sammy Sossa', 2468, 'sam@samster.com', 'sammysgit')
    });
    test('Create an engineer Object', () => {
        expect(sammy.name).toEqual(expect.any(String));
        expect(sammy.id).toEqual(expect.any(Number));
        expect(sammy.email).toBe('sam@samster.com');
        expect(sammy.github).toBe('sammysgit');
    })

    describe('When github is created', () => {
        let sammy;
        beforeEach(() => {
            sammy = new Engineer('Sammy Sossa', 2468, 'sam@samster.com', 'sammysgit')
        });
        test('Get engineer github', () => {
            expect(sammy.getGithub()).toEqual(expect.stringContaining('sammysgit'));
        })
    })

    describe('When an engineer role is created', () => {
        let sammy;
        beforeEach(() => {
            sammy = new Engineer('Sammy Sossa', 2468, 'sam@samster.com', 'sammysgit')
        });
        test('Get engineer role', () => {
            expect(sammy.getRole()).toEqual(expect.stringContaining('Engineer'));
        })
    })
})



