import { Link } from "react-router-dom";
import '../pages/src/Home.css'

function Head({page}) {
    //Create Variables and hadnle data
    let buttonStyles = [
      {"id":"Home","class": "head-button color0","num":0},
      {"id":"Checkout","class": "head-button color1","num":1},
      {"id":"Transaction","class": "head-button color2","num":2},
      {"id":"Layaway","class": "head-button color3","num":3},
      {"id":"Pull List","class": "head-button color4","num":4},
      {"id":"MarketPlace","class": "head-button color5","num":5},
      {"id":"Till","class": "head-button color6","num":6},
      {"id":"Reports","class": "head-button color7","num":7},
      {"id":"Search","class": "head-button color8","num":8}
    ];

    const index = buttonStyles.findIndex(object => {
      return object.id === page;
    });
    buttonStyles[index]["class"] += " active-head-button active-head-button" + buttonStyles[index]["num"];
    // let navigate = useNavigate();
    //Return Web Element for display
    return (
    <>
    <div>
      <div className="head-button-case">
      <Link to="../Home">
        <button className={buttonStyles[0]["class"]}>Home</button>
      </Link>
      <Link to="../Checkout">
        <button className={buttonStyles[1]["class"]}>Checkout</button>
        </Link>
      <Link to="../Transaction">
        <button className={buttonStyles[2]["class"]}>Transaction</button>
        </Link>
      <Link to="../Layaway">
        <button className={buttonStyles[3]["class"]}>Layaway</button>
        </Link>
      <Link to="../PullList">
        <button className={buttonStyles[4]["class"]}>Pull List</button>
        </Link>
      <Link to="../MarketPlace">
        <button className={buttonStyles[5]["class"]}>MarketPlace</button>
        </Link>
      <Link to="../Till">
        <button className={buttonStyles[6]["class"]}>Till</button>
        </Link>
      <Link to="../Reports">
        <button className={buttonStyles[7]["class"]}>Reports</button>
        </Link>
      <Link to="../Search">
        <button className={buttonStyles[8]["class"]}>Search</button>
      </Link>
      </div>
    </div>
    </>
  );
}

export default Head;
