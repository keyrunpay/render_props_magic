import React from "react";
import Axios from "axios";

export default function Requester({ url, render }) {
  const [state, setstate] = React.useState({
    data: null,
    loading: false,
    error: false,
  });

  React.useEffect(() => {
    const fetchItem = () => {
      setstate({ ...state, loading: true });
      Axios.get(url)
        .then((res) => {
          setstate({ data: res.data, loading: false, error: false });
        })
        .catch((err) => {
          setstate({ data: null, loading: false, error: err });
        });
    };

    fetchItem();
    // eslint-disable-next-line
  }, [true]);

  return (
    <React.Fragment>
      {render(state.loading, state.data, state.error)}
    </React.Fragment>
  );
}
