import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMember } from "../features/membersSlice";
import "./TeamMember.css";

export default function Register({ onBack }) {
	const dispatch = useDispatch();
	const [id, setId] = useState(110);
	const [name, setName] = useState("");

	const submit = () => {
		if (!id || !name) return;
		dispatch(addMember({ id: Number(id), name, status: "working" }));
		setName("");
		setId(id + 1);
		if (onBack) onBack();
	};

	return (
		<div className="tm-container card">
			<button className="back-btn" onClick={onBack}>Back</button>
			<h2 style={{marginBottom:12}}>Add New Team Member</h2>

			<label style={{fontSize:13, color:'#6b7280'}}>Member ID</label>
			<input className="input-box" type="number" value={id} onChange={e => setId(e.target.value)} />

			<label style={{fontSize:13, color:'#6b7280'}}>Full Name</label>
			<input className="input-box" type="text" value={name} onChange={e => setName(e.target.value)} />

			<button className="primary-btn" onClick={submit}>Create Member</button>
		</div>
	);
}
