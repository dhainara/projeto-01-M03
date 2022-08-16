//character.entity serve para validar uma classe de objetos. Classe Characters por ex
import crypto from "crypto"

class AnimeEntity {
    constructor(anime) {
        this.id = anime.id ?? crypto.randomUUID();
        this.title = anime.title
        this.protagonist = anime.protagonist
        this.type = anime.type
        this.seasons = anime.seasons
        this.year = anime.year
        this.characters = anime.characters
    }

    validateAnime() {
        if (!this.title || this.title > 3) {
            throw new Error("Nome precisa ser válido! Tem um novo nome com mais de 3 caracteres.")
        }
        if (!this.protagonist) {
            throw new Error("Nome do protagonista precisa ser válido!")
        }
        if (!this.type) {
            this.type = "Série"
        }
        if (!this.seasons) {
            this.seasons = 0
        }
        if (!this.year || this.year > 1000) {
            throw new Error("Ano de lançamento precisa ser válido!")
        }
        if (!this.characters) {
            throw new Error("Personagem precisa ser válido!")
        }
    }

    getAnime() {
        return {
            id: this.id,
            title: this.title,
            protagonist: this.protagonist,
            type: this.type,
            seasons: this.seasons,
            year: this.year,
            characters: this.characters,
        }
    }
}

export default AnimeEntity