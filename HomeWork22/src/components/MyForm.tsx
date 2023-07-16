import YourCart from "./YourCart";

const MyForm = () => {
  return (
    <>
      <div className="my-form">
        <div className="address">
         <Form/>
        <YourCart/>
        </div>
      </div>
    </>
  );
};

const Form = () => {
  return (
    <form action="">
    <h3>Address</h3>
    <br />
      <div>
        <div>
          <label htmlFor="">First name</label>
          <br />
          <input type="text" name="" id="" />
        </div>
        <div className="size-box"></div>
        <div>
          <label htmlFor="">Last name</label>
          <br />
          <input type="text" name="" id="" />
        </div>
      </div>
      <br />
      <label htmlFor="">Username</label>
      <input type="text" name="" id="" placeholder="Username" />
      <br />
      <br />
      <label htmlFor="">Email</label>
      <br />
      <input type="email" name="" id="" placeholder="example@gmail.com" />
      <br />
      <br />
      <label htmlFor="">Address</label>
      <input type="text" name="" id="" placeholder="123 m33 " />
      <br />
      <br />
      <div className="address">
        <div>
          <label htmlFor="">Country</label>
          <br />
          <input type="text" name="" id="" />
        </div>
        <div className="size-box"></div>
        <div>
          <label htmlFor="">Code</label>
          <br />
          <input type="text" name="" id="" />
        </div>
        <div className="size-box"></div>
        <div>
          <label htmlFor="">Zip</label>
          <br />
          <input type="text" name="" id="" />
        </div>
      </div>
      <br />
      <hr />
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="">Lorem ipsum dolor sit amet consectetur.</label>
      <br />
      <input type="checkbox" name="" id="" />
      <label htmlFor="">Lorem ipsum dolor sit amet consectetur.</label>
      <br />
      <br />
      <hr />
      <br />
      <input type="radio" name="payment" id="" />
      <label htmlFor="">Credit card</label>
      <br />
      <input type="radio" name="payment" id="" />
      <label htmlFor="">Debit card</label>
      <br />
      <input type="radio" name="payment" id="" />
      <label htmlFor="">Paypal</label>
      <br />
      <br />
      <div className="address">
        <div>
          <label htmlFor="">Card</label>
          <br />
          <input type="text" name="" id="" />
        </div>
        <div className="size-box"></div>
        <div>
          <label htmlFor="">Credit card number</label>
          <br />
          <input type="text" name="" id="" />
        </div>
        <div className="size-box"></div>
      </div>
    </form>
  )
}

export default MyForm;
