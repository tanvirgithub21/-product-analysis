import React, { useContext, useEffect, useState } from "react";
import "./Reviews.css";
import Card from "../Card/Card";
import { usersContext } from "../../App";



const Reviews = () => {

  const {users} = useContext(usersContext)
  
  return (
    <>
      <h3 className="text-center mt-7 font-semibold text-2xl">Total Reviews: {users.length}</h3>
      <div className="ReviewsBox md:grid-cols-1">
        {users.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
