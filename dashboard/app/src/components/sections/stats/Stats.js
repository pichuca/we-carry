import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar } from 'recharts';
import ClearFix from '../../commons/clear-fix/ClearFix';

import './Stats.css';

// Charts
import SimpleScatterChart from '../../charts/simple-scatter-chart/SimpleScatterChart';


const data = [
  {name: 'Page A', uv: 590, pv: 800, amt: 1400},
  {name: 'Page B', uv: 868, pv: 967, amt: 1506},
  {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
  {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
  {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
  {name: 'Page F', uv: 1400, pv: 680, amt: 1700}
];

const SimpleLineChart = () => {
    	return (<LineChart width={450} height={250} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>);
}

const LineBarAreaComposedChart = () => {
  	return (
    	<ComposedChart width={450} height={250} data={data}
            margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
          <Bar dataKey='pv' barSize={20} fill='#413ea0' />
          <Line type='monotone' dataKey='uv' stroke='#ff7300' />
       </ComposedChart>
    );
}

class Stats extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Estadísticas</h1>
        <div className="charts-wrapper">
          <div className="left">
            <SimpleLineChart />
            <LineBarAreaComposedChart />
          </div>
          <div className="right">
            <SimpleScatterChart className="scatter" />
          </div>
          <ClearFix />
        </div>
      </React.Fragment>
    );
  }
}

export default Stats;
