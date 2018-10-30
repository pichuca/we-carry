import React, { Component } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ComposedChart, Area, Bar } from 'recharts';
import MediaQuery from 'react-responsive';
import ClearFix from '../../commons/clear-fix/ClearFix';

import './Stats.css';

// Charts
// import SimpleScatterChart from '../../charts/simple-scatter-chart/SimpleScatterChart';

// TODO: add real DATA set.
const data = [
  {name: 'Page A', uv: 590, pv: 800, amt: 1400},
  {name: 'Page B', uv: 868, pv: 967, amt: 1506},
  {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
  {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
  {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
  {name: 'Page F', uv: 1400, pv: 680, amt: 1700}
];

const SimpleLineChart = (props) => {
    	return (<LineChart width={props.width} height={props.height} data={data}
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

const LineBarAreaComposedChart = (props) => {
  	return (
    	<ComposedChart width={props.width} height={props.height} data={data}
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

/**
 * Divices width and height for charts.
 */

// Large.
const largeWidth = 650;
const largeHeight = 450;

// Small.
const smallWidth = 325;
const smallHeight = 225;

class Stats extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Estadísticas</h1>
        <div className="charts-wrapper">
          {/* Large */}
          <MediaQuery query="(min-width: 1350px)">
            <div className="left">
              <SimpleLineChart width={largeWidth} height={largeHeight} />
            </div>
            <div className="right">
              <LineBarAreaComposedChart width={largeWidth} height={largeHeight} />
            </div>
          </MediaQuery>

          {/* Medium */}
          <MediaQuery query="(min-width: 730px)">
            <div className="charts-inner-wrapper">
              <SimpleLineChart width={largeWidth} height={largeHeight} />
              <LineBarAreaComposedChart width={largeWidth} height={largeHeight} />
            </div>
          </MediaQuery>

          {/* Small */}
          <MediaQuery query="(max-width: 729px)">
            <div className="charts-inner-wrapper">
              <SimpleLineChart width={smallWidth} height={smallHeight} />
              <LineBarAreaComposedChart width={smallWidth} height={smallHeight} />
            </div>
          </MediaQuery>
          {/* <SimpleScatterChart className="scatter" /> */}

          <ClearFix />
        </div>
      </React.Fragment>
    );
  }
}

export default Stats;
