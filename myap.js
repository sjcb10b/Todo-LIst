let boxMonday = document.getElementById("boxMonday");
let boxTuesday = document.getElementById("boxTuesday");

//let basket = JSON.parse(localStorage.getItem("data")) || [];
let basket = JSON.parse(localStorage.getItem("data")) || [];
let basket2 = JSON.parse(localStorage.getItem("data2")) || [];
let basket3 = JSON.parse(localStorage.getItem("data3")) || [];
let basket4 = JSON.parse(localStorage.getItem("data4")) || [];
let basket5 = JSON.parse(localStorage.getItem("data5")) || [];

function getData(form) {
  //var formData = new FormData(form);

  const ccdays = form.elements["days"].value;
  const ccUserImput = form.elements["userInput"].value;

  console.log(ccdays);
  console.log(ccUserImput);

  switch (ccdays) {
    case "Monday":
      basket.push({
        days: ccdays,
        userInput: ccUserImput,
      });
      localStorage.setItem("data", JSON.stringify(basket)); // push data to the storage
      console.log("Monday");
      break;
    case "Tuesday":
      basket2.push({
        days: ccdays,
        userInput: ccUserImput,
      });
      localStorage.setItem("data2", JSON.stringify(basket2)); // push data to the storage
      console.log("Tues");
      break;
    case "Wednesday":
      basket3.push({
        days: ccdays,
        userInput: ccUserImput,
      });
      localStorage.setItem("data3", JSON.stringify(basket3)); // push data to the storage
      console.log("Wedns");
      break;

    case "Thursday":
      basket4.push({
        days: ccdays,
        userInput: ccUserImput,
      });
      localStorage.setItem("data4", JSON.stringify(basket4)); // push data to the storage
      break;
    case "Friday":
      basket5.push({
        days: ccdays,
        userInput: ccUserImput,
      });
      localStorage.setItem("data5", JSON.stringify(basket5)); // push data to the storage
      break;

    default:
      localStorage.setItem("data", JSON.stringify(basket)); // push data to the storage
  } // end of switch
}
// Display Monday Items

let generateMonday = () => {
  return (boxMonday.innerHTML = basket
    //.filter(days === 'Monday')
    .map((x) => {
      let { id, item } = x;
      let search = basket.find((y) => y.id === id) || [];

     
      return `
  
        
              <div class="textdate"> ${x.userInput}</div>
        
       
   
    `;
    })
    .join(""));
};
generateMonday();

let generateTuesday = () => {
  return (boxTuesday.innerHTML = basket2
    //.filter(days === 'Monday')
    .map((x) => {
      let { id, item } = x;
      let search = basket2.find((y) => y.id === id) || [];

     
      return `
      <div class="textdate"> ${x.userInput}</div>
    `;
    })
    .join(""));
};
generateTuesday();

// Generate Wednesday
let generateWednesday = () => {
  return (boxWednesday.innerHTML = basket3
    //.filter(days === 'Monday')
    .map((x) => {
      let { id, item } = x;
      let search = basket3.find((y) => y.id === id) || [];

     
      return `
      <div class="textdate"> ${x.userInput}</div>
    `;
    })
    .join(""));
};
generateWednesday();
// Generate Thursday
let generateThursday = () => {
  return (boxThursday.innerHTML = basket4
    //.filter(days === 'Monday')
    .map((x) => {
      let { id, item } = x;
      let search = basket4.find((y) => y.id === id) || [];

      
      return `
      <div class="textdate"> ${x.userInput}</div>
    `;
    })
    .join(""));
};
generateThursday();
// Generate Friday
let generateFriday = () => {
  return (boxFriday.innerHTML = basket5
    //.filter(days === 'Monday')
    .map((x) => {
      let { id, item } = x;
      let search = basket5.find((y) => y.id === id) || [];

     
      return `
      <div class="textdate"> ${x.userInput}</div>
    `;
    })
    .join(""));
};
generateFriday();

// form submit and validation
document.getElementById("myForm").addEventListener("submit", function (e) {
  let y = document.forms["myForm"]["days"].value;
  if (y == "") {
    alert("Choose  a Day ");
    return false;
  }

  let x = document.forms["myForm"]["userInput"].value;
  if (x == "") {
    alert("Please filled your TO DO");
    return false;
  }

  e.preventDefault();
  getData(e.target);
  // clean values
  days.value = "";
  userInput.value = "";

  location.reload();
});

 

let button = document.getElementById("button"); // change color background

button.addEventListener("click", function () {
  console.log("Hi Jorge");

  button.style.backgroundColor = "blue";
});


let clearCartMonday = () => {
  // monday
  console.log("monday");
  basket = [];
  localStorage.setItem("data", JSON.stringify(basket));
  location.reload();
};

let clearCartTuesday = () => {
  // monday
  console.log("tuesday");
  basket2 = [];
  localStorage.setItem("data2", JSON.stringify(basket2));
  location.reload();
};
let clearCartWednesday = () => {
  // monday
  console.log("wednesday");
  basket3 = [];
  localStorage.setItem("data3", JSON.stringify(basket3));
  location.reload();
};

let clearCartThursday = () => {
  // monday
  console.log("thursday");
  basket4 = [];
  localStorage.setItem("data4", JSON.stringify(basket4));
  location.reload();
};

let clearCartFriday = () => {
  // monday
  console.log("Friday");
  basket5 = [];
  localStorage.setItem("data5", JSON.stringify(basket5));
  location.reload();
};
