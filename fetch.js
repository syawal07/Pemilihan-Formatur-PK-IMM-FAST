// index.js

document.addEventListener("DOMContentLoaded", function () {
  // Fungsi untuk mendapatkan data dari server
  function getData() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";

    // Gunakan Fetch API
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Proses data yang diterima dari server
        console.log("Data from server:", data);

        // Misalnya, Anda ingin menampilkan data pada elemen dengan ID 'data-container'
        const dataContainer = document.getElementById("data-container");
        dataContainer.innerHTML = `<p>Data from server: ${JSON.stringify(data)}</p>`;
      })
      .catch((error) => {
        // Tangani kesalahan jika ada
        console.error("Error:", error);
      });
  }

  // Panggil fungsi getData() ketika halaman dimuat
  getData();
});
