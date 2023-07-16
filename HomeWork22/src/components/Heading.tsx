import Button from "@mui/material/Button";

const Heading = () => {
  return (
    <div className="heading">
      <Title />
      <Detail />
      <BasicButtons />
    </div>
  );
};

const Title = () => {
  return <h1>Album example</h1>;
};

const Detail = () => {
  return (
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eaque
      doloremque, necessitatibus dolorem in assumenda voluptates error maxime
      molestias aliquid hic nesciunt laboriosam neque quidem dicta, id adipisci
      vel ratione?
    </p>
  );
};

const BasicButtons = () => {
  return (
    <div>
      <Button variant="contained" onClick={() => window.location.href = "/detail"}>Contained</Button>
      <Button variant="contained" className="btn-second" onClick={() => window.location.href = "/check_out"}>Secondary</Button>
    </div>
  );
};

export default Heading;
