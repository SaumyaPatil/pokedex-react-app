import './SearchBox.css';

interface SearchboxProps{
    onInputChange: (inputValue: string) => void;
}

const SearchBox = ({onInputChange}: SearchboxProps) =>{
    return(
        <input onChange={(e)=>{
            console.log(e.target.value);
            onInputChange(e.target.value);
        }}
        type="search" 
        className='search' 
        placeholder='Search Pokemons'/>
    );
};

export default SearchBox;