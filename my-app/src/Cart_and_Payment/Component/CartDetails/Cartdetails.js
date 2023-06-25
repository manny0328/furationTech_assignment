import React, { useContext } from "react";
import "../Allcss.css/all.css";
import { Select } from "@chakra-ui/react";
import { Button,  } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import myCartContext from "../../CartContext/Cartcontext";

const Cartdetails = (props) => {
  
  let { totval, totalfn, load2 } = useContext(myCartContext);

  let {
    brand,
    category,
    department,
    id,
    img,
    name,
    price,
    product_type,
    strikedprice,
  } = props.props;

  console.log(props.fn);
  console.log(
    brand,
    category,
    department,
    id,
    img,
    name,
    price,
    product_type,
    strikedprice
  );
  let [heart, setheart] = React.useState(false);

  const handleHeart = () => {
    setheart((prev) => !prev);
  };

  const handleDelete = (a) => {
    let arr = JSON.parse(localStorage.getItem("cartdata")) || [];
    // console.log(arr)
    let newArr = arr.filter((el) => {
      return el.id !== a;
    });
    
    load2((prev)=>!prev)
    props.fn(newArr);
    localStorage.setItem("cartdata", JSON.stringify(newArr));

    // console.log(a)
  };
  const guess = (e) => {
    let y = props.props.price;
    let x = parseInt(e.target.value, 10);

    // let total=totval
    if (x === 1) {
      let arr = JSON.parse(localStorage.getItem("cartdata")) || [];
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i].price, 10);
      }
      totalfn(sum);
      // console.log(sum);
    }else{
      totalfn(totval + y * x);
    }

    
  };

  return (
    <div className="Cartbox" style={{height:"auto"}}>
      <div className="cart_image">
        <img src={img} alt="shoe" />
      </div>
      <div className="cart_data">
        <div>
          <div>
            <p style={{ float: "left", fontFamily: "light" }}>{name}</p>
            <br />
            <br />
            <p style={{ float: "left" }}>₹{price}</p>
            <p
              style={{
                float: "left",
                fontFamily: "regular",
                marginLeft: "10px",
                textDecoration: "line-through",
              }}
            >
              {" "}
              ₹{strikedprice}
            </p>
            <br />
            <p style={{ float: "left", fontFamily: "light" }}>Color:</p>
            <p style={{ color: "red", float: "left", fontFamily: "light" }}>
              &nbsp;Pink | Blue
            </p>
            <p style={{ fontFamily: "light", display: "block" }}>
              Size: UK/IND-8
            </p>
            <br />
            <hr />
          </div>
          <div>
            <img
              style={{ width: "25px" }}
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMzQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDYyICg5MTM5MCkgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+R3JvdXAgNTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0zMy42NzAzMDg5LDExLjYyNTg4NDIgTDMzLjY2OTI2MTMsMTEuNjI2OTQyMSBDMzMuNzQ4Mzg1LDExLjc1NjYzNzQgMzMuNzg5ODg3OSwxMS45MDU2NzkxIDMzLjc4OTg4NzksMTIuMDU3NjA4OCBMMzMuNzg5ODg3OSwxOC41OTY5NjkxIEMzMy43ODk4ODc5LDE5LjA0NjY4MzQgMzMuNDI5MDU4LDE5LjQxMTc0MzkgMzIuOTg0NjMwNywxOS40MTE3NDM5IEwzMC40ODk1MTg3LDE5LjQxMTc0MzkgQzMwLjM4MjY0MSwyMS40ODU3MTY5IDI4LjY4NTM3NDYsMjMuMTQyNzc4IDI2LjYwNzE2ODYsMjMuMTQyNzc4IEMyNC41Mjg5NjI3LDIzLjE0Mjc3OCAyMi44MzA2MzU4LDIxLjQ4NTcxNjkgMjIuNzIzNzU4MSwxOS40MTE3NDM5IEwxNC45MjczMjA1LDE5LjQxMTc0MzkgQzE0LjgyMTUwMzMsMjEuNDg1NzE2OSAxMy4xMjIxMTU5LDIzLjE0Mjc3OCAxMS4wNDM5MTI1LDIzLjE0Mjc3OCBDOC45NjQ2NDk5OSwyMy4xNDI3NzggNy4yNjYzMjA1MiwyMS40ODU3MTY5IDcuMTYwNTA1ODUsMTkuNDExNzQzOSBMNS44OTA3MjcyMSwxOS40MTE3NDM5IEM1LjQ0NDE4Nzk2LDE5LjQxMTc0MzkgNS4wODQ0MTcwNCwxOS4wNDY2ODM0IDUuMDg0NDE3MDQsMTguNTk2OTY5MSBMNS4wODQ0MTcwNCwxNS4wOTY2MTI2IEwwLjgwNjMyMDY0NiwxNS4wOTY2MTI2IEMwLjM1OTc4MTc3OSwxNS4wOTY2MTI2IC04LjI4Njg0MjZlLTEzLDE0LjczMTU1MDggLTguMjg2ODQyNmUtMTMsMTQuMjgxODM3OCBDLTAuMDAxMTE0MzY1NzgsMTQuMDY2ODY3OSAwLjA4MzIwNDI2OTcsMTMuODYwMjU1MyAwLjIzNDQxNzI5OCwxMy43MDc0NTUyIEMwLjM4NTYzMDMxNCwxMy41NTQ2NTM5IDAuNTkxMzUwNTk5LDEzLjQ2ODE4MzEgMC44MDYzMjA2NDYsMTMuNDY3MDYzMSBMNS44OTE3ODUxMywxMy40NjcwNjMxIEM2LjMzNzI2NjQ3LDEzLjQ2NzA2MzEgNi42OTgwOTUzLDEzLjgzMjEyNDggNi42OTgwOTUzLDE0LjI4MTgzNzggTDYuNjk4MDk1MywxNy43ODAwNzg1IEw3LjQxNzYzNTgzLDE3Ljc4MDA3ODUgQzcuOTg0ODA0NDMsMTYuMzEyNDI2IDkuMzk0MjU4NzQsMTUuMjY4MDMyMiAxMS4wNDM5MTI1LDE1LjI2ODAzMjIgQzEyLjcwNDE0OTMsMTUuMjY4MDMyMiAxNC4xMjEwMDM5LDE2LjMyNDA2NTYgMTQuNjc5NzA2NiwxNy44MDU0NzM2IEMxNC43NDIxNDY4LDE3Ljc5MDY2MDIgMjAuNjUxOTAyMiwxNy43ODAwNzg1IDIwLjY1MTkwMjIsMTcuNzgwMDc4NSBMMjAuNjUxOTAyMiw0LjQ4NDQyOTgzIEMyMC42NTE5MDIyLDQuNDU0ODEzNDEgMjAuNjYyNDgxNCwzLjE3NjU2MTEyIDE5Ljg2Njc1NjgsMi4zNjA3MjU4NSBDMTkuMzk0ODIxMSwxLjg3NjEwMjk4IDE4LjcwMzg1MzMsMS42MzA2MTAwNSAxNy44MTE4MzAyLDEuNjMwNjEwMDUgTDYuNjk3MDM2MDksMS42MzA2MTAwNSBMNi42OTcwMzYwOSwyLjgxODkxMzc5IEwxMS4wNzM1NDA2LDIuODE4OTEzNzkgQzExLjUxOTAyMTksMi44MTg5MTM3OSAxMS44Nzg3OTI4LDMuMTgzOTcxNjkgMTEuODc4NzkyOCwzLjYzMzY4ODU3IEMxMS44Nzg3OTI4LDQuMDg0NDUzMDEgMTEuNTE3OTY0LDQuNDQ4NDYzMzQgMTEuMDczNTQwNiw0LjQ0ODQ2MzM0IEwyLjY5MzAwMDA1LDQuNDQ4NDYzMzQgQzIuMjQ2NDYyMDksNC40NDg0NjMzNCAxLjg4NjY5MTE4LDQuMDg0NDUzMDEgMS44ODY2OTExOCwzLjYzMzY4ODU3IEMxLjg4NTU2NjAxLDMuNDE4NzE3MzYgMS45Njk4ODM1NiwzLjIxMjEwMDgyIDIuMTIxMDk2NywzLjA1OTI5ODIyIEMyLjI3MjMwOTg1LDIuOTA2NDk1NjIgMi40NzgwMzAxMywyLjgyMDAyNjAzIDIuNjkzMDAwMDUsMi44MTg5MTM3OSBMNS4wODU0NzQ5NSwyLjgxODkxMzc5IEw1LjA4NTQ3NDk1LDAuODE0Nzc0Nzc1IEM1LjA4NDM0OTc5LDAuNTk5ODAzNTY0IDUuMTY4NjY4NjMsMC4zOTMxODcwMjcgNS4zMTk4ODE3OCwwLjI0MDM5NzM1NyBDNS40NzEwOTQ5MiwwLjA4NzU5NDc1NDggNS42NzY4MTUyMSwwLjAwMTEyNTE2NTE3IDUuODkxNzg1MTMsMCBMMTcuODExODMwMiwwIEMxOS4xNTk5MjAzLDAgMjAuMjQyNDA2OCwwLjQxNDc5Nzk1OCAyMS4wMjk2NjAzLDEuMjMwNjMzMjMgQzIxLjg5ODQwNDIsMi4xMzMyMjI2MiAyMi4xNTY1OTcyLDMuMjk3MTg2NTkgMjIuMjMxNzI0NiwzLjk2ODA1NjYyIEwyOC41MjAyOTg2LDMuOTY4MDU2NjIgQzI4Ljc5OTk2MDQsMy45Njg2Nzc0IDI5LjA1OTIxMzksNC4xMTQ1MzUwMiAyOS4yMDQ5MjkzLDQuMzUzMjI1MjMgTDMzLjY3MDMwODksMTEuNjI1ODg0MiBaIE0xMS4wNDM5MTI1LDIxLjUxMjE2OTkgTDExLjA0MzkxMjUsMjEuNTExMTEyIEMxMi4zMDMxMTA3LDIxLjUxMTExMiAxMy4zMjc0MDAzLDIwLjQ3NjI0MiAxMy4zMjc0MDAzLDE5LjIwNDM0NzUgQzEzLjMyNzQwMDMsMTcuOTMyNDUxNyAxMi4zMDMxMTA3LDE2Ljg5NzU4MTcgMTEuMDQzOTEyNSwxNi44OTc1ODE3IEM5Ljc4NTc3MzU0LDE2Ljg5NzU4MTcgOC43NjI1NDMxNywxNy45MzI0NTE3IDguNzYyNTQzMTcsMTkuMjA0MzQ3NSBDOC43NjI1NDMxNywyMC40NzYyNDIgOS43ODU3NzM1NCwyMS41MTIxNjk5IDExLjA0MzkxMjUsMjEuNTEyMTY5OSBaIE0yNi42MDkyODk2LDIxLjUxMjE2OTkgTDI2LjYwOTI4OTYsMjEuNTExMTEyIEMyNy44NjYzNzA3LDIxLjUxMTExMiAyOC44ODk1OTg1LDIwLjQ3NjI0MiAyOC44ODk1OTg1LDE5LjIwNDM0NzUgQzI4Ljg4OTU5ODUsMTcuOTMyNDUxNyAyNy44NjYzNzA3LDE2Ljg5NzU4MTcgMjYuNjA5Mjg5NiwxNi44OTc1ODE3IEMyNS4zNTExNDgxLDE2Ljg5NzU4MTcgMjQuMzI2ODU5OCwxNy45MzI0NTE3IDI0LjMyNjg1OTgsMTkuMjA0MzQ3NSBDMjQuMzI2ODU5OCwyMC40NzYyNDIgMjUuMzUwMDg3NiwyMS41MTIxNjk5IDI2LjYwOTI4OTYsMjEuNTEyMTY5OSBaIE0zMC4yMzM0NDY2LDE3Ljc4MDA3ODUgTDMyLjE3OTM4NzUsMTcuNzgwMDc4NSBMMzIuMTc5Mzg3NSwxMi41MDQxNDggTDI0LjcxNTE5NywxMi41MDQxNDggQzI0LjI2OTcyMjEsMTIuNTA0MTQ4IDIzLjkwOTk0MDgsMTIuMTM5MDg2MiAyMy45MDk5NDA4LDExLjY4OTM3MzIgTDIzLjkwOTk0MDgsNy42ODk1NzI3MyBDMjMuOTA4NTQ0MSw3LjQ3NDUxMDk5IDIzLjk5Mjc2MzMsNy4yNjc3MzkyNiAyNC4xNDQwMzk4LDcuMTE0ODcxOTkgQzI0LjI5NTMxNjQsNi45NjIwMTc2NiAyNC41MDExOTU3LDYuODc1NjM4NiAyNC43MTYyNTc1LDYuODc0Nzk3OTYgTDI2Ljg1MzcyMjEsNi44NzQ3OTc5NiBDMjcuMDY4NjkzMyw2Ljg3NTkxMDE5IDI3LjI3NDQwNDUsNi45NjIzNzk3OCAyNy40MjU2MTY0LDcuMTE1MTgyMzggQzI3LjU3NjgyODIsNy4yNjc5ODQ5OCAyNy42NjExNTEsNy40NzQ2MDE1MiAyNy42NjAwMjU4LDcuNjg5NTcyNzMgQzI3LjY2MDAyNTgsOC4xNDAzMzcxOCAyNy4yOTkxOTcsOC41MDQzNDc1MSAyNi44NTQ3Njk2LDguNTA0MzQ3NTEgTDI1LjUyMTUxMzYsOC41MDQzNDc1MSBMMjUuNTIxNTEzNiwxMC44NzQ1OTg1IEwzMS4zMTE3MDQxLDEwLjg3NDU5ODUgTDI4LjA3MjcwMjcsNS41OTc2MDYxNyBMMjIuMjYzNDYyMSw1LjU5NzYwNjE3IEwyMi4yNjM0NjIxLDE3Ljc4MDA3ODUgTDIyLjk4NDA3MjIsMTcuNzgwMDc4NSBDMjMuNTQ5MTEyLDE2LjMxMTM2ODEgMjQuOTU4NTY4OSwxNS4yNjY5NzQzIDI2LjYwOTI4OTYsMTUuMjY2OTc0MyBDMjguMjU3ODc2NSwxNS4yNjY5NzQzIDI5LjY2NzMzMzQsMTYuMzExMzY4MSAzMC4yMzM0NDY2LDE3Ljc4MDA3ODUgWiIgaWQ9InBhdGgtMSI+PC9wYXRoPgogICAgICAgIDxwYXRoIGQ9Ik02LjgzODgxNzI1LDAuNTc4OTI5ODEgQzcuMjg0Mjk4NTksMC41Nzg5Mjk4MSA3LjY0NDA2ODIxLDAuOTQ1MDQ4MjA4IDcuNjQ0MDY4MjEsMS4zOTM3MDQ1OCBMNy42NDQwNjgyMSw0LjgxNTc1ODY0IEw5LjYyMjgwNjk1LDQuODE1NzU4NjQgQzEwLjA2OTM0NjIsNC44MTU3NTg2NCAxMC40MjkxMTcxLDUuMTgwODE1MjQgMTAuNDI5MTE3MSw1LjYzMDUyODI0IEMxMC40MjkxMTcxLDYuMDgxMzAwNDQgMTAuMDY3MjMwNCw2LjQ0NTMwMzAyIDkuNjIyODA2OTUsNi40NDUzMDMwMiBMMy4wNjk2ODk4Myw2LjQ0NTMwMzAyIEMyLjYyNDIwOTc4LDYuNDQ1MzAzMDIgMi4yNjQ0Mjc0OSw2LjA4MTMwMDQ0IDIuMjY0NDI3NDksNS42MzA1MjgyNCBDMi4yNjIwOTQxMyw1LjE4MzI4NjczIDIuNjIyNDUyMiw0LjgxODY2ODU1IDMuMDY5Njg5ODMsNC44MTU3NTg2NCBMNi4wMzI1MDgzNyw0LjgxNTc1ODY0IEw2LjAzMjUwODM3LDEuMzkzNzA0NTggQzYuMDMxMzgxOTEsMS4xNzg3MzMzNyA2LjExNTcwMDc1LDAuOTcyMTE2ODM3IDYuMjY2OTEzOSwwLjgxOTMxNDIzNCBDNi40MTgxMjcwNCwwLjY2NjUxMTYzMiA2LjYyMzg0NzMzLDAuNTgwMDQyMDQyIDYuODM4ODE3MjUsMC41Nzg5Mjk4MSBaIE0xLjc1MzM1MjY0LDIuMjA5NTI2OTMgTDEuNzUzMzUyNjQsMi4yMDg0NzkzNiBDMS4zMDc4NzI1OSwyLjIwODQ3OTM2IDAuOTQ3MDMyMjQ5LDEuODQ0NDY5MDMgMC45NDcwMzIyNDksMS4zOTM3MDQ1OCBDMC45NDU5MTc5NDgsMS4xNzg3MzMzNyAxLjAzMDIzNjUzLDAuOTcyMTE2ODM3IDEuMTgxNDQ5NTUsMC44MTkzMTQyMzQgQzEuMzMyNjYyNDMsMC42NjY1MTE2MzIgMS41MzgzODI3MiwwLjU4MDA0MjA0MiAxLjc1MzM1MjY0LDAuNTc4OTI5ODEgTDQuMTE2MTk5NDgsMC41Nzg5Mjk4MSBDNC41NjE2ODA4MiwwLjU3ODkyOTgxIDQuOTIxNDUxNzQsMC45NDM5ODc3MDggNC45MjE0NTE3NCwxLjM5NDc1MjE1IEM0LjkyMTQ1MTc0LDEuODQ0NDY5MDMgNC41NjA2MjI5MSwyLjIwOTUyNjkzIDQuMTE2MTk5NDgsMi4yMDk1MjY5MyBMMS43NTMzNTI2NCwyLjIwOTUyNjkzIFogTTEuNzc5ODA2OTUsNS42MzA1MjgyNCBMMS43Nzg3NDkwNCw1LjYzMDUyODI0IEMxLjc3ODc0OTA0LDYuMDgxMzAwNDQgMS40MTc5MjAyMSw2LjQ0NTMwMzAyIDAuOTczNDk3MTY5LDYuNDQ1MzAzMDIgTDAuOTE5NTMxNTMyLDYuNDQ1MzAzMDIgQzAuNDc0MDUwODM3LDYuNDQ1MzAzMDIgMC4xMTQyNjg5NzksNi4wODEzMDA0NCAwLjExNDI2ODk3OSw1LjYzMDUyODI0IEMwLjExMzE1NDYxNCw1LjQxNTU1ODMyIDAuMTk3NDczMjEyLDUuMjA4OTQ2OTYgMC4zNDg2ODYyMjcsNS4wNTYxNDMwNiBDMC40OTk4OTkyNDMsNC45MDMzNDA0NiAwLjcwNTYxOTY1Nyw0LjgxNjg3MDg3IDAuOTIwNTg5NzA0LDQuODE1NzU4NjQgTDAuOTc0NTU1MzQxLDQuODE1NzU4NjQgQzEuNDIwMDM2MDQsNC44MTU3NTg2NCAxLjc3OTgwNjk1LDUuMTgxODczMTYgMS43Nzk4MDY5NSw1LjYzMDUyODI0IFoiIGlkPSJwYXRoLTMiPjwvcGF0aD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJwaGFzZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0ibmV3LTUuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTU4OS4wMDAwMDAsIC00NDYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJHcm91cC01IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1ODkuMDAwMDAwLCA0NDYuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMTMtQ29weSI+CiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9ImRlbGl2ZXJ5LXRvbW9yb3ciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAtMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwLTMiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hc2sgaWQ9Im1hc2stMiIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iQ2xpcC0yIj48L2c+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iRmlsbC0xIiBmaWxsPSIjNEE0QTRBIiBtYXNrPSJ1cmwoI21hc2stMikiIHBvaW50cz0iLTYuNDY2NDY2NDcgMjkuNjA5MjQ1MSA0MC4yNTYzNTMzIDI5LjYwOTI0NTEgNDAuMjU2MzUzMyAtNi40NjY0NiAtNi40NjY0NjY0NyAtNi40NjY0NiI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICAgICAgICAgIDxnIGlkPSJHcm91cC02IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjAwMDAwMCwgNS4xNzMxNzMpIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTQiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNwYXRoLTMiPjwvdXNlPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXNrPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPGcgaWQ9IkNsaXAtNSI+PC9nPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IkZpbGwtNCIgZmlsbD0iIzRBNEE0QSIgbWFzaz0idXJsKCNtYXNrLTQpIiBwb2ludHM9Ii02LjM1MjE5NzU0IDEyLjkxMTc2OTUgMTYuODk1NTc3MSAxMi45MTE3Njk1IDE2Ljg5NTU3NzEgLTUuODg3NTQxODMgLTYuMzUyMTk3NTQgLTUuODg3NTQxODMiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
              alt="ship"
            />
            <p style={{ fontFamily: "regular" }}>
              Delivery by 7th Dec | <span style={{ color: "green" }}>FREE</span>
            </p>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <p style={{ float: "left", fontFamily: "light" }}>Quantity:</p>{" "}
              &nbsp;
            </div>

            <div>
              <Select onChange={guess} size="xs">
                <option selected value="1">
                  1
                </option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </Select>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "30px",
              fontFamily: "regular",
              width: "50%",
              justifyContent: "space-between",
            }}
          >
            <div className="Wishlist" onClick={handleHeart}>
              {heart ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{ display: "inline", width: "30px" }}
                    src="https://cliply.co/wp-content/uploads/2019/07/391907100_HEART_400px.gif"
                    alt="heart"
                  />
                  <p>Added to wishlist</p>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // width: "50px",
                    // backgroundColor:"red"
                  }}
                >
                  <img
                    style={{ display: "inline", width: "30px" }}
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMiAyMEMxMiAyMCAyMSAxMy41OTkzIDIxIDguODc4NzlDMjEgMy40MzgyIDEzLjYzNjQgMS42NzggMTIgOC4zMTg3M0MxMC4zNjM2IDEuNjc4IDMgMy4zNTgxOSAzIDguODc4NzlDMyAxMy41OTkzIDEyIDIwIDEyIDIwWiIgc3Ryb2tlPSIjMjEyMTIxIiBzdHJva2Utd2lkdGg9IjEuMjUiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    alt="heart"
                  />
                  <p>Save to wishlist</p>
                </div>
              )}
            </div>
            <div style={{ alignItem: "center" }}>
              <Button
                onClick={() => {
                  handleDelete(id);
                }}
                size="s"
                style={{ padding: "5px" }}
                colorScheme="red"
              >
                <DeleteIcon /> &nbsp; Remove
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartdetails;
