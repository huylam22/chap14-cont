import React, { useEffect } from "react";
import "./App.css";
// import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
// import Card from "./uis/Card";
import { toggleDarkMode } from "./redux-toolkit/globalSlice";
import useDarkMode from "./hooks/useDarkMode";
// import Counter from "./components/Counter";
import ButtonToggle from "./components/ButtonToggle";
import Sidebar from "./components/Sidebar";
// import HackerNews from "./uis/HackerNews";
import HackerNews from "./components/HackerNews";
import { getNews } from "./sagas/news/newsSlice";

function App() {
  // counter is from configStore (reducer)
  // count is from initialState in count.js
  // const { count } = useSelector((state) => state.counter);
  // const  count  = useSelector((state) => state.counter.count);
  // const globalOptions = useSelector((state) => state.global);
  // console.log(globalOptions);
  // const dispatch = useDispatch();
  // const handleToggleDarkmode = () => {
  //   dispatch(toggleDarkMode(!globalOptions.darkMode));
  // };

  // const globalOptions = useSelector((state) => state.global);

  // console.log(globalOptions);

  // Generator function (function with *)
  // useEffect(() => {
  //   // function* demoGenerator() {
  //   //   yield 1;
  //   //   yield 2;
  //   //   yield 3;
  //   // }
  //   function* demoGenerator() {
  //     // ==> khi dung generator thi se khong thuc thi (trong vdu nay khi dung func bth thi se chay vo tan)
  //     // yield thi giong nhu async await nhung ko chay lien
  //     console.log("RUN");
  //     let id = 1;
  //     while (true) {
  //       yield id;
  //       id++;
  //     }
  //   }
  //   const demo = demoGenerator();
  //   console.log(demo.next()); // ==> cai generator dung next trong redux saga middleware
  //   console.log(demo.return()); // return la dung generator
  //   // console.log(demo.throw(new Error("error"))); // throw loi~

  // console.log(demo.next()); // val = 1, done = false
  // console.log(demo.next()); // val = 2, done = false
  // console.log(demo.next()); // val = 3, done = false
  // console.log(demo.next()); // val = undefined, done = true
  // const demo2 = demoGenerator();
  // console.log(demo2.next()); // quay lai ban dau
  // }, []);

  // redux saga
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getNews());
  // }, [dispatch]);

  // const hits = useSelector((state) => state.news.hits);
  // console.log(hits);

  return (
    <div className="App">
      {/* <h2>The count from App is: {count}</h2>
      <Counter count={count}></Counter> */}
      {/* <Card></Card> */}
      {/* <Counter></Counter> */}
      {/* <SwitchDarkMode></SwitchDarkMode> */}
      {/* <ButtonToggle></ButtonToggle>
      <Sidebar></Sidebar> */}
      {/* <HackerNews></HackerNews> */}
      <HackerNews></HackerNews>
    </div>
  );
}

// Props Drilling E.g: CounterGrandpa -> CounterParent -> CounterChild -> App
// ==> use Redux

// function SwitchDarkMode() {
//   const [darkMode, setDarkMode] = useDarkMode();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(toggleDarkMode(darkMode));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   const handleToggleDarkMode = () => {
//     setDarkMode(!darkMode);
//     dispatch(toggleDarkMode(!darkMode));
//   };
//   return <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>;
// }
export default App;
