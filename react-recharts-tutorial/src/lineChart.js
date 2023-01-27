import {
    LineChart, 
    Line, 
    XAxis, 
    YAxis, 
    CartesianGrid, 
    Tooltip, 
    ResponsiveContainer
  } from "recharts";

export default function Chart({ data }) {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="priceUsd" stroke="#8884d8" activeDot={{ r: 8 }}/>
            </LineChart>
        </ResponsiveContainer>
    );
}
