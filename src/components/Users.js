import React from "react";
import { urls } from "../helper";
import Requester from "./Requester";

export default function Users() {
  return (
    <Requester
      url={urls.users}
      render={(loading, data, error) => (
        <React.Fragment>
          {loading && <p className="loading">Loading Users...</p>}
          {error && (
            <p className="error">
              Err : {error.message || JSON.stringify(error)}
            </p>
          )}
          {data &&
            data.data.map((item) => {
              return (
                <UserPills
                  key={item.id}
                  image={item.avatar}
                  name={item.first_name + " " + item.last_name}
                  email={item.email}
                />
              );
            })}
        </React.Fragment>
      )}
    />
  );
}

const UserPills = ({ image, name, email }) => (
  <div className="item-wrap">
    <div className="user-item">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="desc">
        <p>{name}</p>
        <p>
          <span>{email}</span>
        </p>
      </div>
    </div>
  </div>
);
