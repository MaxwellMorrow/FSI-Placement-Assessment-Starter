
// button selectors
let minusGBBtn = document.querySelector("#minus-gb")
let addGBBtn = document.querySelector("#add-gb");
let minusCCBtn = document.querySelector("#minus-cc");
let addCCBtn = document.querySelector("#add-cc");
let minusSugarBtn = document.querySelector("#minus-sugar");
let addSugarBtn = document.querySelector("#add-sugar");

// count selectors
let qtyGB = document.querySelector("#qty-gb");
let qtyCC = document.querySelector("#qty-cc");
let qtySugar = document.querySelector("#qty-sugar");
let qtyTotal = document.querySelector("#qty-total");



// First, tell us your name
let yourName = "Maxwell Morrow" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = localStorage.getItem("gb")  
if (gb === null){
    gb = 0;
} else {
    gb = parseInt(gb)
}
qtyGB.textContent = gb

let cc = localStorage.getItem("cc") 
if (cc === null){
    cc = 0;
}    else{
    cc = parseInt(cc)
}
qtyCC.textContent = cc
let sugar = localStorage.getItem("sugar")
if (sugar === null){
    sugar = 0;
}  else{
    sugar = parseInt(sugar)
}
qtySugar.textContent = sugar
qtyTotal.textContent = gb + cc + sugar
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})


// minus GB button event listener
minusGBBtn.addEventListener('click',function(){
  if (gb > 0){
    gb = gb - 1
    qtyGB.textContent = gb
    localStorage.setItem("gb",gb)
    qtyTotal.textContent = gb + cc + sugar
  }
})

//add GB button event listener
addGBBtn.addEventListener("click",function(){
    gb = gb + 1
    qtyGB.textContent = gb
    localStorage.setItem("gb",gb)
    qtyTotal.textContent = gb + cc + sugar
})

// minus CC button event listener
minusCCBtn.addEventListener('click',function(){
    if (cc > 0){
      cc = cc - 1
      qtyCC.textContent = cc
      localStorage.setItem("cc",cc)
      qtyTotal.textContent = gb + cc + sugar
    }
  })

// add CC button event listener
addCCBtn.addEventListener("click",function(){
    cc = cc + 1
    qtyCC.textContent = cc
    localStorage.setItem("cc",cc)
    qtyTotal.textContent = gb + cc + sugar
})

// minus sugar button event listener
minusSugarBtn.addEventListener('click',function(){
    if (sugar > 0){
      sugar = sugar - 1
      qtySugar.textContent = sugar
      localStorage.setItem("sugar",sugar)
      qtyTotal.textContent = gb + cc + sugar
    }
  })

  // add sugar button event listener
  addSugarBtn.addEventListener("click",function(){
    sugar = sugar + 1
    qtySugar.textContent = sugar
    localStorage.setItem("sugar",sugar)
    qtyTotal.textContent = gb + cc + sugar
})
