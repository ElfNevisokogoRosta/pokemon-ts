interface IResult{
  name: string;
  img: string;
  type?: [];
  stats?: [];
};
interface IPokemons {
  name: string;
  url: string;
}
interface ISearchedPokemon{
  name: string;
  img: string;
  types?:[];
  stats?: [];
  abilities?: [];
}
interface IPokemon {
  page: number,
  perPage: number, 
  typeNumber: number,
  total: number,
}
interface IPokemonComponent{
  url: string;
}
interface ITypes{
  name: string,
  url: string,
}
interface ITypedPokemons{
  pokemon: {
    name: string,
    url: string,
  }
}
interface IPokemonType{
  slot: number;
  type: {name: string,
  url: string
}
}

export type {ISearchedPokemon ,IPokemonType, IResult,IPokemons, IPokemon, IPokemonComponent, ITypes, ITypedPokemons };
