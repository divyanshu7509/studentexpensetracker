
var total = 0;

function addExpense() {

    var name = document.getElementById("expenseName").value;
    var amount = document.getElementById("expenseAmount").value;
    var category = document.getElementById("category").value;

    if (name == "" || amount == "") {
        alert("Please enter all details");
        return;
    }

    if (Number(amount) <= 0) {
        alert("Enter a valid amount");
        return;
    }

    var list = document.getElementById("expenseList");

    var li = document.createElement("li");

    li.innerHTML = name + " - ₹" + amount + " (" + category + ")";

    list.appendChild(li);

    total = total + Number(amount);

    document.getElementById("total").innerHTML = total;

    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";

}
