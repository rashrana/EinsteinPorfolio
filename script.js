

let url = "https://upadhayay.github.io/db.json";
const papers = document.getElementById('papers');

async function getBooks(url) {
    const response = await fetch(url);
    let books = await response.json();
    console.log(books);
    let Books = books.books;
    Books.forEach((book, index) => {  
        let newElem = document.createElement("div");
        newElem.classList.add("paper");
        newElem.id = "vol" + (index + 1);

        let header = document.createElement("h3");
        header.style.width = '100%';

        let anchor = document.createElement("a");
        anchor.href = "#";

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("paperLink");
        titleDiv.innerHTML = book.title;

        anchor.append(titleDiv);
        header.append(anchor);
        newElem.append(header)
        papers.append(newElem);
    });
    return books;
}

getBooks(url);
