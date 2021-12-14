import dbConnect from "../lib/dbConnect";
import brodyaga from "../public/brodyaga.webp";
import Image from "next/image";
// import Sku from "../models/Sku";

const Home = ({ data }) => {
  return (
    <div className="container">
      <div className="main">
        <Image src={brodyaga} alt="Nietschebrod na otdyhe" />
      </div>
      <form action="/api/test" method="post">
        <input type="text" name="item" id="item" placeholder="item" />
        <input type="text" name="sum" id="sum" placeholder="sum" />
        <input type="text" name="currency" id="currency" placeholder="cur" />
        <button type="submit">➕</button>
      </form>
    </div>
  );
};

export async function getServerSideProps() {
  await dbConnect();
  // const arr = await Sku.find({});
  return { props: { data: "arr" } };
}

export default Home;
