const ctx = document.getElementById("myChart").getContext("2d");

      const pieChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Data", "Data", "Data", "Data"],
          datasets: [
            {
              label: "Transactions",
              data: [5000, 5000, 5000, 5000],
              backgroundColor: ["#1daba4", "#174f54"],
              borderWidth: 1,
              borderColor: "#1e293b",
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "70%",
          plugins: {
            legend: { display: false },
          },
        },
        plugins: [
          {
            id: "centerText",
            beforeDraw: function (chart) {
              const { width } = chart;
              const { height } = chart;
              const ctx = chart.ctx;
              ctx.restore();

              const text = "12.30%";
              const subText = "Accuracy";
              ctx.font = "bold 24px Poppins";
              ctx.fillStyle = "#ffffff";
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText(text, width / 2, height / 2 - 10);

              ctx.font = "14px sans-serif";
              ctx.fillStyle = "#cbd5e1";
              ctx.fillText(subText, width / 2, height / 2 + 15);

              ctx.save();
            },
          },
        ],
      });

      const ctx2 = document.getElementById("lineChart").getContext("2d");

      const lineChart = new Chart(ctx2, {
        type: "line",
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "Transactions",
              data: [2834, 1982, 1240, 2650, 1022, 2875, 1320],
              borderColor: "#0ea5e9",
              backgroundColor: "rgba(14, 165, 233, 0.2)",
              fill: false,
              tension: 0.4,
              pointBackgroundColor: "#0ea5e9",
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "#e2e8f0",
              },
              grid: {
                color: "#334155",
              },
            },
            x: {
              ticks: {
                color: "#e2e8f0",
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      const ctx3 = document.getElementById("protectionChart").getContext("2d");

      const protectionChart = new Chart(ctx3, {
        type: "line",
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "Transactions",
              data: [2834, 1982, 1240, 2650, 1022, 2875, 1320],
              borderColor: "#0ea5e9",
              backgroundColor: "rgba(14, 165, 233, 0.2)",
              fill: false,
              tension: 0.4,
              pointBackgroundColor: "#0ea5e9",
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "#e2e8f0",
              },
              grid: {
                color: "#334155",
              },
            },
            x: {
              ticks: {
                color: "#e2e8f0",
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      const ctx4 = document.getElementById("leftChart").getContext("2d");

      const leftChart = new Chart(ctx4, {
        type: "line",
        data: {
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "Transactions",
              data: [2834, 1982, 1240, 2650, 1022, 2875, 1320],
              borderColor: "#0ea5e9",
              backgroundColor: "rgba(14, 165, 233, 0.2)",
              fill: true,
              tension: 0.4,
              pointBackgroundColor: "#0ea5e9",
              pointRadius: 0,
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                color: "#e2e8f0",
              },
              grid: {
                color: "#334155",
              },
            },
            x: {
              ticks: {
                color: "#e2e8f0",
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      const ctxRight = document.getElementById("rightChart").getContext("2d");

      const rightChart = new Chart(ctxRight, {
        type: "scatter",
        data: {
          datasets: [
            {
              label: "Fraud Events",
              data: [
                { x: 10, y: 20 },
                { x: 15, y: 5 },
                { x: 30, y: 12 },
                { x: 25, y: 18 },
                { x: 40, y: 8 },
              ],
              backgroundColor: "#ef4444",
              pointRadius: 5,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: "linear",
              position: "bottom",
              ticks: {
                color: "#e2e8f0",
              },
              grid: {
                color: "#334155", 
              },
            },
            y: {
              ticks: {
                color: "#e2e8f0",
              },
              grid: {
                color: "#334155",
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              enabled: true,
            },
          },
        },
      });

      const ctx5 = document.getElementById("confidenceChart").getContext("2d");

      const confidenceScore = new Chart(ctx5, {
        type: "doughnut",
        data: {
          labels: ["Data", "Data"],
          datasets: [
            {
              label: "Transactions",
              data: [80, 20],
              backgroundColor: ["#1daba4", "#174f54"],
              borderWidth: 1,
              borderColor: "#1e293b",
            },
          ],
        },
        options: {
          responsive: true,
          cutout: "70%",
          plugins: {
            legend: { display: false },
          },
        },
        plugins: [
          {
            id: "centerText",
            beforeDraw: function (chart) {
              const { width } = chart;
              const { height } = chart;
              const ctx = chart.ctx;
              ctx.restore();

              const text = "80%";
              ctx.font = "bold 24px Poppins";
              ctx.fillStyle = "#ffffff";
              ctx.textAlign = "center";
              ctx.textBaseline = "middle";
              ctx.fillText(text, width / 2, height / 2 - 10);

              ctx.font = "14px sans-serif";
              ctx.fillStyle = "#cbd5e1";

              ctx.save();
            },
          },
        ],
      });