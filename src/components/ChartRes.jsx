import { Box, Stack, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell ,Tooltip} from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function ChartRes() {
  return (
    <Box
    sx={{
        display:'flex',
        alignItems:"center",
        justifyContent:"space-evenly",
        flexDirection:"column",
        // backgroundColor:"black"
    }}>
    <PieChart width={400} height={300} >
      <Pie
        data={data} 
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>

    <Stack gap={2}>
        <Typography variant="h6">Vote Party:</Typography>
        <Box sx={{display:"flex",gap:3,flexWrap:"wrap"}}>
            {COLORS.map((color,i)=>(
                <Stack  key={color} alignItems="center" spacing={1}>
                    <Box sx={{width:20,height:20,background:color}}/>
                    <Typography variant="body2" sx={{opacity:0.7}}>BJP</Typography>
                </Stack>

            ))}
        </Box>
    </Stack>
    </Box>
  );
}
