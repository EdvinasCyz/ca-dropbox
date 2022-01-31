import { getPosts } from "./crud-min.js";

getPosts()
    .then((data) => renderTable(data))
    .catch((err) => console.log(err));

const table = document.getElementById("personTable");
let content = "";

function renderTable(array) {
    const tableHead = `<tr>
    <th>Name</th>
    <th>Username</th>
    <th>Email</th>
</tr>`;
    array.forEach((element) => {
        content += `
        <tr>
            <td>${element.name}
            <td>${element.username}
            <td>${element.email}
        </tr>`;
    });

    table.innerHTML = tableHead + content;
}