console.log('hello there! -Obi-Wan Kenobi')

const iceCream = [{
    name: 'Cookie Dough',
    price: 1.25,
    quantity: 0
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
}

function buyVessel(coneType){
    console.log('bought', coneType)
    let foundVessel = vessels.find(vessels => vessels.name == coneType)
    console.log(foundVessel)
    foundVessel.quantity++

}

function buyTopping(toppingType){
    console.log('bought', toppingType)
    let foundTopping = toppings.find(toppings => toppings.name == toppingType)
    console.log(foundTopping)
    foundTopping.quantity++
}

function updateCheckout(){
    let template = ''

    iceCream.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            template += ` <div class="d-flex justify-content-between align-items-baseline">
                <span>${iceCream.name}</span>
                <span>${iceCream.quantity}</span>
                <span>${iceCream.price}</span>
                <span>${total}</span>
            </div> `
        }
    })
    console.log(template)
}