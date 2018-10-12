var inventory = []

function addProduct() {
    var productName = document.getElementById('productName')
    var currentStock = document.getElementById('currentStock')
    var addStock = document.getElementById('addStock')
    var dateOfRestock = document.getElementById('dateOfRestock')
    var newStock = document.getElementById('newStock')
 
    var newStock = parseInt(currentStock.value) + parseInt(addStock.value)

    if(currentStock.value<=30 && newStock <=30){
        var stockStatus = "Advise to re-stock more, minimum inventory should be more than 30 to be save"
    }
    else{
        var stockStatus = "Stock is still save"
    }

    var obj = {
        productName: productName.value,
        currentStock: currentStock.value,
        addStock: addStock.value,
        dateOfRestock: dateOfRestock.value,
        newStock: newStock,
        stockStatus: stockStatus,
    }
    inventory.push(obj)

    productName.value=""
    currentStock.value=""
    addStock.value=""

    // console.log(inventory);
    addData(); 
}

function addData(){
    var tableInventory = document.getElementById('tableInventory')
    tableInventory.innerHTML = `<tr>
        <th>Product</th>
        <th>Current Stock</th>
        <th>Add Stock</th>
        <th>Date of Re-stock</th>
        <th>New Stock</th>
        <th>Stock Status</th>
    </tr>`
    for (var i =0; i<inventory.length; i++){
    var trInventory = document.createElement("tr")
        trInventory.innerHTML = "<td>"+inventory[i].productName+"</td><td>"+inventory[i].currentStock+"</td><td>"+inventory[i].addStock+"</td><td>"+inventory[i].dateOfRestock+"</td><td>"+inventory[i].newStock+"</td><td>"+inventory[i].stockStatus+"</td>"
        tableInventory.appendChild(trInventory)
    }
}







var order = []

function addOrder() {
    var No = document.getElementById('No')
    var productName = document.getElementById('productName')
    var quantity = document.getElementById('quantity')
    var price = document.getElementById('price')
    var paymentMethod = document.getElementById('payment')
    var paymentDue = document.getElementById('due')
 
    var totalPrice = parseInt(quantity.value) * parseInt(price.value)

    var obj = {
        No: No.value,
        productName: productName.value,
        quantity: quantity.value,
        price: price.value,
        paymentMethod: paymentMethod.value,
        paymentDue: paymentDue.value,
        totalPrice: totalPrice,
    }
    order.push(obj);
    No.value=""
    productName.value=""
    quantity.value=""
    price.value=""
    // console.log(order);
    addOrderData(); 
}

function addOrderData(){
    var tableOrder = document.getElementById('tableOrder')
    tableOrder.innerHTML = `<tr>
    <th>No</th>
    <th>Product Name</th>
    <th>Quantity</th>
    <th>Price</th>
    <th>Total Price</th>
    <th>Payment Method</th>
    <th>Payment Due</th>
</tr>`
    for (var i =0; i<order.length; i++){
    var trOrder = document.createElement("tr")
        trOrder.innerHTML ="<td>"+order[i].No+"</td><td>"+order[i].productName+"</td><td>"+order[i].quantity+"</td><td>"+order[i].price+"</td><td>"+order[i].totalPrice+"</td><td>"+order[i].paymentMethod+"</td><td>"+order[i].paymentDue+"</td>"
        tableOrder.appendChild(trOrder)
    }
}


var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}