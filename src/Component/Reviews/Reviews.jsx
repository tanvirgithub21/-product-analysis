import React, { useEffect, useState } from "react";
import "./Reviews.css";
import Card from "../Card/Card";

const userUrl =
  "https://raw.githubusercontent.com/tanvirgithub21/ass-9-data/gh-pages/MOCK_DATA.json";

const Reviews = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(userUrl)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h3 className="text-center mt-7 font-semibold text-2xl">Total Reviews: {users.length}</h3>
      <div className="ReviewsBox ">
        {users.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
