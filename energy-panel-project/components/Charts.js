"use client";

import { LineChart } from "@mui/x-charts";

const Charts = () => {
  return (
    <div className="info">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
        width={500}
        height={300}
      />
    </div>
  );
};

export default Charts;
