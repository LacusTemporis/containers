import { Character, Team } from "./container";

const { TestScheduler } = require('jest');

describe('Team', () => {
    let team;
    let character1, character2, character3;

    beforeEach(() => {
        team = new Team();
        character1 = new Character('Aragorn', 20, 'Attack');
        character2 = new Character('Gandalf', 25, 'Support');
        character3 = new Character('Legolas', 22, 'Ranged');
    });

    test('adding a single character to the team', () => {
        team.add(character1);
        expect(team.toArray()).toEqual([character1]);
    });

    test('adding multiple characters to the team', () => {
        team.addAll(character1, character2, character3);
        expect(team.toArray()).toEqual([character1, character2, character3]);
    });

    test('adding duplicate character should throw an error', () => {
        team.add(character1);
        expect(() => {
            team.add(character1);
        }).toThrow('Character already exists in the team.');
    });
});