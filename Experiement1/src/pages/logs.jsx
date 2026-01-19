import React from 'react'
import { logs } from '../data/log'

export const Logs = () => {

  const highCarbon = logs.filter(
    log => log.carbon >= 4
  )

  return (
    <div>
      <h2>High Carbon Activities more than 4</h2>

      {highCarbon.map((log, index) => (
        <p key={index}>
          {log.activity} - {log.carbon} kg
        </p>
      ))}
    </div>
  )
}

export const LowCarbon = () => {
  const LowCarbon = logs.filter(
    logs =>logs.carbon <=3 
  )
  return (
    <div>
      <h2>Low Carbon Activities less than 3</h2>

      {logs.map((log,index)=>{
        return (
          <p>
            {log.activity} - {log.carbon} kg
          </p>
        )
      })}
    </div>
  )
}


