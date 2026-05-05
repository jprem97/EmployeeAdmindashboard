import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMemberStatus } from "../features/membersSlice";
import { CheckCircle2, Coffee } from "lucide-react";

export default function MemberList({ filterBreak }) {
  const members = useSelector((s) => s.members);
  const dispatch = useDispatch();

  const visible = filterBreak ? members.filter((m) => m.status === "break") : members;

  return (
    <div style={{ display: "grid", gap: 12 }}>
      {visible.map((m) => (
        <div key={m.id} className="card" style={{ display: "flex", justifyContent: "space-between", padding: 12, alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 700 }}>{m.name || `#${m.id}`}</div>
            <div style={{ fontSize: 13, color: "var(--muted)" }}>{m.status}</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              className="btn btn-success"
              onClick={() => dispatch(setMemberStatus({ id: m.id, status: "working" }))}
              title="Set to working"
            >
              <CheckCircle2 style={{ marginRight: 8 }} /> Work
            </button>

            <button
              className="btn btn-warning"
              onClick={() => dispatch(setMemberStatus({ id: m.id, status: "break" }))}
              title="Set to break"
            >
              <Coffee style={{ marginRight: 8 }} /> Break
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
