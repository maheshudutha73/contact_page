import React from "react";
import "./contact.css";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
// import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

const Contactcard = ({ contact, handledelete, handleedit }) => {
  return contact.map((item) => {
    const { contactname, contactnumber, id } = item;
    return (
      <div className="container" key={id}>
        <AccountCircleSharpIcon className="contacticon" />
        <div className="names">
          <div className="name">{contactname}</div>
          <div className="number">{contactnumber}</div>
        </div>
        {/* <ModeEditRoundedIcon onClick={handleedit} className="editbtn" /> */}
        <DeleteRoundedIcon
          onClick={() => handledelete(id)}
          className="deletebtn"
        />
      </div>
    );
  });
};

export default Contactcard;
