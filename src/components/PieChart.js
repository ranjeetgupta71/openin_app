import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const PieChart = () => {
  const data = {
    labels: ["Basic Trees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [20, 10, 40],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  const total = data.datasets[0].data.reduce((sum, value) => sum + value, 0);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = data.labels[context.dataIndex];
            const value = data.datasets[0].data[context.dataIndex];
            const percentage = ((value / total) * 100).toFixed(0);
            return `${label}: ${percentage}%`;
          },
        },
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    layout: {
      padding: 0,
    },
    responsive: true,
    maintainAspectRatio: false,
    spacing: 0,
  };

  const [selectedMonthRange, setSelectedMonthRange] = useState("May-June");

  const handleMonthRangeChange = (event) => {
    setSelectedMonthRange(event.target.value);
  };

  return (
    <div
      style={{
        position:"relative",
        right:"-12px",
        top:"10px",
        textAlign: "center",
        backgroundColor: "white",
        color: "black",
        width: "500px",
        height: "269px",
        margin: "10px",
        padding: "20px",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h2 style={{ margin: 0 }}>Top Products</h2>
          <div style={{ marginLeft: "100px" }}>
            <select
              id="monthRangePicker"
              value={selectedMonthRange}
              onChange={handleMonthRangeChange}
            >
              <option value="May-June">May-June 2021</option>
              <option value="June-July">June-July 2021</option>
              {/* Add more options for other month ranges */}
            </select>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1 }}>
          <Pie data={data} options={options} />
        </div>
        <div style={{ flex: 1, marginLeft: "20px", textAlign: "left" }}>
          {data.labels.map((label, index) => (
            <p key={label}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  backgroundColor: data.datasets[0].backgroundColor[index],
                  borderRadius: "50%",
                  marginRight: "5px",
                }}
              ></span>
              {label}
              <br />
              <span style={{ fontSize: "12px" }}>
                {((data.datasets[0].data[index] / total) * 100).toFixed(0)}%
              </span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PieChart;
