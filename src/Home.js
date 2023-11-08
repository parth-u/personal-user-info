import React, { useState } from "react";
import "./Home.css";
import Stack from "@mui/material/Stack";
import prof from "./components/prof.jpg";
import logo1 from "./components/pimslogo.png";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

function AvatarModal({ isOpen, closeAvatarModal, avatarSrc }) {
  if (!isOpen) return null;

  return (
    <div className="avatar-modal-overlay">
      <div className="avatar-modal">
        <Avatar className="modal-avatar" src={avatarSrc} />
        <button className="modal-close" onClick={closeAvatarModal}>
          Close
        </button>
        <div className="user">
          <label className="userhead">Enter Your Details</label>
          <div className="userrow">
            <label className="usertitle">Name : </label>
            <input className="i1" type="text" />
          </div>
          <div className="userrow">
            <label className="usertitle">Email : </label>
            <input className="i2" type="email" />
          </div>
          <div className="userrow">
            <label className="usertitle">Phone : </label>
            <input className="i3" type="tel" />
          </div>
          <div className="userrow">
            <label className="usertitle">DOB : </label>
            <input className="i4" type="date" />
          </div>
          <div className="userrow">
            <label className="usertitle">Address : </label>
            <textarea className="i5" id="address" name="address"></textarea>
          </div>
        </div>
        <Button variant="contained">Submit</Button>
      </div>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();

  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const openAvatarModal = () => {
    setIsAvatarModalOpen(true);
  };

  const closeAvatarModal = () => {
    setIsAvatarModalOpen(false);
  };

  return (
    <div>
      <div className="tophome">
        <h3>Personal Information Management System</h3>
        <img className="logo" src={logo1} alt="" />

        <Stack className="topsign" spacing={2} direction="row">
          <Avatar className="topavatar" src={prof} onClick={openAvatarModal} />
          <button
            className="topbutton"
            onClick={() => navigate("/")}
            size="small"
            variant="contained"
          >
            Login
          </button>
        </Stack>
      </div>

      <AvatarModal
        isOpen={isAvatarModalOpen}
        closeAvatarModal={closeAvatarModal}
        avatarSrc={prof}
      />
    </div>
  );
}

export default Home;
