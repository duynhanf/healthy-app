import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { COLORS } from '@healthy-app/utils/common-colors';

const data = [
  {
    name: '6月',
    uv: 4000,
    pv: 2400,
  },
  {
    name: '7月',
    uv: 3000,
    pv: 1398,
  },
  {
    name: '8月',
    uv: 2000,
    pv: 9800,
  },
  {
    name: '9月',
    uv: 2780,
    pv: 3908,
  },
  {
    name: '10月',
    uv: 1890,
    pv: 4800,
  },
  {
    name: '11月',
    uv: 2390,
    pv: 3800,
  },
  {
    name: '12月',
    uv: 3490,
    pv: 4300,
  },
  {
    name: '1月',
    uv: 3490,
    pv: 4300,
  },
  {
    name: '2月',
    uv: 3490,
    pv: 4300,
  },
  {
    name: '3月',
    uv: 3490,
    pv: 4300,
  },
  {
    name: '4月',
    uv: 3490,
    pv: 4300,
  },
  {
    name: '5月',
    uv: 3490,
    pv: 4300,
  },
];

const Chart = () => {
  return (
    <ResponsiveContainer>
      <LineChart width={960} height={300} data={data}>
        <CartesianGrid
          strokeDasharray="3 0"
          fill={COLORS.Dark500}
          horizontal={false}
        />
        <XAxis dataKey="name" />
        <Tooltip />
        <Line
          dataKey="pv"
          stroke={COLORS.Primary300}
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
        <Line
          dataKey="uv"
          stroke={COLORS.Secondary}
          activeDot={{ r: 8 }}
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
