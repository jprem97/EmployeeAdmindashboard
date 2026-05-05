import React from "react";
import { LayoutDashboard } from "lucide-react";

export default function Header({ title, subtitle }) {
  return (
    <header style={{display:'flex',alignItems:'center',gap:12,marginBottom:18}}>
      <div className="card" style={{width:48,height:48,display:'flex',alignItems:'center',justifyContent:'center',padding:6}}>
        <LayoutDashboard className="w-6 h-6" />
      </div>
      <div>
        <h1 style={{margin:0,fontSize:22,fontWeight:700}}>{title}</h1>
        {subtitle && <p style={{margin:0,color:'var(--muted)',fontSize:13}}>{subtitle}</p>}
      </div>
    </header>
  );
}
