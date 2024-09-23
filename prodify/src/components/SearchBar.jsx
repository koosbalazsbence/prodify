import PropTypes from "prop-types"
import { Search } from "lucide-react"

const SearchBar = ({ searchChange }) => {
  return (
    <>
        <div className="flex items-center">
          <input
            className="bg-white border-2 border-gray-300 rounded-lg p-2 min-w-2/12 focus:outline-indigo-300"
            type="text"
            placeholder="Keresés..."
            onChange={searchChange}
          />
          <Search className="ml-2 cursor-pointer" size={20} />
        </div>
    </>
  )
}

SearchBar.propTypes = {
  searchChange: PropTypes.func,
}

export default SearchBar
