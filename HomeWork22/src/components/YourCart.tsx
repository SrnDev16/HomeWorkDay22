const YourCart = () => {
  return (
    <div className="cart">
      <div className="title-cart">
        <h3>Your cart</h3>
        <div>3</div>
      </div>
      <div className="box-product">
        <Product
          name="Product name"
          detail="Lorem ipsum dolor sit amet consectetur."
          price={55}
        />
        <Product
          name="Product name"
          detail="Lorem ipsum dolor sit amet consectetur."
          price={55}
        />
        <Product
          name="Product name"
          detail="Lorem ipsum dolor sit amet consectetur."
          price={55}
        />
        <Product
          name="Product name"
          detail="Lorem ipsum dolor sit amet consectetur."
          price={55}
        />
        <div className="product">
          <p>Total (USD)</p>
          <p>$ 100</p>
        </div>
      </div>
      <br />
      <br />
      <Code/>
    </div>
  );
};

const Product = ({ name, detail, price }: ProductProps) => {
  return (
    <div className="product">
      <div>
        <h4>{name}</h4>
        <p>{detail}</p>
      </div>
      <p>$ {price}</p>
    </div>
  );
};

type ProductProps = {
  name: string;
  detail: string;
  price: number;
};

const Code =()=> {
    return(
        <div className="code">
            <input type="text" name="" id="" placeholder="Code" />
            <button type="button">Confirm</button>
        </div>
    )
}

export default YourCart;
