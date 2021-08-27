import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import "./ProfileLinkMaker.css";
import ImageIcon from "@material-ui/icons/Image";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import FolderIcon from "@material-ui/icons/Folder";
import { FaTimes, FaImage, FaClock, FaFolderOpen } from "react-icons/fa";

function ProfileLinkMaker() {
  const [toggleState, setToggleState] = useState(0);

  const handleTabs = (e, val) => {
    setToggleState(val);
  };

  return (
    <div className="profileLinkMaker">
      <AppBar position="static">
        <Tabs className="tabs" value={toggleState} onChange={handleTabs}>
          <Tab label="Link" />
          <Tab label="EMBED Music" />
        </Tabs>
      </AppBar>
      <TabPanel value={toggleState} index={0}></TabPanel>
      <TabPanel value={toggleState} index={1}></TabPanel>
    </div>
  );
}

function TabPanel({ value, index }) {
  return (
    <div className="tabPanel">
      {value === index && (index === 0 ? <LinkAdder /> : <MusicEmbedAdder />)}
    </div>
  );
}

function MusicEmbedAdder() {
  return (
    <div className="musicEmbedAdder">
      <div className="input_wrapper">
        <select name="" id="">
          <option value="">Select Music Service</option>
          <option value="0">--------------------</option>
          <option value="EMBED_APPLE">Apple Music</option>
          <option value="EMBED_BEATSTARS">Beatstars</option>
          <option value="EMBED_MIXCLOUD">Mixcloud</option>
          <option value="EMBED_SOUNDCLOUD">Soundcloud</option>
          <option value="EMBED_SPOTIFY">Spotify</option>
          <option value="EMBED_TIDAL">Tital</option>
        </select>
        <input type="link" placeholder="https://example.com/song" />
      </div>
      <div className="linkAdder__footer">
        <div className="buttons-wrapper">
          <button>
            <FaClock />
          </button>
          <button>
            <FaFolderOpen />
          </button>
        </div>
        <button>Add Embed</button>
      </div>
    </div>
  );
}

function LinkAdder() {
  const [linkTitle, setLinkTitle] = useState("");
  const [linkUrl, setLinkUrl] = useState("");
  const [linkImage, setLinkImage] = useState(null);
  const [fromDate, setFromDate] = useState("Aug 26 at 12:55 AM");
  const [toDate, setToDate] = useState("Aug 26 at 12:55 AM");
  const [inGroup, setInGroup] = useState("group1");

  const handleAddNewLink = (event) => {
    alert(linkTitle);
    alert(linkUrl);
    event.preventDefault();
  };

  const setLinkImageHandler = (event) => {
    setLinkImage(URL.createObjectURL(event.target.files[0]));
  };

  const imageRemoveHandler = () => {
    setLinkImage(null);
  };

  return (
    <div className="linkAdder">
      <form onSubmit={handleAddNewLink}>
        <div className="imageUploadView__wrapper">
          {linkImage ? (
            <button onClick={imageRemoveHandler}>
              <FaTimes />
            </button>
          ) : (
            ""
          )}

          {linkImage ? <img src={linkImage} /> : ""}
        </div>
        <div className="righthandconent__wrapper">
          <div className="textWrapper">
            <input
              type="text"
              placeholder="Title Example"
              onChange={(e) => setLinkTitle(e.target.value)}
            />
            <input
              type="url"
              placeholder="https://example.com"
              onChange={(e) => setLinkUrl(e.target.value)}
              required
            />
            <div className="dateWrapper">
              {fromDate !== "" ? <span>{"From " + fromDate}</span> : ""}
              {toDate !== "" ? <span>{"To " + toDate}</span> : ""}
            </div>
            <div className="ingroupWarapper">
              {inGroup !== "" ? <span>{"In Group " + inGroup}</span> : ""}
            </div>
          </div>
          <div className="buttonsWrapper">
            <div className="left_btns">
              <div className="imageUploadWrapper">
                <input
                  type="file"
                  id="imgupload"
                  onChange={(e) => setLinkImageHandler(e)}
                />
                <label for="imgupload">
                  <FaImage />
                </label>
              </div>

              <button>
                <FaClock />
              </button>
              <button>
                <FaFolderOpen />
              </button>
            </div>
            <div className="right_btns">
              <button type="submit">Add Link</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ProfileLinkMaker;
