import React, { useEffect } from "react";
import { SideNav } from "../cmps/SideNav";
import { StoryTopBar } from "../cmps/StoryTopBar";
import { PostList } from "../cmps/PostList.jsx";
import { mockPosts } from "../mockData/mockPosts.js";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export function MainPage() {
  const loggedInUser = useSelector((storeState) => storeState.userModule.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) navigate("/instamode/login");
  }, [loggedInUser, navigate]);

  if (!loggedInUser) return null;

  return (
    <section className="main-page">
      <SideNav />
      <div className="main-content">
        <Outlet/>
      </div>
    </section>
  );
}
