//Latiahn Week 5 (code Java Script)
//Pradhita Pameswari | 105222044

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("employeeForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const inputs = form.querySelectorAll("input");
        let isValid = true;

        inputs.forEach((input) => {
            const errorMessage = input.nextElementSibling;
            if (input.value.trim() === "") {
                errorMessage.textContent = `${input.name} tidak boleh kosong`;
                errorMessage.style.display = "block";
                isValid = false;
            } else {
                errorMessage.textContent = "";
                errorMessage.style.display = "none";
            }
        });

        if (isValid) {
            alert("Form berhasil dikirim!");
            form.reset();
        }
    });
});
