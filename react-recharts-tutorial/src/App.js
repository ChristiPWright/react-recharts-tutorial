import { useEffect, useState } from "react";
import BarChart from "./barChart";
import LineChart from "./lineChart";

export default function App() {
  const [assetData, setAssetData] = useState();
  const [bitcoinHistoryData, setBitcoinHistoryData] = useState();

  const fetchAssetDatas = async () => {
    const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
    const assetData = await res.json();
    // console.log(assetData);
    setAssetData(assetData?.data);
  };
  const fetchBitcoinHistoryDatas = async () => {
    const res = await fetch("https://api.coincap.io/v2/assets/bitcoin/history?interval=d1"); //TODO: iteratively make call & render linechart or dropdown to select id for one line chart
    const bitcoinHistoryData = await res.json();
    // console.log(bitcoinHistoryData);
    setBitcoinHistoryData(bitcoinHistoryData?.data);
  };

  useEffect(() => {
    fetchAssetDatas();
    fetchBitcoinHistoryDatas()
  }, []);

  return (
    <div className="App">
      <h1>Playing with recharts using coincap api</h1>
      <h3>Bar Chart</h3>
      <BarChart data={assetData} />
      <h3>Line Chart</h3>
      <LineChart data={bitcoinHistoryData} />
    </div>
  );
}