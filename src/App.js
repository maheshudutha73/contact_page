import "./App.css";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ContactsIcon from "@mui/icons-material/Contacts";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import HandymanIcon from "@mui/icons-material/Handyman";
import DownloadIcon from "@mui/icons-material/Download";
import DeleteIcon from "@mui/icons-material/Delete";
import Model from "./Model";
import { useState } from "react";
import Contactcard from "./Contactcard";

function App() {
  const [addcontact, setaddcontact] = useState(false);
  const [name, setname] = useState({ text: "" });
  const [number, setnumber] = useState({ text: "" });
  const [contact, setcontact] = useState([]);

  const handlename = (e) => {
    setname({
      ...name,
      text: e.target.value,
    });
  };
  const handlenumber = (e) => {
    setnumber({ ...number, text: e.target.value });
  };
  const savecontact = (e) => {
    e.preventDefault();
    let numbers = {
      contactname: name.text,
      contactnumber: number.text,
      id: new Date().getTime().toString(),
    };
    setcontact([...contact, numbers]);
    setaddcontact(false);
  };
  const handledelete = (id) => {
    const newlist = contact.filter((item) => {
      return item.id !== id;
    });
    setcontact(newlist);
  };
  const handleedit = () => {
    console.log("hi");
  };

  return (
    <section className="contact_body">
      <nav>
        <div className="title">
          <ContactsIcon className="titleicon" />
          <h1>Contacts</h1>
        </div>
        <div className="Searchbar">
          <input className="Search" type="text" placeholder="Search" />

          <SearchIcon className="SearchIcon" />
        </div>
      </nav>
      <div className="sidebarcontainer">
        <li className="sidebars">
          <ul className="sidebar">
            <span className="sideicons">
              <PermContactCalendarIcon />
              <p> Contacts</p>
            </span>
          </ul>
          <ul className="sidebar">
            <span className="sideicons">
              <SettingsBackupRestoreIcon /> <p>Frequent</p>
            </span>
          </ul>
          <ul className="sidebar">
            <span className="sideicons">
              <SystemUpdateAltIcon />
              <p>Other Contacts</p>
            </span>
          </ul>
          <ul className="sidebar">
            <span className="sideicons">
              <HandymanIcon />
              <p>Other Contacts</p>
            </span>
          </ul>
          <ul className="sidebar">
            <span className="sideicons">
              <DownloadIcon />
              <p>import</p>
            </span>
          </ul>
          <ul className="sidebar">
            <span className="sideicons">
              <DeleteIcon />
              <p>Trash</p>
            </span>
          </ul>
        </li>
      </div>
      <div className="minibody">
        {contact.length === 0 && (
          <p className="empty">No Contacts Here, Click (+) To add Contacts</p>
        )}
        <Contactcard
          contact={contact}
          handledelete={handledelete}
          handleedit={handleedit}
        />
      </div>
      <span>
        <AddCircleIcon
          className="addicon"
          onClick={() => setaddcontact(true)}
        />
      </span>

      {addcontact && (
        <Model
          setaddcontact={setaddcontact}
          handlename={handlename}
          handlenumber={handlenumber}
          savecontact={savecontact}
        />
      )}
    </section>
  );
}

export default App;
