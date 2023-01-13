class Book {
    constructor (author, title, subject, language){
    this.author = author;
    this.title = title;
    this.subject = subject;
    this.language = language;
    } 
    // will render book 
    // add something here so that comments persist and dont get removed when rerendering books
    render(){
        let book = document.createElement("li")
        book.classList.add("book")
        bookshelf.append(book)
        let bookAuthor = document.createElement("p")
        bookAuthor.innerHTML = this.author
        let bookTitle = document.createElement("p")
        bookTitle.innerHTML = this.title
        let bookSubject = document.createElement("p")
        bookSubject.innerHTML = this.subject
        let bookLanguage = document.createElement("p")
        bookLanguage.innerHTML = this.language
        book.append(bookAuthor, bookTitle, bookSubject, bookLanguage)

        // // comment input box
        // let commentInput = document.createElement("input")
        // commentInput.classList.add("commentInput")
        // book.append("commentInput")
        // // comment button
        // let commentButton = document.createElement("button")
        // commentButton.classList.add("commentButton")
        // book.append("commentButton")
        // // making the comments work

    }
}

class Bookshelf {
    constructor() {
        this.bookList = new Array();
    }
    addBook(addedBook) {
        this.bookList.push(addedBook)
    }
    render(){
        let container1 = document.createElement("div1")
        container1.classList.add("container1")
        let list1 = document.createElement("ul")
        list1.classList.add("list1")
        list1.innerHTML = this.bookList
        
            for (let i = 0; i < this.bookList.length; i++) {
            let book = this.bookList[i].render()
            list1.append(book)

        container1.append(list1)
    }
} 
}

// creates link with input submit class
const submit = document.body.querySelector('button');

//adding the event listener to the submit button
submit.addEventListener('click', getVal);



// Function being used to pull the submitted user data
function getVal(){
    let author = document.getElementsByClassName('author')[0].value;
    let title  = document.getElementsByClassName('title')[0].value;
    let subject = document.getElementsByClassName('subject')[0].value;
    let language = document.getElementsByClassName('language')[0].value;
    // initialize the bookshelf outside of the function to create 1 bookshelf instance instead of many bookshelves with 1 book each
    const newBookshelf = new Bookshelf();
    const newBook = new Book(author, title, subject, language);
    //testing to see if the book will render
    // newBook.render();
    
    newBookshelf.addBook(newBook)
    newBookshelf.render()
    console.log(newBook);
    console.log(newBookshelf)
}

