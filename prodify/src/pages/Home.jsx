import Navbar from "../components/Navbar"
import ProductList from "../components/ProductList"
import SearchBar from "../components/SearchBar"
import { useState, useEffect } from "react"
import { productList } from "../models/models"

const Home = () => {
  const [models, setModels] = useState([])
  const [searchField, setSearchField] = useState("")

  const filteredModels = models.filter((model) => {
    return model.name.toLowerCase().includes(searchField.toLowerCase())
  })

  useEffect(() => {
    setModels(productList)
  }, [])

  const onSearchChange = (e) => {
    setSearchField(e.target.value)
  }

  return (
    <>
      <div className="flex justify-around items-center h-[65px] bg-white select-none mb-12 shadow-sm">
        <Navbar />
        <SearchBar searchChange={onSearchChange} />
      </div>
      <div className="text-center m-12">
        <h1 className="text-4xl font-bold mt-3 mb-3 p-3 text-center text-indigo-500">
          Termékek
        </h1>
        <ProductList models={filteredModels} />
      </div>
    </>
  )
}

export default Home
