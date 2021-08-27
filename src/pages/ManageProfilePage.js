import React from "react";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileManageInfo from "../components/profile/ProfileManageInfo";
import ProfileManageList from "../components/profile/ProfileManageList";
import "./ManageProfilePage.css";

function ManageProfilePage() {
  return (
    <div className="manageProfilePage">
      <ProfileHeader />
      <div className="profileManageInfo__pic">
        <img
          src="https://images.unsplash.com/photo-1627673081968-c1f6204b0a14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          alt=""
        />
      </div>
      <h5>@davide.demango</h5>
      <ProfileManageList />
    </div>
  );
}

export default ManageProfilePage;
