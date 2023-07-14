
const Ratting = () => {
  return (
   <>
   <div className="ratting">
          <ul>
            <li>Rate this product</li>
            <li>
              <form>
                <input type="radio" name="ratting" id="" />
                <label htmlFor="">1</label>
                <input type="radio" name="ratting" id="" />
                <label htmlFor="">2</label>
                <input type="radio" name="ratting" id="" />
                <label htmlFor="">3</label>
                <input type="radio" name="ratting" id="" />
                <label htmlFor="">4</label>
                <input type="radio" name="ratting" id="" />
                <label htmlFor="">5</label>
                <button type="button" style={{ backgroundColor: "blue" }}>
                  Submit ratting
                </button>
              </form>
            </li>
          </ul>
        </div>
   </> 
  )
}

export default Ratting  