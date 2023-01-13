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

        // comment input box
        let container2 = document.createElement("div")
        book.append(container2)
        let commentInput = document.createElement("input")
        commentInput.setAttribute("type", "text")
        commentInput.setAttribute("placeholder", "commentInput")
        container2.append(commentInput)
        // comment button
        let commentButton = document.createElement("button")
        commentButton.setAttribute("class", "commentButton")
        commentButton.innertext = "Comment"
        container2.append(commentButton)
        // comment box
        let container3 = document.createElement('div')
        book.append(container3)
        let commentBox = document.createElement("p")
        commentBox.classList.add('commentBox')
        commentBox.innertext = "Comments:"
        container3.append(commentBox)
        // making the comments work
        commentButton.addEventListener("click", () => {
            let comment = document.createElement("p");
            if((commentInput.value).length > 280){
                return;
            } else {
                comment.innerText = commentInput.value;
                commentBox.append(comment);
                commentInput.value = "";
            }
        })
    }
}

class Bookshelf {
    constructor() {
        this.bookList = new Array();
    }
    addBook(addedBook) {
        this.bookList.push(addedBook)
    }
    // will render bookshelves
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
    const newBookshelf = new Bookshelf();
    const newBook = new Book(author, title, subject, language);
    //testing to see if the book will render
    // newBook.render();
    
    newBookshelf.addBook(newBook)
    newBookshelf.render()
    // console.log(newBook);
    // console.log(newBookshelf)
}

