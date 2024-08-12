import React, { useState } from "react";
import UserStyle from "./users.module.css";
import Search from "./search";
import Navbar from "../Navbar";
import Loader from "../../Same/Loader";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchhandler = (text) => {
    if (text.trim() === "") {
      setUsers([]);
      setLoading(false);
      return;
    }
    setLoading(true);

    fetch(`https://api.github.com/search/users?q=${text}`)
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.items || []);
        setLoading(false);
      });
  };

  const clearhandler = () => {
    setUsers([]);
    setLoading(false);
  };

  const navigate = useNavigate();

  const goToProfile = (username) => {
    setTimeout(() => {
      navigate(`/profile/${username}`);
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <Search
        onsearch={searchhandler}
        onclear={clearhandler}
        setLoading={setLoading}
      />
      <div className={UserStyle.container}>
        {loading ? (
          <Loader fullScreen={false} /> // Loader only in the list area
        ) : Array.isArray(users) && users.length > 0 ? (
          users.map((item) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.1,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 20,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              className={UserStyle.user}
              key={item.id}
            >
              <img src={item.avatar_url} alt="Profile" />
              <h3>{item.login}</h3>
              <div>
                <a href={item.html_url}
                  target="_blank"
                  rel="noopener noreferrer">
                  <i className="fa-brands fa-github fa-2x"></i>
                </a>

                <button
                  onClick={() => goToProfile(item.login)}
                  className={UserStyle.button}
                >
                  Profile details
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default Users;
