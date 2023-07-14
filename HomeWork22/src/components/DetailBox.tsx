
const DetailBox = () => {
  return (
  <>
   <div className="detail-container">
          <div className="box-left">
            <img src="/src/assets/images/cat.jpeg" alt="" />
            <br />
            <br />
            <label>Stock (75/100)</label>
            <progress value="75" max="100" style={{ width: "100%" }}>
              75 %
            </progress>
          </div>
          <div className="box-right">
            <div className="title-detail">
              <h3>Product Name</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Consequuntur, sunt, iure neque similique vitae nisi rem
                distinctio asperiores commodi ex veritatis impedit eligendi
                mollitia sint, nulla explicabo nostrum obcaecati odio.
              </p>
              <br />
              <p>Price : $ 55</p>
              <br />
              <p>
                <label htmlFor="Quantity">Quantity</label>
              </p>
              <input
                type="number"
                name="number"
                id=""
                style={{ width: "100%" }}
              />
              <br />
              <button
                type="button"
                style={{ backgroundColor: "blue" }}
                onClick={() => (window.location.href = "/check_out")}
              >
                Add to Cart
              </button>
            </div>
            <br />
            <div className="info">
              <ul>
                <li>weight : 4 kg.</li>
                <li>Height : 23 cm.</li>
                <li>Color : white and grey</li>
                <li>Top speed : 20 km/h</li>
                <li>Character : sleep</li>
                <li>Favorite activity : sleep and eat</li>
              </ul>
            </div>
          </div>
        </div>
  </>
  )
}

export default DetailBox