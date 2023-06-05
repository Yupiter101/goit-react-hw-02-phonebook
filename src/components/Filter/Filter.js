
import "./Filter.css";


export function Filter({searchVal, onSearchSet}) {

    return (
      <label className="FilterLabel">Find contacs by name
        <input
          className="FilterInput"
          type="text"
          name="search"
          title="find contacs by name"
          value={searchVal}
          onChange={onSearchSet}
        />
      </label>
    )
}

