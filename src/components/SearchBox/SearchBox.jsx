import css from './SearchBox.module.css'

const SearchBox = ({value, handleInput}) => {
    return (
        <div className={css.container}>
            <h3>Find contacts by name</h3>
            <input type='text' className={css.inputField} value={value} onChange={handleInput} />
        </div>
    );
}

export default SearchBox