/** @format */

import "./App.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getcats, tryReducers } from "./states/catSlice";

function App() {
  const cats = useSelector((state) => state?.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcats("param"));
    dispatch(tryReducers("load-data-test"));
  }, [dispatch]);
  return (
    <div className='App'>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {console.log(cats)}
        {cats?.cats?.map((cat) => (
          <div
            style={{
              border: "1px solid black",
              margin: "10px",
              width: "200px",
            }}>
            <p>{cat?.name}</p>
            <span>{cat?.weight?.imperial}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
