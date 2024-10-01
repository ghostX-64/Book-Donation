let bookCount = 0;

function validateInput() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !phone || !email) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'All fields (Name, Phone, Email) are required!',
        });
        return false;
    }

    return true;
}

document.getElementById("add-row-btn").addEventListener("click", function () {
    if (!validateInput()) {
        return;
    }

    const table = document
        .getElementById("books-table")
        .getElementsByTagName("tbody")[0];
    const row = table.insertRow();

    row.innerHTML = `
        <td>${++bookCount}</td>
        <td><input type="text" placeholder="Book Title"></td>
        <td><input type="text" placeholder="Author"></td>
        <td><input type="text" placeholder="Genre"></td>
        <td><input type="number" class="year-input" placeholder="Enter Year" min="1900" max="${new Date().getFullYear()}"></td>
        <td><input type="text" placeholder="ISBN"></td>
        <td>
            <button class="action-btn edit-btn" title="Edit"><i class="fas fa-edit"></i></button>
            <button class="action-btn delete-btn" title="Delete"><i class="fas fa-trash"></i></button>
        </td>
    `;

    row.querySelector(".edit-btn").addEventListener("click", function () {
        editRow(row);
    });

    row.querySelector(".delete-btn").addEventListener("click", function () {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                row.remove();
                Swal.fire(
                    'Deleted!',
                    'Your record has been deleted.',
                    'success'
                );
            }
        });
    });
});

function editRow(row) {
    const inputs = row.querySelectorAll("input");
    inputs.forEach((input) => {
        input.removeAttribute("disabled");
    });
}

document.getElementById("export-json").addEventListener("click", function () {
    const userDetails = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        books: [],
    };

    const rows = document.querySelectorAll("#books-table tbody tr");
    rows.forEach((row, index) => {
        const cells = row.querySelectorAll("input");

        userDetails.books.push({
            sno: index + 1,
            booktitle: cells[0].value,
            author: cells[1].value,
            genre: cells[2].value,
            yop: cells[3].value,
            isbn: cells[4].value,
        });
    });

    console.log(JSON.stringify(userDetails, null, 2));

    Swal.fire({
        title: 'Success!',
        text: 'Data submitted! Check console for output.',
        icon: 'success',
        confirmButtonText: 'Close'
    });
});
