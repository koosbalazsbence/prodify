import PropTypes from "prop-types"

const Product = (props) => {
  return (
    <>
      <div className="bg-slate-200 inline-block rounded-lg m-3 transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg text-center p-5">
        <h1 className="text-3xl font-bold p-3 mb-2">{props.name}</h1>
        <img
          className="rounded mb-3 mx-auto w-80 h-64"
          src={props.img}
          alt={props.name}
          title={props.name}
        />
        <div className="p-3">
          <p className="mb-2 text-2xl">Price: {props.price} HUF</p>
          {props.oldPrice && (
            <p className="mb-2 line-through text-red-400">
              Old Price: {props.oldPrice} HUF
            </p>
          )}
        </div>
      </div>
    </>
  )
}

Product.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  img: PropTypes.string,
}

export default Product
