export class Character {
    constructor(name, level, strategy) {
        this.name = name;
        this.level = level;
        this.strategy = strategy;
    }
};

export class Team {
    constructor() {
        this.members = new Set();
    }

    add(character) {
        if (this.members.has(character)) {
            throw new Error('Character already exists in the team.');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        characters.forEach(character => {
            this.add(character);
        });
    }

    toArray() {
        return [...this.members];
    }
}