import MyCard from "./MyCard";


const BodyHomePage = () => {
  return (
   <div className="body">
      <div className="grid-container">
        <Item />
      </div>
   </div>
  );
};

const Item = () => {
  return <>
  <MyCard url="/src/assets/images/cat.jpeg" price="55"/>
  <MyCard url="/src/assets/images/cat2.webp" price="45"/>
  <MyCard url="/src/assets/images/cat3.jpeg" price="89"/>
  <MyCard url="/src/assets/images/cat4.jpeg" price="23"/>
  <MyCard url="/src/assets/images/cat5.jpeg" price="56"/>
  <MyCard url="/src/assets/images/cat6.jpeg" price="50"/>
  </>;
};



export default BodyHomePage;
