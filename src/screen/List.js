import React from "react";
import "./List.css";

export default function List({ status }) {
  return (
    <div className="list-container">
      {status.map(j => (
        <div className="list-item card" key={j.id}>
          <div style={{fontWeight:700}}>{j.name || `#${j.id}`}</div>
          <div style={{fontSize:13,color:'var(--muted)'}}>Status: {j.status}</div>
          <div style={{fontSize:13,color:'var(--muted)'}}>Task: {j.task || '—'}</div>
        </div>
      ))}
    </div>
  );
}
