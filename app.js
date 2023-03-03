// console.log("we are connected");

const iceCream = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2,
  quantity: 0
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1,
  quantity: 0
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2,
  quantity: 0
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2,
  quantity: 0
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4,
  quantity: 0
}]

// Ice Cream

function addScoop(name) {
  console.log('add scoop');
  const scoop = iceCream.find(s => s.name == name)
  console.log(scoop);
  // @ts-ignore
  scoop.quantity++

  drawScoop()
}
// addScoop()


function drawScoop() {
  let total = 0
  let template = ""
  iceCream.forEach(scoop => {
    total += scoop.quantity * scoop.price
    console.log(total);

    if (scoop.quantity > 0) {
      template += `<p> ${scoop.name} - ${scoop.quantity} - $${scoop.price} - <span>$${scoop.price * scoop.quantity}</span></p>`
    }
  })
  console.log('total: $', total);
  // @ts-ignore
  document.getElementById('total').innerText = total
  // @ts-ignore
  document.getElementById('list-items').innerHTML = template
}


function pay() {
  if (window.confirm('Are you ready to pay?')) {
    console.log('Paying');
    iceCream.forEach(scoop => scoop.quantity = 0)

    drawScoop()
  }
}


// Toppings

function addToppings(name) {
  console.log("adding toppings");
  const tops = toppings.find(top => top.name == name)
  console.log(tops);
  // @ts-ignore
  tops.quantity++
  drawToppings()
}

function drawToppings() {
  let total = 0
  let template = ""
  toppings.forEach(top => {
    total += top.quantity * top.price
    console.log(total);
    if (top.quantity > 0) {
      template += `<p> ${top.name} - ${top.quantity} - $${top.price} - <span>$${top.price * top.quantity}</span></p>`
    }
  })
  // @ts-ignore
  document.getElementById('total').innerText = total
  // @ts-ignore
  document.getElementById('list-items').innerHTML = template
}
// drawToppings()


// Container

function addContainer(name) {
  console.log("adding container");

}