import React from "react";
import { urls } from "../helper";
import Requester from "./Requester";

function Todos() {
  return (
    <Requester
      url={urls.todos}
      render={(loading, data, error) => (
        <React.Fragment>
          {loading && <p className="loading">Loading Todos ....</p>}
          {data &&
            data.map((item) => {
              return (
                <TodoPills
                  key={item.id}
                  title={item.title}
                  completed={item.completed}
                />
              );
            })}
        </React.Fragment>
      )}
    />
  );
}

const TodoPills = ({ title, completed }) => (
  <div className="item-wrap">
    <h3 className="post-title" style={{ color: completed ? "green" : "red" }}>
      {title}
    </h3>
  </div>
);

export default Todos;
