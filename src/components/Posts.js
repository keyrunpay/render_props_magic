import React from "react";
import { urls } from "../helper";
import Requester from "./Requester";

function Posts() {
  return (
    <Requester
      url={urls.posts}
      render={(loading, data, error) => (
        <React.Fragment>
          {loading && <p className="loading">Loading Posts ....</p>}
          {data &&
            data.map((item) => {
              return (
                <PostsPills key={item.id} title={item.title} body={item.body} />
              );
            })}
        </React.Fragment>
      )}
    />
  );
}

const PostsPills = ({ title, body }) => (
  <div className="item-wrap">
    <h3 className="post-title">{title}</h3>
    <p className="post-body">{body}</p>
  </div>
);

export default Posts;
