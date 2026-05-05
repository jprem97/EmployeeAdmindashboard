import React from "react";
import { Send, RefreshCw, Coffee } from "lucide-react";

export default function Sidebar({ id, setId, task, setTask, onDispatch, onReset, showBreak, setShowBreak }) {
  return (
    <aside style={{display:'flex',flexDirection:'column',gap:12}}>
      <div className="card" style={{padding:16}}>
        <h3 style={{margin:0,fontSize:16,fontWeight:700}}>Assign New Task</h3>

        <label style={{display:'block',fontSize:12,color:'#6b7280',marginTop:10}}>Member ID</label>
        <input value={id} onChange={e=>setId(e.target.value)} style={{width:'100%',padding:10,borderRadius:10,border:'1px solid #e6e9ef',marginTop:6}} />

        <label style={{display:'block',fontSize:12,color:'#6b7280',marginTop:10}}>Task</label>
        <input value={task} onChange={e=>setTask(e.target.value)} style={{width:'100%',padding:10,borderRadius:10,border:'1px solid #e6e9ef',marginTop:6}} />

        <button onClick={onDispatch} style={{marginTop:10,display:'flex',alignItems:'center',gap:8,background:'var(--accent)',color:'#fff',padding:10,borderRadius:10,border:'none',width:'100%'}}>
          <Send /> Dispatch
        </button>
      </div>
      <div className="card" style={{padding:14}}>
        <button onClick={()=>setShowBreak(s=>!s)} style={{width:'100%',padding:10,borderRadius:10,border:'1px solid rgba(2,6,23,0.04)',background:showBreak?'#FDE68A':'var(--card-bg)'}}>
          <Coffee style={{marginRight:8}} /> {showBreak? 'Viewing Breaks' : 'Filter: On Break'}
        </button>

        <button onClick={onReset} style={{marginTop:8,width:'100%',padding:10,borderRadius:10,border:'1px solid rgba(220,38,38,0.12)',background:'var(--card-bg)',color:'#dc2626'}}>
          <RefreshCw style={{marginRight:8}} /> Reset Data
        </button>
      </div>
    </aside>
  );
}
