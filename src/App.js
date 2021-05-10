import { useState } from "react";
import TapdStyleInput from "./TapdStyleInput";
import "./styles.css";

export default function App() {
  const [list, setList] = useState([
    { name: "xueli@jwolf.cn", id: 23 },
    { name: "xiaohong@jwolf.cn", id: 24 },
    { name: "xiaoming@jwolf.cn", id: 25 },
    { name: "xiaoting@jwolf.cn", id: 26 },
    { name: "xiaoze@jwolf.cn", id: 27 },
    { name: "xiaobei@jwolf.cn", id: 28 },
    { name: "xiaowei@jwolf.cnxxx", id: 29 }
  ]);

  return (
    <div className="App">
      <TapdStyleInput value={list} placeholder="请输入关键字" />
    </div>
  );
}
