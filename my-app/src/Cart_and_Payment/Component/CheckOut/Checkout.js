import React, { useContext } from "react";
import "./Checkout.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import myCartContext from "../../CartContext/Cartcontext";

const Checkout = (props) => {
  let total = useContext(myCartContext).totval;
  let { coupon, setcop } = useContext(myCartContext);
  console.log(total);
  let { val, fn } = props;
  // console.log(fn);

  const ToAddress = () => {
    fn(2);
  };
  return (
    <>
      <div id="check">
        <div className="check_name">
          <p>Bag Total</p>
          <p>₹{total}</p>
        </div>
        <div className="check_name">
          <p>Shipping Charge</p>
          <p style={{ color: "green" }}>
            <b>FREE</b>
          </p>
        </div>
        <div className="check_name">
          <p>Bag Subtotal</p>
          <p>₹{total}.00</p>
        </div>
        <div className="check_name">
          <p>Product Discount(s)</p>
          <p>-₹{total > 0 ? Math.round(total * (10 / 100)) : total}</p>
        </div>
        <div className="check_name">
          <p>Coupon Discount</p>
          <p>-₹{coupon > 0 ? coupon : "0.00"}</p>
        </div>
        <p style={{ color: "green" }}>
          You will save{" "}
          <span style={{ color: "red" }}>
            <b>₹{Math.round(total * (10 / 100)) + coupon}</b>
          </span>{" "}
          on this order
        </p>
        <hr />
        <div id="check_total">
          {val === 2 ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                gap: "30px",
                alignItems: "baseline",
              }}
            >
              <div style={{ width: "50%" }}>
                <h1 style={{ fontSize: "20px" }}>
                  <b>Total Payable Amount</b>
                </h1>
              </div>
              <div>
                <h1 style={{ fontSize: "25px" }}>
                  ₹{Math.round(total - total * (10 / 100))}
                </h1>
                <img
                  style={{ marginTop: "8px", width: "60px" }}
                  src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                  alt="cartmove"
                />
              </div>
            </div>
          ) : val === 1 ? (
            <>
              <div>
                <h1 style={{ fontSize: "20px" }}>
                  <b>Total</b>
                </h1>
                <h1 style={{ fontSize: "20px" }}>
                  ₹{total - (Math.round(total * (10 / 100)) + coupon)}
                </h1>
              </div>
              <div>
                <Link>
                  <Button
                    onClick={ToAddress}
                    size="lg"
                    variant="outline"
                    colorScheme="red"
                  >
                    Checkout
                    <img
                      style={{ marginRight: "-10px", width: "60px" }}
                      src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                      alt="cartmove"
                    />
                  </Button>
                </Link>
              </div>
            </>
          ) : val === 3 ? (
            <>
              <div>
                <h1 style={{ fontSize: "20px" }}>
                  <b>Total Payable Amount</b>
                </h1>
              </div>
              <div>
                <h1 style={{ fontSize: "25px" }}>₹{total - (Math.round(total * (10 / 100)) + coupon)}</h1>
                <img
                  style={{ marginTop: "8px", width: "60px" }}
                  src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                  alt="cartmove"
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <h1 style={{ fontSize: "20px" }}>
                  <b>Total Payable Amount</b>
                </h1>
              </div>
              <div>
                <h1 style={{ fontSize: "25px" }}>₹{total - (Math.round(total * (10 / 100)) + coupon)}</h1>
                <img
                  style={{ marginTop: "8px", width: "60px" }}
                  src="https://thumbs.gfycat.com/CompleteShallowFlyingsquirrel-size_restricted.gif"
                  alt="cartmove"
                />
              </div>
            </>
          )}
        </div>
      </div>

      <div
        style={{
          height: "50px",
          width: "95%",
          margin: "auto",
          display: "flex",
          padding: "5px",
        }}
      >
        <img style={{width:"29px"}}
          src="https://www.tatacliq.com/src/cart/components/img/lock.svg"
          alt="security"
        />&nbsp; &nbsp;
        <p style={{ fontWeight: "300", fontSize: "12px" }}>
          Safe and secure payments. Easy returns. 100% Authentic products.
        </p>
      </div>
      
      
    </>
  );
};

export default Checkout;
