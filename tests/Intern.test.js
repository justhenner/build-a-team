const Intern = require('../lib/intern');

describe('Intern', () => {
    it('should create an Intern object', () => {
        const intern = new Intern('Cheryl Lee', 999, 'cheryl@berkeley.edu', 'UC Berkeley');
        expect(intern.school).toEqual(exepct.any(string));
    });
    describe('getSchool', () => {
        it('should return school', () => {
            const intern = new Intern('Cheryl Lee', 999, 'cheryl@berkeley.edu', 'UC Berkeley');
            expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()))
        });
    });
    describe('getRole', () => {
        it('should return Interns role', () => {
            const intern = new Intern('Cheryl Lee', 999, 'cheryl@berkeley.edu', 'UC Berkeley');
            expect(intern.getRole()).toEqual('Intern');
        });
    });
});