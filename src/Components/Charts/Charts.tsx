import React from "react";
import { ChartBar } from "../ChartBar/ChartBar";
import {DataWay} from '../Interfaces/index'
import './chart.css'
interface Chartsinterface{
    dataPoints:DataWay[]
}

export const Charts:React.FC<Chartsinterface>=({dataPoints})=>{
      const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
    return(
        <div className="chartElement">

        <div className="chart">
        {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
        </div>
        </div>
    )
}