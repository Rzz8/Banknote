import React, { useState } from "react";
import Axios from "axios";

const PostForm = (props) => {
  const [mlResults, setMlResults] = useState({prediction: ""})
  const [data, setData] = useState({
    variance: null,
    skewness: null,
    curtosis: null,
    entropy: null,
  });

  const ChangeHandler = (e) => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post("https://banknote-react-fastapi.herokuapp.com/predict", {
      variance: data.variance,
      skewness: data.skewness,
      curtosis: data.curtosis,
      entropy: data.entropy
    }).then((res) => {
      setMlResults(res.data);
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          onChange={ChangeHandler}
          id="variance"
          type="number"
          value={data.variance}
        ></input>
        <input
          onChange={ChangeHandler}
          id="skewness"
          type="number"
          value={data.skewness}
        ></input>
        <input
          onChange={ChangeHandler}
          id="curtosis"
          type="number"
          value={data.curtosis}
        ></input>
        <input
          onChange={ChangeHandler}
          id="entropy"
          type="number"
          value={data.entropy}
        ></input>
        <button>Submit</button>
        {mlResults.prediction}
      </form>
    </div>
  );
};

export default PostForm;
