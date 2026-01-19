import { logs } from '../data/log';


const Dashboard = () => {
  const totalCarbon = logs.reduce((sum, log) => {
    return sum + log.carbon;
  }, 0);
  const getNonZero=(logs)=>{
    return logs.filter(log=>log.carbon!==0)
  }
  const getCarbonColor = (carbon)=>{
    return carbon >= 4 ? "text-red-600" : "text-green-600";
  }

  const top2Logs = logs
    .slice()
    .sort((a, b) => b.carbon - a.carbon)
    .slice(0, 2);

  return (
    <div>
      <h1>Logs</h1>

      <div>Sum: {totalCarbon}</div>

      <h2>All Logs</h2>
      
      <ul>
        {getNonZero(logs).map((log) => (
          <li key={log.id}>
            <span className={`font-semibold ${getCarbonColor(log.carbon)}`} >{log.activity}</span> 
            <span className={`font-semibold ${getCarbonColor(log.carbon)}`}>
              {log.carbon} kg
            </span>
          </li>
        ))}
      </ul>



      <h2>Top 2 Carbon Emissions</h2>
      <ul>
        {top2Logs.map((log) => (
          <li key={log.id}>
            {log.activity} - {log.carbon} kg
          </li>
        ))}
      </ul>

      <h2></h2>
    </div>
  );
};

export default Dashboard;
