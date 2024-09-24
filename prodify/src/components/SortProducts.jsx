import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const SortProducts = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSortOptions = () => {
    setIsOpen(!isOpen)
  }
  const handleSort = (sortType) => {
    onSortChange(sortType)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={toggleSortOptions}
        className="absolute top-2 right-14 p-3 bg-indigo-500 px-4 py-2 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 flex items-center gap-2"
      >
        Rendezés
        {isOpen ? (
          <ChevronUp strokeWidth={2} />
        ) : (
          <ChevronDown strokeWidth={2} />
        )}
      </button>

      {isOpen && (
        <ul className="absolute w-56 top-12 right-14 text-gray-700 px-4 py-2 font-semibold rounded-md focus:outline-none focus:bg-gray-100 bg-white shadow-lg">
          <li
            className="hover:text-indigo-500 cursor-pointer"
            onClick={() => handleSort("name-asc")}
          >
            Név szerint A-Z
          </li>
          <li
            className="hover:text-indigo-500 cursor-pointer"
            onClick={() => handleSort("name-desc")}
          >
            Név szerint Z-A
          </li>
          <li
            className="hover:text-indigo-500 cursor-pointer"
            onClick={() => handleSort("price-asc")}
          >
            Ár szerint növekvő
          </li>
          <li
            className="hover:text-indigo-500 cursor-pointer"
            onClick={() => handleSort("price-desc")}
          >
            Ár szerint csökkenő
          </li>
        </ul>
      )}
    </div>
  )
}

export default SortProducts
