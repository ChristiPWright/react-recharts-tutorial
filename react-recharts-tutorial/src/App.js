import { useEffect, useState } from "react";

export default function App() {
  const [data, setdata] = useState();

  const fetchDatas = async () => {
    const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
    const data = await res.json();
    console.log(data);
    setdata(data?.data);
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return <div className="App">How to use Recharts with React</div>;
}