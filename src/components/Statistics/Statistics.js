import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const data = useLoaderData();
    return (

        <div>
            <div>
                <ResponsiveContainer width='80%' height={300} >
                    <LineChart data={data.data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="total" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>

            </div>
            <div>
                <ResponsiveContainer width='80%' height={300}>
                    <BarChart data={data.data}>
                        <XAxis dataKey="name" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="total" fill="#8884d8" barSize={30} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>

    );
};

export default Statistics;