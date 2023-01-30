"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

async function addTodo(name, refresh) {
  await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
}

export default function AddNewTodo() {
  const router = useRouter();
  let [name, setName] = useState("");
  return (
    <div>
      <h2>Add Your New ToDo(s):</h2>

      <input style={{paddingRight:'60px',marginLeft:'40px'}}
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button style={{marginLeft:'12px', width:'50px'}}
        onClick={async () => {
          await addTodo(name, router.refresh);
          setName("");
        }}
      >
        Add
      </button>
    </div>
  );
}
