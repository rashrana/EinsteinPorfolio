

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

        let span = document.createElement("span");
        span.classList.add('ptitle');

        let anchor = document.createElement("a");
        anchor.href = "#";

        let titleDiv = document.createElement("div");
        titleDiv.classList.add("paperLink");
        titleDiv.innerHTML = book.title;

        let icon = document.createElement("span");
        icon.classList.add('material-icons');
        icon.classList.add('open-icon')
        icon.innerHTML = "open_in_new";

        titleDiv.append(icon);
        anchor.append(titleDiv);
        span.append(anchor);
        newElem.append(span)
        papers.append(newElem);
    });
    return books;
}

getBooks(url);


function openMenu(){
    var items = document.getElementsByClassName('navItem');
    for( i =0; i< items.length; i++) {
        elem = items[i];
        if (elem.classList.contains("responsive")) {
            elem.classList.remove("responsive")
        }
        else {
            elem.classList.add("responsive");
        }
    }

}

function closeMenu(){
    var items = document.getElementsByClassName('navItem');
    for( i =0; i< items.length; i++) {
        items[i].classList.remove("responsive");
    }
}