const chk = document.getElementById("chk")
const login_form = document.getElementById('login_form') 

chk.addEventListener('change', () => {
    
        document.body.classList.toggle("dark");
        container.classList.toggle('dark');
        login_form.classList.toggle('dark');
        

})

// function toggleCheckbox() {
//     const checkbox = document.getElementById("checkbox");
//     checkbox.checked = !checkbox.checked;
// }


