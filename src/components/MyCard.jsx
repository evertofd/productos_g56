const MyCard = ({product}) => {
  return (
    <div className="col-md-4 mt-5">
      <div className="card">
        <img src={product.image} className="card-img-top" alt="..." width={200} height={200} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">
            {product.image}
          </p>
            <p className="card-text">
                {product.category}
            </p>
        </div>
      </div>
    </div>
  );
};

export default MyCard;
