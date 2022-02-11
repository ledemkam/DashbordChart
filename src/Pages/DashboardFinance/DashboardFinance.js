import React, { useContext } from "react";
import "./DashboardFinance.css";
import BarChart from "../../Components/AllChart/BarChart";
import LineChart from "../../Components/AllChart/LineChart";
import { DashboardContext } from "../../context/DashboardContext";

export default function DashboardFinance() {
  const { dataChart, changeYear, yearData } = useContext(DashboardContext);

  console.log(dataChart, changeYear, yearData);

  return (
    <div className="global-container">
      <h1>die Ergebnisse des Jahres: {yearData}</h1>

      <form>
        <label htmlFor="year">Datum wählen</label>
        <select onChange={changeYear} id="year">
          <option selected={yearData === "2020" && "selected"} value="2020">
            2020
          </option>
          <option selected={yearData === "2019" && "selected"} value="2019">
            2019
          </option>
          <option selected={yearData === "2018" && "selected"} value="2018">
            2018
          </option>
          <option selected={yearData === "2017" && "selected"} value="2017">
            2017
          </option>
        </select>
      </form>

      <div className="dashboard-container">
        <BarChart data={dataChart.chart1} name={"Halbjahreszahlen"} />
        <LineChart
          data={dataChart.chart2}
          name={"Anzahl der Abonnenten (in Tausend)"}
        />
        <LineChart
          data={dataChart.chart3}
          name={"Anzahl Kunden (in Tausend)"}
        />
        <BarChart data={dataChart.chart4} name={"Marketingbudgets"} />
      </div>
    </div>
  );
}
