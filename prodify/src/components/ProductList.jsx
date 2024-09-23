import Product from "./Product"
import PropTypes from "prop-types"

const ProductList = ({ models }) => {
  return (
    <>
      <div>
        {models.map((model) => {
          return (
            <Product
              key={model.id}
              id={model.id}
              name={model.name}
              price={model.price}
              oldPrice={model.oldPrice ? model.oldPrice : null}
              img={model.img}
            />
          )
        })}
      </div>
    </>
  )
}

ProductList.propTypes = {
  models: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      oldPrice: PropTypes.number,
      img: PropTypes.string,
    })
  ),
}

export default ProductList
