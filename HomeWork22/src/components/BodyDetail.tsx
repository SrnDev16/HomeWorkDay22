import DetailBox from "./DetailBox";
import Ratting from "./Ratting";
import Review from "./Review";

const BodyDetail = () => {
  return (
    <>
      <div className="body">
        <DetailBox />
      </div>
      <div className="body">
        <Ratting />
      </div>
      <br />
      <div className="body">
        <Review />
      </div>
    </>
  );
};

export default BodyDetail;
