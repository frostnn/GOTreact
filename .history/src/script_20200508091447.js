class GotService {

constructor() {
  this._apiBase = 'https://www.anapioficeandfire.com/api';
}

  async getResourse (url) {
    const res = await fetch(url);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return await res.json();
  }

  getAllCharacters = () => {
    return this.getResourse('https://www.anapioficeandfire.com/api/characters?page=5');
  }

  getCharacter = (id) => {
    return this.getResourse(`https://www.anapioficeandfire.com/api/characters/${id}`);
  }
}


const got = new GotService();

got.getAllCharacters()
  .then(res => console.log(res.forEach(item => console.log(item.name))))