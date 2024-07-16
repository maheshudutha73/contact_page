import React from "react";
import "./model.css";
// import PersonIcon from "@mui/icons-material/Person";
// import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
const Model = ({ setaddcontact, handlename, handlenumber, savecontact }) => {
  return (
    <section className="Modeloverlay">
      <div className="modelContainer">
        <button className="xbtn" onClick={() => setaddcontact(false)}>
          X
        </button>
        <form>
          <input
            type="text"
            className="inputbox"
            placeholder="Enter Contact Name"
            onChange={handlename}
            required
          />
          <input
            type="text"
            className="inputbox"
            placeholder="Enter Contact Number"
            onChange={handlenumber}
            required
          />
          <div>
            <button className="savebtn" onClick={savecontact}>
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Model;
