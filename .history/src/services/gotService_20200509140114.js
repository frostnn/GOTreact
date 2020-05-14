export default class GotService {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }
  
    async getResourse (url) {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
  
      return await res.json();
    }
  
    getAllCharacters = () => {
      const res = this.getResourse('/characters?page=5');
      return res.map(this._transformCharacter)
    }
  
   async getCharacter(id) {
      const character = await this.getResourse(`/characters/${id}`);
      return this._transformCharacter(character);
    }

    getAllBooks = () => {
      return this.getResourse('/books/');
    }
  
    getBook = () => {
      return this.getResourse(`/books/`);
    }
  }
  
  _transformCharacter = (char) => {
        return {
          name: char.name,
          gender: char.gender,
          born: char.born,
          died: char.died,
          culture: char.culture
        }
  }
  
  _transformHouse = (house) => {
    return {
      name: house.name,
      region: house.region,
      wordls: house.wordls,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    }
}

_transformBook = (book) => {
  return {
    name: book.name,
    numberOfPages: book.numberOfPages,
    publiser: book.publiser,
    released: book.released,
  }
}