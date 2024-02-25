const name1 = document.getElementById("customer-name");
const item = document.getElementById("item-name");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");
const addItem = document.getElementById("add-item");
const total = document.getElementById("total");
const Heading = document.getElementById("heading");
const generateBill = document.getElementById("generate-bill");


var totPrice = 0;
var flag = 0;
addItem.addEventListener('click', () => {
    if(item.value != '' && quantity.value > 0 && price.value > 0)
    {
    const itemTable = document.getElementById("item-table");
    const newRow = itemTable.insertRow(-1);
    let subTot = 0;

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = item.value;
    cell2.textContent = quantity.value;
    cell3.textContent = price.value;
    subTot= parseInt(price.value)* parseInt(quantity.value)
    totPrice = parseInt(totPrice)+ parseInt(subTot);

    document.getElementById('item-name').value = '';
    document.getElementById('quantity').value = '1';
    document.getElementById('price').value = '0';
    total.value=totPrice;
    flag=1;
    }
    else{
        window.alert("Enter the Item price and quantity correctly");
        document.getElementById('item-name').value = '';
        document.getElementById('quantity').value = '1';
        document.getElementById('price').value = '0';
    }

});



generateBill.addEventListener('click', () => {
    if(name1.value != null && flag == 1){
        
        document.getElementById("item-name").style.display = 'none';
        document.getElementById("quantity").style.display = 'none';
        document.getElementById("price").style.display = 'none';
        document.getElementById("add-item").style.display = 'none';
        document.getElementById("generate-bill").style.display = 'none';
        Heading.innerHTML="Bill";
        
        var inputBoxes = document.querySelectorAll('input[type="text"]');
        inputBoxes.forEach(function(inputBox) {
            inputBox.style.border = '0';
        });
        var inputBoxes = document.querySelectorAll('input[type="number"]');
        inputBoxes.forEach(function(inputBox) {
            inputBox.style.border = '0';
        });
        document.getElementById("container").style.border="1px gray solid"
        document.getElementById("innerContainer").style.border="1px gray solid"

          const element =document.getElementById("container");
        html2pdf()
        .from(element)
        .save();
       
    }
    else 
    alert("Add items before trying to generate the invoice..")
})