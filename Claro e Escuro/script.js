const chk = document.getElementById("chk")

chk.addEventListener('change', () => {
    document.body.classList.toggle("dark")
})

function toggleCheckbox() {
    const checkbox = document.getElementById("checkbox");
    checkbox.checked = !checkbox.checked;
}
