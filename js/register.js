const db = firebase.firestore();

document.getElementById("registerForm").addEventListener("submit", async e => {
  e.preventDefault();
  const name = document.getElementById("playerName").value;

  await db.collection("players").add({
    name: name,
    registeredAt: new Date()
  });

  alert(`${name} inscrit !`);
});
