export default class GotService {

  constructor() {
    this._apiBase = 'https://www.anapioficeandfire.com/api';
  }
  
     getResourse = async (url) => {
      const res = await fetch(`${this._apiBase}${url}`);
  
      if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }
  
      return await res.json();
    }
  
   getAllCharacters = async () => {
      const res = await this.getResourse('/characters?page=5');
      return res.map(this._transformCharacter)
    }
  
   getCharacter = async (id) => {
      const character = await this.getResourse(`/characters/${id}`);
      return this._transformCharacter(character);
    }

    getAllBooks = async () => {
      const res = await this.getResourse('/books/');
      return res.map(this._transformBook)
    }
  
    getBook = async (id) => {
      const book = await this.getResourse(`/books/${id}/`);
      return this._transformBook(book)
    }

    getAllHouses = async () => {
      const res = await this.getResourse(`/Houses/`);
      return res.map(this._transformHouse)
    }
    getHouses = async (id) => {
      const res = await this.getResourse(`/Houses/`);
      return this._transformHouse(res)
    }
    _transformCharacter(char) {
      return {
        name: char.name,
        gender: char.gender,
        born: char.born,
        died: char.died,
        culture: char.culture
      }
  }
  _transformHouse(house) {
    return {
      name: house.name,
      region: house.region,
      wordls: house.wordls,
      titles: house.titles,
      overlord: house.overlord,
      ancestralWeapons: house.ancestralWeapons
    }
  }

  _transformBook(book) {
    return {
      name: book.name,
      numberOfPages: book.numberOfPages,
      publiser: book.publiser,
      released: book.released,
    }
}
  isSer = (data) => {
    if(data) return data
    else return 'no data'
  }
  }
  
  
  
