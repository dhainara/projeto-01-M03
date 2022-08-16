import crypto from "crypto"

class CharactersEntity {
    constructor(character) {
        this.id = character.id ?? crypto.randomUUID();
        this.name = character.name
        this.age = character.age
    }

    validateCharacter() {
        if (!this.name || this.name > 3) {
            throw new Error("Nome precisa ser válido! Tem um novo nome com mais de 3 caracteres.")
        }
        if (!this.age) {
            throw new Error("A idade do personagem precisa ser um numero válido válido!")
        }
    }

    getCharacter() {
        return {
            id: this.id,
            name: this.name,
            age: this.age,
        }
    }
}

export default CharactersEntity