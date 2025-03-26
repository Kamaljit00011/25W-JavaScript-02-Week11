/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header");
const section = document.querySelector("section");
 // Dynamically change content of the header
header.innerHTML = `
    <h1>Learning JSON with JavaScript</h1>
    <p>Explore JSON data manipulation and how it integrates with JavaScript.</p>
`;

// Dynamically change content of the section
section.innerHTML = `
    <h2>What is JSON?</h2>
    <p>JSON (JavaScript Object Notation) is a lightweight data format often used for data exchange between a server and a web client. It is easy to read and write for humans, and easy for machines to parse and generate.</p>
    <h3>Example of a JSON Object:</h3>
    <pre id="json-example"></pre>
`;
// STEP 3a: Create the asynchronous function populate()
async function populate() {
    {
        // Example URL to fetch JSON data from (you could replace this with your own API or file)
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        // Wait for the response and parse it as JSON
        const data = await response.json();

        // Now that the data is fetched, populate the section with this JSON
        const jsonElement = document.getElementById('json-example');

        // Displaying the JSON data in a readable format
        jsonElement.textContent = JSON.stringify(data, null, 2); // Pretty format with indentation

    } catch (error) {
        console.error('Error fetching JSON data:', error);
        const jsonElement = document.getElementById('json-example');
        jsonElement.textContent = 'Failed to load JSON data.';
    }
}

    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4a: Create i-scream.json file with companyName, headOffice, established, active, topFlavors(name, calories, type, ingredients, image) */
    // STEP 4b: Store the URL of a JSON file in a variable */
    const url = "https://priyansht.github.io/25W-JavaScript-02-Week11/js/i-scream.json";

    // STEP 5: Use the new URL to create a new request object
    const request = new Request(url);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const responseJson = await response.json();
    // STEP 8: Output the iScream JSON object to the console 
    console.log(responseJson);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(responseJson);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(responseJson);
}

// STEP 3b: Call the populate() function
populate();
/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonBody) {
    // Create the H1 element
    let h1 = document.createElement("h1"); // <h1></h1>
    let p = document.createElement("p");
    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = jsonBody.companyName;
    p.textContent = `Head Office: ${jsonBody.headOffice}, est. ${jsonBody.established}, Active - ${(jsonBody.active) ? "Yes" : "No"}`;
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
    header.appendChild(p);
}

/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonBody) {
    // STEP 10c: Bind the JSON topFlavors object to a var
    let topFlavors = jsonBody.topFlavors;
    console.log(topFlavors);
    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < topFlavors.length; i++) {
        console.log(topFlavors[i]);
        // STEP 10e: Create the HTML elements
let article = document.createElement("article"); // <article></article>
let h2 = document.createElement("h2"); // <h2></h2>
let image = document.createElement("img"); // <img>
let p1 = document.createElement("p"); // <p></p>
let p2 = document.createElement("p"); // <p></p>
let list = document.createElement("ul"); // <ul></ul>

// STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
h2.textContent = topFlavors[i].name; // Set the flavor name in h2
p1.textContent = `Calories: ${topFlavors[i].calories}`; // Set the calories in p1
p2.textContent = `Type: ${topFlavors[i].type}`; // Set the type of ice cream in p2

// Set the image source (image URL) and alt text based on the JSON
image.setAttribute("src", topFlavors[i].image); // Set the source of the image (e.g., "image.jpg")
image.setAttribute("alt", topFlavors[i].name); // Set the alt text for the image (e.g., "chocolate-mint.jpg")

     // Assuming the data is available in the 'topFlavors' array from the fetched JSON

// STEP 10g: Loop through the 'topFlavors' array in the JSON data
for (let i = 0; i < topFlavors.length; i++) {
    const flavor = topFlavors[i]; // Get the current flavor object

    // Create the ARTICLE element to hold all content for each flavor
    const article = document.createElement("article");

    // STEP 10h: Create the elements to hold the flavor information
    const h2 = document.createElement("h2");
    h2.textContent = flavor.name; // Set the name of the flavor

    const p1 = document.createElement("p");
    p1.textContent = `Calories: ${flavor.calories}`; // Display the calories of the flavor

    const p2 = document.createElement("p");
    p2.textContent = `Ingredients:`;

    // Create the list to hold the ingredients
    const list = document.createElement("ul");

    // STEP 10g: Loop through the 'ingredients' array and create a list item for each ingredient
    let ingredients = flavor.ingredients; // Get the ingredients for the current flavor
    for (let j = 0; j < ingredients.length; j++) {
        console.log(ingredients[j]); // Log the ingredient to the console

        // Create a list item element
        const listItem = document.createElement("li");
        listItem.textContent = ingredients[j]; // Set the ingredient text
        list.appendChild(listItem); // Append the list item to the list
    }

    // STEP 10h: Create the image element for the flavor
    const image = document.createElement("img");
    image.src = flavor.image; // Set the image source from the flavor data
    image.alt = flavor.name; // Set the alt text to the flavor name

    // STEP 10i: Append each complete ARTICLE element to the SECTION element
    article.appendChild(h2); // Append the flavor name
    article.appendChild(p1); // Append the calories
    article.appendChild(p2); // Append the ingredients label
    article.appendChild(list); // Append the list of ingredients
    article.appendChild(image); // Append the image

    // Find the section where the content will be appended
    const section = document.querySelector("section");

    // Append the complete article to the section
    section.appendChild(article);
        
}
// STEP 11: Add a 3rd flavour of ice cream to the local JSON file, making use of the /images/strawberry-sprinkle.svg image
{
            "name": "Strawberry Sprinkle",
            "calories": 300,
            "type": "ice-cream",
            "ingredients": ["Chocolate Syrup", "Strawberry Chunks", "Vanilla Base", "Sprinkles"],
            "image": "https://priyansht.github.io/25W-JavaScript-02-Week11/images/strawberry-sprinkle.svg"
        }
    ]
}

// Lab: Extend the JavaScript application built in class to include two more flavors of ice cream.
 {
    "companyName": "I-Scream Company Inc.",
    "headOffice": "North Pole",
    "established": 2025,
    "active": true,
    "topFlavors": [{
            "name": "Chocolate Mint",
            "calories": 240,
            "type": "ice-cream",
            "ingredients": ["Chocolate Syrup", "Peppermint Sprinkle", "Vanilla Base"],
            "image": "https://priyansht.github.io/25W-JavaScript-02-Week11/images/chocolate-mint.svg"
        }, {
            "name": "Peach Mango",
            "calories": 285,
            "type": "milkshake-type ice-cream",
            "ingredients": ["Peach Syrup", "Mango Chunks", "Vanilla Base"],
            "image": "https://priyansht.github.io/25W-JavaScript-02-Week11/images/peach-mango.svg"
        },
        {
            "name": "Strawberry Sprinkle",
            "calories": 300,
            "type": "ice-cream",
            "ingredients": ["Chocolate Syrup", "Strawberry Chunks", "Vanilla Base", "Sprinkles"],
            "image": "https://priyansht.github.io/25W-JavaScript-02-Week11/images/strawberry-sprinkle.svg"
        }
    ]
}
    


// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations
