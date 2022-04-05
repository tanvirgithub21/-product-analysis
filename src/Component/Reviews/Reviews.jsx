import React from "react";
import "./Reviews.css";
import Card from "../Card/Card";
import useLodeData from "../CustomHooks/useLodeData/useLodeData";




const Reviews = () => {


  const [users, setUsers] = useLodeData()
  
  return (
    <>
      <h3 className="text-center mt-7 font-semibold text-2xl">Total Reviews: {users.length}</h3>
      <div className="reviewsBox">
        {users.map((user) => (
          <Card user={user} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default Reviews;
