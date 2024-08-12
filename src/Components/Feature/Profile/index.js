import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import styleProfile from "./profile.module.css";
import Loader from "../../Same/Loader";
import Navbar from "../Navbar";

const Profile = () => {
  const { username } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (username) {
      fetch(`https://api.github.com/users/${username}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((error) => console.error("Error fetching user:", error));
    }
  }, [username]);

  return (
    <>
      <Navbar showBackButton={true} />
      <div className={styleProfile.profilecontainer}>
        {user ? (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className={styleProfile.profilecard}
            >
              <img
                src={user.avatar_url}
                alt="Profile"
                className={styleProfile.profileavatar}
              />
              <div className={styleProfile.profileinfo}>
                <h1>{user.login}</h1>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
                <div className={styleProfile.profilestats}>
                  <h3>Followers: {user.followers}</h3>
                  <h3>Following: {user.following}</h3>
                  <h3>Repos: {user.public_repos}</h3>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <Loader fullScreen={false} />
        )}
      </div>
    </>
  );
};

export default Profile;
