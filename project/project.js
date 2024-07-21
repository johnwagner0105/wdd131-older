const items=[
    {
        name:"mouse",price:50,discount:0,image:"./images/Mouse_mediano.jpg"
    },{
        name:"keyboard",price:70,discount:20,image:"./images/Keyboard_mediano.jpg"
    },{
        name:"screen",price:120,discount:0,image:"./images/Screen_mediano.jpg"
    },{
        name:"RAM",price: 100, discount:10,image:"./images/RAM_mediano.jpg"
    },{
        name:"USB",price:20,discount:0,image:"./images/USB_mediano.jpg"
    },{
        name:"Graphic Card",price:200,discount:5,image:"./images/graphic_card_mediano.jpg"
    },{
        name:"CPU",price:220,discount:0,image:"./images/CPU_mediano.jpg"
    },{
        name:"Cooler",price:100,discount:0,image:"./images/cooler_mediano.jpg"
    },{
        name:"Data storage 500G",price:120,discount:0,image:"./images/data_storage_mediano.jpg"
    },{
        name:"Power Supply",price:130,discount:0,image:"./images/Power_supply_mediano.jpg"
    }
]

const addToCart=(item)=>{
    if(localStorage.getItem('cart')){
        let itemFound=false;
        let cartObtained=localStorage.getItem('cart')
        let cartArray=JSON.parse(cartObtained)
        cartArray.forEach((itemInCart)=>{
            if(itemInCart[0]==item.name){
                itemInCart[1]+=1;
                itemFound=true;
            }
        })
        if(!itemFound){
            cartArray.push([item.name,1,item.price,item.image,item.discount])
        }
        localStorage.setItem('cart',JSON.stringify(cartArray))
    }else{
    let itemToCart=[[item.name,1,item.price,item.image,item.discount]]
    localStorage.setItem('cart',JSON.stringify(itemToCart))}
}

let discountedContainer=document.getElementById("discounted-products")

const showDiscountedProducts=()=>{
    if(discountedContainer){
    let discountedContent=""
    items.forEach((item)=>{
        if(item.discount>0){
            discountedContent+=`<div class="itemCard"><h1>${item.name}</h1><img src=${item.image} loading="lazy"><p>${item.price}</p></div>`;
        }
    })
    discountedContainer.innerHTML=discountedContent;
}
}

showDiscountedProducts();

let allContainer=document.getElementById("all-products")

const showAllProducts=()=>{
    if(allContainer){
    let allContent=""
    items.forEach((item)=>{
            allContent+=`<div class="itemCard"><a href="#" onclick='addToCart(${JSON.stringify(item)})'><h1>${item.name}</h1><img src=${item.image} loading="lazy"><p>${item.price}</p></a></div>`;
    })
    allContainer.innerHTML=allContent;

}
}

showAllProducts()

let cartContainer=document.getElementById("cart");

const showCartProducts=()=>{
    if(cartContainer){
        // console.log("Inside first conditional")
        let cartObtained=localStorage.getItem('cart')
        if(cartObtained){
            let total=0;
            // console.log("inside conditional")
            let table=document.createElement("table");
            table.setAttribute("border",2)
            cartContainer.appendChild(table)
            let headrow=document.createElement("tr")
            let headcolumn1=document.createElement("th")
            headcolumn1.innerHTML="Preview"
            headrow.appendChild(headcolumn1)
            let headcolumn2=document.createElement("th")
            headcolumn2.innerHTML="Product"
            headrow.appendChild(headcolumn2)
            let headcolumn3=document.createElement("th")
            headcolumn3.innerHTML="Quantity"
            headrow.appendChild(headcolumn3)
            let headcolumn4=document.createElement("th")
            headcolumn4.innerHTML="Price"
            headrow.appendChild(headcolumn4)
            table.appendChild(headrow)

            let cartArray=JSON.parse(cartObtained)
            cartArray.forEach((item)=>{
                let row=document.createElement("tr")
                let column1=document.createElement("td")
                row.appendChild(column1)
                let column2=document.createElement("td")
                row.appendChild(column2)
                let column3=document.createElement("td")
                row.appendChild(column3)
                let column4=document.createElement("td")
                row.appendChild(column4)
                column1.innerHTML=`<img class='productInCart' src=${item[3]}>`
                column2.innerHTML=`${item[0]}`
                column3.innerHTML=`${item[1]}`
                column4.innerHTML=`${item[2]}`
                total+=item[2]
                table.appendChild(row)
            })
            let totalRow=document.createElement("tr")
            let totalColumn=document.createElement("td")
            totalColumn.innerHTML="TOTAL"
            let totalAmount=document.createElement("td")
            totalAmount.innerHTML=`${total}`
            totalColumn.setAttribute("colspan",3)
            totalRow.appendChild(totalColumn)
            totalRow.appendChild(totalAmount)
            table.appendChild(totalRow)
        }
    }
}

showCartProducts();

let userForm=document.getElementById("userForm")
if(userForm){

    userForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const name=document.getElementById("name").value;
        const address=document.getElementById("address").value;
    
        const alertMessage=`Thank you ${name} for buying\nYour things will be delivered to: ${address}`
    
        alert(alertMessage)
        localStorage.clear()
        window.location.href = "index.html";
    })
}

const year = new Date().getFullYear();
const element = document.getElementById("currentyear");
element.innerHTML = `&#169; ${year}`;

const now = new Date(document.lastModified).toLocaleDateString();
const time = new Date(document.lastModified).toLocaleTimeString();
document.getElementById("lastModified").innerHTML = `Last Modified: ${now} ${time}`;