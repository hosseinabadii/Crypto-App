import React from "react";
import { Result, Typography } from "antd";

const FetchError = () => {
  return (
    <Result
      status="error"
      title="Failed to fetch data"
      subTitle="Please check your internet connection."
    />
  );
};

export default FetchError;
