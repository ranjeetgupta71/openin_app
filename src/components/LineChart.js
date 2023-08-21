import React from "react";
import { Line } from "react-chartjs-2";
import { lineChart } from "./../constants/dataPoints";
import Chart from "chart.js/auto";
import './LineChart.css'

const ActivityLineChart = () => {
  const dataPoints = lineChart;

  const data = {
    labels: dataPoints.map((point) => `Week ${point.x}`),
    datasets: [
      {
        label: "Guests",
        data: dataPoints.map((point) => point.yGuest),
        borderColor: "#36A2EB",
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
      {
        label: "Users",
        data: dataPoints.map((point) => point.yUser),
        borderColor: "#FF6384",
        fill: false,
        pointRadius: 0,
        tension: 0.4,
      },
    ],
  };

  const yGridLineColor = "rgba(0, 0, 0, 0)"; // Set y-axis grid line color to transparent

  const options = {
    scales: {
      x: {
        title: {
          display: false,
          text: "Weeks",
        },
        ticks: {
          stepSize: 100, // Display every step
          maxRotation: 0, // Rotate the labels to be horizontal
          autoSkip: true, // Automatically skip labels if too many
          maxTicksLimit: 1, // Limit the maximum number of ticks
        },
      },
      y: {
        title: {
          display: true,
          text: "Count",
        },
        beginAtZero: true,
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          usePointStyle: true,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.4,
      },
    },
    layout: {
      padding: {
        top: 20,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
        },
      },
    },
  };
  data.datasets[0].pointBackgroundColor = "#FF6384"; // Color for Number of Users
  data.datasets[0].pointBorderColor = "#FF6384"; // Color for Number of Users
  data.datasets[1].pointBackgroundColor = "#36A2EB"; // Color for Number of Guests
  data.datasets[1].pointBorderColor = "#36A2EB";
  return (
    <div
      style={{
        position:"relative",
        top:"0px",
        left:"20px",
        width: "1000px",
        height:"300px",
        background: "#EAEAEA",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h6>Activities</h6>
      <div>
        <select
          id="monthRangePicker"
          //   value={selectedMonthRange}
          //   onChange={handleMonthRangeChange}
        >
          <option value="May-June">May-June 2021</option>
          <option value="June-July">June-July 2021</option>
          {/* Add more options for other month ranges */}
        </select>
      </div >
      <Line data={data} options={options} />
    </div>
  );
};

export default ActivityLineChart;
