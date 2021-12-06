import dbConnect from "../lib/dbConnect";

const Home = ({ text }) => {
  return (
    <div>
      <p>{text}</p>
      <form action="/api/test" method="post">
        <ul>
          <li>
            <input type="text" name="item" id="item" placeholder='item'></input>
          </li>
          <li>
            <input type="text" name="sum" id="sum" placeholder='sum'></input>
          </li>
          <li>
            <input type="text" name="currency" id="currency" placeholder='currency'></input>
          </li>
          <li>
            <button type='submit'>Submit</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export async function getServerSideProps() {
  await dbConnect();

  return { props: { text: "MongoDB is connected" } };
}

export default Home;
