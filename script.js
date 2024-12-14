// Loot item list
const lootItems = [
  { title: "Mug of Stale Coffee", description: "All coffee poured on this cup immediately becomes stale." },
  { title: "One Finger Ring", description: "A ring that can only be wore on one finger." },
  { title: "Stick of water dowsing", description: "A stick that can identify water when submerged in water."},
  { title: "Pouch of Pennies", description: "All coins inserted into the pouch are automatically exchanged into pennies."},
  { title: "Visibility Cape", description: "An invisibile Cape that turns visible when wore." },
  { title: "Stone of Garbage Detecting", description: "A stone that shines when detecting garbage. It seems to always be shining."},
  { title: "Cape of 75% levitation", description: "Levitates 75% of the wearers body." },
  { title: "Lamp Lighter", description: "Turns on a lamp that it can touch." },
  { title: "Tiara of Self Mind Reading", description: "Allows the wearer to read the wearer's thoughts." },
  { title: "Hairpin of instant baldness", description: "This hairpin instantly balds the wearer." },
  { title: "Ring of Hairy fingers", description: "Allows the wearer to instantly grow their finger hairs once a day." },
  { title: "Crown of Immortality", description: "A crown thats is very hard to kill." },
  { title: "Hat of Hat Seduction", description: "Allows the wearer to seduce hats." },
  { title: "Ring of Desaturation", description: "A ring that drains all the colour of the wearer's appearance." },
  { title: "Scroll of Expired Coupon", description: "Creates an exact replica of any coupon that has already expired." },
  { title: "Helmet of amphibious breathing", description: "The wearer now requires both air and water to breathe." },
  { title: "Longest word Papyrus", description: "A Papyrus that insantly records the longest word the holder said during the day." },
  { title: "Tablespoon of Salt", description: "A tiny table that can support just a spoon of salt."},
  { title: "Ring of Wishes", description: "Allows the wearer to wish for anything." },
  { title: "Arrow of Fly slaying", description: "This arrow deals extra damage to flies. " },
  { title: "Balanced Breakfast Basket", description: "This basket can only hold a pair number of eggs." },
  { title: "Fiesta Feeking Sombrero", description: "The wearer can identify any party happening in a 100 meter radius." },
  { title: "Perfume of Subtle memories", description: "This perfume smells just like nostalgia." },
  { title: "Wooden Carved Horse", description: "A wooden scale replica of a half centaur half horse figure." },
  { title: "Success Dress", description: "A dress worn only by the most succesful people." },
  { title: "Sleeve pouch of Aces", description: "A little pouch that holds a deck of cards and it's attacheable to any sleeve. It has a 4/52th chance of drawing an Ace." },
  { title: "Pillow of Sweet Dreams", description: "a pillow that allows the wearer to dream about candy."},
  { title: "Gloves of Dibs", description: "Gloves that inscript your name on anything you call Dibs."},
  { title: "Pot of Instant Rice", description: "This pot can cook 1 minute rice in 58 seconds."},
  { title: "Mug of Another Round", description: "A mug that shouts \"Another one!\" whenever you finish your drink."},
  { title: "Hood of Mistery", description: "A hood that makes the wearer look very misterous."},
  { title: "Sticky Notes", description: "A pile of yellow squared papers that are really stuck to each other."},
  { title: "Treasure Map", description: "An empty papyrus with a red X on the center."},
  { title: "Coin of Heads", description: "A coin that when flipped will always land on someone's head."},
  { title: "Coin of Tails", description: "A coin that when flipped will always land on someone's tail."},
  { title: "Tote bag of Item Holding", description: "A tote bag that hides any item in a cluster of random items."},
  { title: "8 Ball of Violence", description: "An 8 Ball that answers all questions with violence."},
  { title: "Spaguetti Bag", description: "A bag that spills out spaguetti once a day."},
  { title: "Belt of pants holding", description: "A leather belt that keeps pants from falling down."},
  { title: "Lava Lamp", description: "A lamp that turns into lava when turned on."},
  { title: "Wristband of Left and Right", description: "A wrist band that identifies on what wrist it is being worn."},
  { title: "Pocket Watch of the Blind Squirrel", description: "A broken pocket watch that tells the exact time twice a day."},
  { title: "Improvised Megaphone", description: "A megaphone that requires a squirrel attached with a rope to amplify any sound."},
  { title: "Rat enchanting flute", description: "A flute made of cheese."},
  { title: "Conch of Divinitation", description: "A conch that plays up to 8 recordable messages when pulling it's string."},
  { title: "Improvised Megaphone", description: "A megaphone that requires a squirrel attached with a rope to amplify any sound."},
  { title: "Bubblegum of Never Ending Flavour", description: "A gum that allows you to taste your last meal on every chew."},
  { title: "Glass of Existencial Pondering", description: "A glass that can only be filled or emptied to the half."},
  { title: "Spyglass of Proximity", description: "A spyglass that makes objects appear bigger the closer they are."},
  { title: "Bait fishing Bait", description: "A bucket of Bait. Great for catching Bait."},
  { title: "Genius Lamp", description: "A lamp that makes anyone that rubs it feel like a genius."},
  { title: "Socks of Frog Jumping", description: "A pair of socks that allows the user to jump as high as the nearest frog."},
  { title: "Napkin of Pizza Crust", description: "A cloth napkin that disposes the crust of a slice of pizza."},
];

// Track used items
let usedItems = new Set();

// Function to get a random unused item
function getUnusedItem() {
  const unusedItems = lootItems.filter(item => !usedItems.has(item.title));
  if (unusedItems.length === 0) {
    // Reset the usedItems set if all items are used
    usedItems.clear();
    return getUnusedItem();
  }
  const randomItem = unusedItems[Math.floor(Math.random() * unusedItems.length)];
  usedItems.add(randomItem.title);
  return randomItem;
}

// Generate loot cards
function generateLootCards() {
  const container = document.getElementById("cardsContainer");

  // Create 3 cards
  for (let i = 0; i < 3; i++) {
    const card = document.createElement("div");
    card.classList.add("thecard");

    const front = document.createElement("div");
    front.classList.add("thefront");
    front.innerHTML = `<h1>Reveal your Loot!</h1><p>Click on Me!</p>`;

    const back = document.createElement("div");
    back.classList.add("theback");

    // Assign initial loot to the back
    const initialItem = getUnusedItem();
    back.innerHTML = `<h1>${initialItem.title}</h1><p>${initialItem.description}</p>`;

    // Append front and back faces to the card
    card.appendChild(front);
    card.appendChild(back);

    // Add click event to flip the card
    card.addEventListener("click", function () {
      this.classList.toggle("flipped");
    });

    // Add transitionend event to update the item only when flipping back
    card.addEventListener("transitionend", function (event) {
      if (!this.classList.contains("flipped") && event.propertyName === "transform") {
        const newItem = getUnusedItem();
        back.innerHTML = `<h1>${newItem.title}</h1><p>${newItem.description}</p>`;
      }
    });

    // Append card to container
    container.appendChild(card);
  }
}

// Initialize the loot cards when the page loads
document.addEventListener("DOMContentLoaded", generateLootCards);
