import React from 'react';
import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

import { data } from './BarChaart.logic';


export const BarChaart: React.FC = () => {
    return (
        <BarChart width={790} height={329} data={data} >
            <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5BB9FF" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#7467CA" stopOpacity={1} />
                </linearGradient>
            </defs>
            <XAxis dataKey="meses" />
            <YAxis dataKey="matricula" />
            {/* <Tooltip /> */}
            <Bar dataKey="matricula" fill="url(#colorUv)" radius={10} label={{ fill: "#fff", position: "center", fontWeight: "900" }} />
            <Legend />
        </BarChart>
    )
}