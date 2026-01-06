const API_URL = "https://test1-production-23d7.up.railway.app";

async function loadUsers() {
  const res = await fetch(`${API_URL}/users`);
  const users = await res.json();

  const list = document.getElementById("users");
  list.innerHTML = "";

  users.forEach(u => {
    const li = document.createElement("li");
    li.innerText = u.name;
    list.appendChild(li);
  });
}

async function addUser() {
  const name = document.getElementById("name").value;
  await fetch(`${API_URL}/users?name=${name}`, {
    method: "POST"
  });
  loadUsers();
}

loadUsers();
