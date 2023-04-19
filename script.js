
const quote = document.getElementById('quote');
const author = document.getElementById('author');
const bttn = document.getElementById('newquotebtn');

function getquotes(){
   let rndm = Math.floor(Math.random() * 1642);
   quote.innerHTML = jason[rndm].text;
   author.innerHTML = (jason[rndm].author || "unknown");
};

let jason = "";

const getapi =  async() => {
    let api = "https://type.fit/api/quotes";
    try {
        let data = await fetch(api);
    jason = await data.json();
    getquotes();
} catch (error) {}
};

getapi();

bttn.addEventListener('click', getquotes);