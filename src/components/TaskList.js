import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskProgress } from "../features/tasksSlice";

export default function TaskList() {
  const tasks = useSelector(s => s.tasks);
  const dispatch = useDispatch();

  return (
    <div style={{display:'grid',gap:10}}>
      {tasks.map(t => (
        <div key={t.id} className="card" style={{padding:12,display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div>
            <div style={{fontWeight:700}}>{t.title}</div>
            <div style={{fontSize:12,color:'#6b7280'}}>Due {t.dueDate} • {t.progress}%</div>
          </div>
          <div style={{display:'flex',gap:8}}>
            <button onClick={() => dispatch(updateTaskProgress({ id: t.id, delta: -10 }))} disabled={t.progress===0}>-</button>
            <button onClick={() => dispatch(updateTaskProgress({ id: t.id, delta: 10 }))} disabled={t.progress===100}>+</button>
          </div>
        </div>
      ))}
    </div>
  );
}
