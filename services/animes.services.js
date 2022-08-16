import animes from "../mocks/animes.js"
import AnimeEntity from "../entities/anime.entity.js"
import CharactersEntity from "../entities/character.entity.js"

function findAllAnimes() {
    return animes
}

function findAnimeById(id) {
    const anime = animes.find((anime) =>anime.id ==id)

    return anime
}

function createAnime(anime) {
    const newAnime = new AnimeEntity(anime)

    if (!anime.characters) {
        throw new Error("Personagens precisam ser informados!")
    }

    const newCharacters = []

    anime.characters.map((character) => {
        const newCharacter = new CharactersEntity(character)
        newCharacters.push(newCharacter)
    })

    const newAnimeCompleted = {
        ...newAnime.getAnime(),
        characters: newCharacters,
    }

    anime.push(newAnimeCompleted)
    return newAnime
}

function updateAnime(anime) {
    const updatedAnime = new AnimeEntity(anime)
    updatedAnime.validateAnime()
    if (!anime.characters) {
        throw new Error("Personagens precisam ser informados!")
    }

    const updatedCharacters = []
    anime.characters.map((character) => {
        const updatedCharacter = new CharactersEntity(character)
        updatedCharacter.validateCharacter()
        updatedCharacters.push(updatedCharacter.getCharacter())
    })

    const updatedAnimeCompleted = {
        ...updatedAnime.getAnime(),
        characters: updatedCharacters,
    }

    anime.map((eachAnime, index) => {
        if (eachAnime.id === updatedAnime.id) {
            animes.splice(index, 1, updatedAnime)
        }
    })
    
    return updatedAnime
}

function deleteAnime(id) {
    const animeIndex = animes.findIndex((element => element.id == id))
    animes.splice(animeIndex, 1)
}

export const animesService=  {findAllAnimes,
    findAnimeById,
    createAnime,
    updateAnime,
    deleteAnime
}