document.getElementById("offerForm")?.addEventListener("submit",function(e){

e.preventDefault()

let name=document.getElementById("name").value

let desc=document.getElementById("desc").value

let price=document.getElementById("price").value

let offer={name,desc,price}

let offers=JSON.parse(localStorage.getItem("offers"))||[]

offers.push(offer)

localStorage.setItem("offers",JSON.stringify(offers))

alert("Oferta dodana")

})

if(document.getElementById("offers")){

let offers=JSON.parse(localStorage.getItem("offers"))||[]

offers.forEach(o=>{

let div=document.createElement("div")

div.innerHTML="<h3>"+o.name+"</h3><p>"+o.desc+"</p><b>"+o.price+" zł</b>"

document.getElementById("offers").appendChild(div)

})

}
