import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Progress, Typography } from "antd";

export default function LeetCodeProgress() {
  const { Title } = Typography;
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:8000/leetcode/").then((res) => {
      setData(JSON.parse(res.data));
    });
  }, []);

  return (
    <div>
      <Title level={3} className="component-header" style={{ color: "white" }}>
        Leetcode Progress Tracker
      </Title>
      {data ? (
        <Progress
          style={{
            color: "white",
            marginRight: 10,
          }}
          strokeColor="green"
          className="flex-item"
          type="circle"
          percent={(data.easy_solved / data.total_easy).toFixed(2)}
          format={() => `${data.easy_solved} Easy`}
        />
      ) : null}
      {data ? (
        <Progress
          style={{
            color: "white",
            marginRight: 10,
          }}
          strokeColor="orange"
          className="flex-item"
          type="circle"
          percent={(data.medium_solved / data.total_medium).toFixed(2)}
          format={() => `${data.medium_solved} Medium`}
        />
      ) : null}
      {data ? (
        <Progress
          style={{
            color: "white",
          }}
          strokeColor="red"
          className="flex-item"
          type="circle"
          percent={(data.hard_solved / data.total_hard).toFixed(2)}
          format={() => `${data.hard_solved} Hard`}
        />
      ) : null}
    </div>
  );
}
