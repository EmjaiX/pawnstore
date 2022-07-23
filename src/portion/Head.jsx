import { useNavigate } from "react-router-dom";
import '../pages/src/Home.css'

function Head({page}) {
    //Create Variables and hadnle data
    let buttonStyles = {
      "Home": "head-button",
      "Checkout": "head-button",
      "Transaction": "head-button",
      "Layaway": "head-button",
      "Pull List": "head-button",
      "MarketPlace": "head-button",
      "Till": "head-button",
      "Reports": "head-button",
      "Search": "head-button",
    }
    buttonStyles[page] += " active-head-button";
    let navigate = useNavigate();
    //Return Web Element for display
    return (
    <>
    <div>
      <div className="head-button-case">
        <button onClick={navigate("/Home")}  className={buttonStyles["Home"]}>Home</button>
        <button onClick={navigate("/Checkout")} className={buttonStyles["Checkout"]}>Checkout</button>
        <button className={buttonStyles["Transaction"]}>Transaction</button>
        <button className={buttonStyles["Layaway"]}>Layaway</button>
        <button className={buttonStyles["Pull List"]}>Pull List</button>
        <button className={buttonStyles["MarketPlace"]}>MarketPlace</button>
        <button className={buttonStyles["Till"]}>Till</button>
        <button className={buttonStyles["Reports"]}>Reports</button>
        <button className={buttonStyles["Search"]}>Search</button>
      </div>
    </div>
    </>
  );
}

export default Head;
