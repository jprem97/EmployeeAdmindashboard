import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TeamMember from "./screen/TeamMember";
import List from "./screen/List";
import Register from "./screen/Register";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MemberList from "./components/MemberList";
import TaskList from "./components/TaskList";
import { updateMemberTask, resetMembers } from "./features/membersSlice";
import { resetTasks } from "./features/tasksSlice";
import { Users, User, RefreshCw, LayoutDashboard } from "lucide-react";
import "./App.css";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [id, setId] = useState("");
  const [memberId, setMemberId] = useState("");
  const [task, setTask] = useState("");
  const [showBreak, setShowBreak] = useState(false);

  const members = useSelector((s) => s.members);
  const tasks = useSelector((s) => s.tasks);
  const dispatch = useDispatch();

  const updateTask = () => {
    if (!id || !task) return;
    dispatch(updateMemberTask({ id: Number(id), task }));
    setId("");
    setTask("");
  };

  const resetLead = () => {
    setId("");
    setTask("");
    setShowBreak(false);
    dispatch(resetMembers());
    dispatch(resetTasks());
  };

  const resetMember = () => setMemberId("");

  const visibleStatus = showBreak ? members.filter((m) => m.status === "break") : members;

  return (
    <div className="min-h-screen text-slate-800 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* HOME */}
      {screen === "home" && (
        <div className="home-nav">
          <h1 className="nav-title">
            Team Management <span style={{ background: "linear-gradient(to right,#6366f1,#ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Portal</span>
          </h1>
          <p style={{ textAlign: "center", color: "var(--muted)", marginBottom: 18 }}>Select your operational role to access the dashboard.</p>

          <div className="nav-buttons">
            <button className="nav-btn lead" onClick={() => setScreen("lead")}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12, background: "rgba(255,255,255,0.18)" }}>
                  <Users className="w-6 h-6" />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 800, fontSize: 18 }}>Team Lead</div>
                    <div className="nav-sub" style={{ fontSize: 13 }}>Manage team operations, assign tasks, and monitor progress.</div>
                </div>
              </div>
            </button>

            <button className="nav-btn member" onClick={() => setScreen("member")}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12, background: "rgba(255,255,255,0.18)" }}>
                  <User className="w-6 h-6" />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 800, fontSize: 18 }}>Team Member</div>
                    <div className="nav-sub" style={{ fontSize: 13 }}>View assignments, update task status, and report progress.</div>
                </div>
              </div>
            </button>

            <button className="nav-btn register" onClick={() => setScreen("register")}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 48, height: 48, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12, background: "rgba(255,255,255,0.18)" }}>
                  <Users className="w-6 h-6" />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontWeight: 800, fontSize: 18 }}>Register</div>
                    <div className="nav-sub" style={{ fontSize: 13 }}>Add a new team member to the system.</div>
                </div>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* MEMBER */}
      {screen === "member" && (
        <div style={{ maxWidth: 900, margin: "24px auto", padding: 18 }}>
          <button className="back-btn" onClick={() => setScreen("home")}>Back</button>

          {!memberId ? (
            <div className="card" style={{ textAlign: "center", padding: 28 }}>
              <div style={{ width: 64, height: 64, borderRadius: 32, background: "rgba(0,0,0,0.04)", margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <User />
              </div>
              <h2 style={{ margin: "8px 0" }}>Member Login</h2>
              <p style={{ color: "var(--muted)", marginBottom: 12 }}>Enter your member ID to continue</p>
              <input className="input-box" type="number" value={memberId} onChange={(e) => setMemberId(e.target.value)} placeholder="e.g. 101" />
            </div>
          ) : (
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(0,0,0,0.04)", display: "flex", alignItems: "center", justifyContent: "center" }}>#{memberId}</div>
                  <div>
                    <div style={{ fontWeight: 700 }}>Member Workspace</div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>Logged in as #{memberId}</div>
                  </div>
                </div>
                <button className="back-btn" onClick={resetMember}><RefreshCw /> Change</button>
              </div>

              <TeamMember
                memberId={Number(memberId)}
                globalStatus={members.find((m) => m.id === Number(memberId))?.status || "working"}
                setGlobalStatus={() => {}}
                tasks={tasks.filter((t) => t.userId === Number(memberId))}
              />
            </div>
          )}
        </div>
      )}

      {/* REGISTER */}
      {screen === "register" && (
        <div style={{ maxWidth: 760, margin: "24px auto" }}>
          <button className="back-btn" onClick={() => setScreen("home")}>Back</button>
          <Register onBack={() => setScreen("home")} />
        </div>
      )}

      {/* LEAD */}
      {screen === "lead" && (
        <div style={{ maxWidth: 1100, margin: "24px auto", padding: 20 }}>
          <div style={{ display: "flex", gap: 18, alignItems: "flex-start" }}>
            <div style={{ flex: 1 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <button className="back-btn" onClick={() => setScreen("home")}>Back</button>
                  <Header title="Command Center" subtitle="Overview of active personnel and tasks" />
                </div>
              </div>

              <div className="card">
                <MemberList filterBreak={showBreak} />
              </div>
            </div>

            <div style={{ width: 360 }}>
              <div className="card-accent" style={{ marginBottom: 12 }}>
                <div style={{ fontSize: 13, opacity: 0.9 }}>Global Active Tasks</div>
                <div style={{ fontSize: 28, fontWeight: 800, marginTop: 6 }}>{tasks.length}</div>
              </div>

              <Sidebar id={id} setId={setId} task={task} setTask={setTask} onDispatch={updateTask} onReset={resetLead} showBreak={showBreak} setShowBreak={setShowBreak} />

              <div className="card" style={{ marginTop: 12 }}>
                <h4 style={{ margin: 0, fontSize: 15, fontWeight: 700 }}>Tasks</h4>
                <TaskList />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
