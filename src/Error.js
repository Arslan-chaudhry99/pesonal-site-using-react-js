import React from "react";
import { FaHome } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
const Error = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <img src="./images/error.png" alt="" />
        <LinkContainer to="/">
          <button className="btn btn-danger" style={{ fontSize: "25px" }}>
            <FaHome />{" "}
          </button>
        </LinkContainer>
      </div>
    </>
  );
};

export default Error;
