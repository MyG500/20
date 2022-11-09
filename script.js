
class weeklyReport {
    constructor() {
        this.students = [];
    }


    addNewstudent(student) {
        this.students.push(student);
    }
    Report() {
        this.students.forEach(student => {
            console.log(`${student.Fname} ${student.Lname} number ${student.number} borrowed :`);
            student.books.forEach(book => console.log(`${book.category} ${book.BookName}`);
        });
    }


class student {
    constructor(Fname, Lname, number) {
        this.Fname = Fname;
        this.Lname = Lname;
        this.number = number;
        this.books = [];
    }
    borrow(book) {
        this.books.push(book);
    }
}

let N = new weeklyReport('new report');

let user1 = new student('ela', 'live', '052-346-653');
let user2 = new student('maya', 'dror', '054-324-235');



class Book {
    constructor(category, BookName) {
        this.category = category;
        this.BookName = BookName;
    }

let book1 = new Book('Comedy thriller', 'die for her');
let book2 = new Book('Childrenbook', 'Crawling to success');


user1.borrow(book1);
user1.borrow(book2);
user2.borrow(book1);



