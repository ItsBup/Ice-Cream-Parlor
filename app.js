console.log('hello there! -Obi-Wan Kenobi')

const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0,
}, 
{
    name: 'Vanilla',
    price: 1,
    quantity: 0
}, 
{
    name: 'Strawberry',
    price: 1.25,
    quantity: 0
}]

const vessels = [{
    name: 'Waffle Cone',
    quantity: 0,
    price: 3
}, 
{
    name: 'Waffle Bowl',
    price: 4,
    quantity: 0
},
{
    name: 'Dipped Cone',
    price: 5,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
}, 
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Cookie Chunks',
    price: .5,
    quantity: 0
}]

function buyIceCream(flavor){
    console.log('bought', flavor)
    let foundFlavor = iceCream.find(iceCream => iceCream.name == flavor)
    console.log(foundFlavor)
    foundFlavor.quantity++
    updateCheckout()
}

function buyVessel(coneType){
    console.log('bought', coneType)
    let foundVessel = vessels.find(vessels => vessels.name == coneType)
    console.log(foundVessel)
    foundVessel.quantity++
    updateCheckout()
}

function buyTopping(toppingType){
    console.log('bought', toppingType)
    let foundTopping = toppings.find(toppings => toppings.name == toppingType)
    console.log(foundTopping)
    foundTopping.quantity++
    updateCheckout()
}

function updateCheckout(){
    let template = ''

    iceCream.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            template += ` <div class="d-flex justify-content-between align-items-baseline">
                <span>${iceCream.name}</span>
                <span>${iceCream.quantity}</span>
                <span>${iceCream.price}</span>
                <span>${iceCream.price*iceCream.quantity}</span>
            </div> `
        }
    })
    vessels.forEach(vessels => {
        if (vessels.quantity > 0) {
            template += ` <div class="d-flex justify-content-between align-items-baseline">
                <span>${vessels.name}</span>
                <span>${vessels.quantity}</span>
                <span>${vessels.price}</span>
                <span>${vessels.price*vessels.quantity}</span>
            </div> `
        }
    })
    toppings.forEach(toppings => {
        if (toppings.quantity > 0) {
            template += ` <div class="d-flex justify-content-between align-items-baseline">
                <span>${toppings.name}</span>
                <span>${toppings.quantity}</span>
                <span>${toppings.price}</span>
                <span>${toppings.price*toppings.quantity}</span>
            </div> `
        }
    })

    document.getElementById('checkout').innerHTML = template
    updateTotal()
}

function updateTotal() {
    let total = 0

    iceCream.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            total += iceCream.quantity * iceCream.price
        }
    })
    
    console.log(total, 'total')
    document.getElementById('total').innerText = total.toString()
}