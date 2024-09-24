import Navbar from "../components/Navbar"
import ProductList from "../components/ProductList"
import SearchBar from "../components/SearchBar"
import SortProducts from "../components/SortProducts"
import { useState, useEffect } from "react"
import { productList } from "../models/models"

const Home = () => {
  const [models, setModels] = useState([])
  const [searchField, setSearchField] = useState("")

  const [sortType, setSortType] = useState("")

  const filteredModels = models.filter((model) => {
    return model.name.toLowerCase().includes(searchField.toLowerCase())
  })

  useEffect(() => {
    setModels(productList)
  }, [])

  const onSearchChange = (e) => {
    setSearchField(e.target.value)
  }

  const handleSortChange = (sortType) => {
    setSortType(sortType)
    let sortedModels = [...models]
    switch (sortType) {
      case "name-asc":
        sortedModels.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "name-desc":
        sortedModels.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "price-asc":
        sortedModels.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        sortedModels.sort((a, b) => b.price - a.price)
        break
      default:
        break
    }
    setModels(sortedModels)
  }

  return (
    <>
      <div className="flex justify-around items-center h-[65px] bg-white select-none mb-12 shadow-sm">
        <Navbar />
        <SearchBar searchChange={onSearchChange} />
      </div>

      <SortProducts onSortChange={handleSortChange} />

      <div className="text-center m-12">
        <h1 className="text-5xl font-bold mt-3 mb-16 p-3 text-center text-indigo-500">
          Termékek
        </h1>
        <ProductList models={filteredModels} />
      </div>
    </>
  )
}

export default Home
