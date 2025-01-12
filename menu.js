const allItems = [
  {
    name: "Buttermilk Pancakes",
    price: "$15.99",
    about: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    image: "./images/item-1.jpeg",
  },
  {
    name: "Diner Double",
    price: "$13.99",
    about: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    image: "./images/item-2.jpeg",
  },
  {
    name: "Godzilla Milkshake",
    price: "$6.99",
    about: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    image: "./images/item-3.jpeg",
  },
  {
    name: "Country Delight",
    price: "$20.99",
    about: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`,
    image: "./images/item-4.jpeg",
  },
  {
    name: "Egg Attack",
    price: "$22.99",
    about: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    image: "./images/item-5.jpeg",
  },
  {
    name: "Oreo Dream",
    price: "$18.99",
    about: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    image: "./images/item-6.jpeg",
  },
  {
    name: "Bacon Overflow",
    price: "$8.99",
    about: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
    image: "./images/item-7.jpeg",
  },
  {
    name: "American Classic",
    price: "$12.99",
    about: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    image: "./images/item-8.jpeg",
  },
  {
    name: "Quarantine Buddy",
    price: "$16.99",
    about: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    image: "./images/item-9.jpeg",
  },
  {
    name: "Steak Dinner",
    price: "$39.99",
    about: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    image: "./images/item-10.jpeg",
  },
];

const breakfactItems = [
  {
    name: "Buttermilk Pancakes",
    price: "$15.99",
    about: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed`,
    image: "./images/item-1.jpeg",
  },
  {
    name: "Country Delight",
    price: "$20.99",
    about: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,`,
    image: "./images/item-4.jpeg",
  },
  {
    name: "Bacon Overflow",
    price: "$8.99",
    about: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird`,
    image: "./images/item-7.jpeg",
  },
];

const lunchItems = [
  {
    name: "Diner Double",
    price: "$13.99",
    about: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats`,
    image: "./images/item-2.jpeg",
  },
  {
    name: "American Classic",
    price: "$12.99",
    about: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    image: "./images/item-8.jpeg",
  },
  {
    name: "Egg Attack",
    price: "$22.99",
    about: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up`,
    image: "./images/item-5.jpeg",
  },
];

const shakesItems = [
  {
    name: "Godzilla Milkshake",
    price: "$6.99",
    about: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    image: "./images/item-3.jpeg",
  },
  {
    name: "Oreo Dream",
    price: "$18.99",
    about: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    image: "./images/item-6.jpeg",
  },
  {
    name: "Quarantine Buddy",
    price: "$16.99",
    about: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    image: "./images/item-9.jpeg",
  },
];

const dinnerItems = [
  {
    name: "Steak Dinner",
    price: "$39.99",
    about: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    image: "./images/item-10.jpeg",
  },
];

const mainContent = document.querySelector(".main-content");
const buttons = document.querySelectorAll(".button");

function generateHTML(items = allItems) {
  let HTML = "";
  items.forEach((item) => {
    HTML += `
      <div class="menu-item-card">
          <img src="${item.image}" alt="" class="item-image">
        <div class="text-content">
          <div class="price-name">
            <h2 class="item-name">${item.name}</h2>
            <p  class="item-price">${item.price}</p>
          </div>
          <div class="underline"></div>
          <p class="paragraph">
            ${item.about}
          </p>
        </div>
      </div>
    `;
  });
  mainContent.innerHTML = HTML;
}

generateHTML();

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = Object.entries(button.dataset)[0][1];
    if (item === "All") {
      generateHTML(allItems);
    } else if (item === "Breakfast") {
      generateHTML(breakfactItems);
    } else if (item === "Lunch") {
      generateHTML(lunchItems);
    } else if (item === "Shakes") {
      generateHTML(shakesItems);
    } else {
      generateHTML(dinnerItems);
    }
  });
});
