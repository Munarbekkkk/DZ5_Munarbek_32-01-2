//  Задание 1

const array = [2, 19, 0, 12, 111, 92]
const arrayDub = []

for (let i = 0; i < array.length; i++) {
    arrayDub.push(array[i])
}

console.log(array)
console.log(arrayDub)

// Задание 2

const booksArray = ["Гарри Поттер и узник Азкабана","Убить пересмешника","Дневник Анны Франк","Гарри Поттер и философский камень","Паутина Шарлотты","Хоббит","Прислуга","Гроздья гнева","Голодные игры"]

const sortBooks = (books) => {
    let booksWithLetter = books.filter(book => book.toLowerCase().includes("у"))
    const booksWithoutLetter = books.filter(book => !book.toLowerCase().includes("у"))

    booksWithLetter = booksWithLetter.map(book => "Книга с буквой «у» " + book)

    const allBooks = booksWithLetter.concat(booksWithoutLetter)
    for (let i = 0; i < allBooks.length; i++) {
        console.log(allBooks[i])
    }
}

sortBooks(booksArray)


// Задание 3

var users = [
    {name: 'Adam', age:38 },
    {name: 'Jack', age:17 },
    {name: 'John', age:52 },
    {name: 'Oliver', age:12 },
    {name: 'Zack', age:49 },
    {name: 'Bob', age:29 },
    {name: 'Jacob', age:14 },
    {name: 'Aleks', age:18 },
]

const oldest = users.reduce((previousValue, currentValue) => {
    if (previousValue.age > currentValue.age) {
        return previousValue
    } else {
        return currentValue
    }
} )

const youngest = users.reduce((previousValue, currentValue) => {
    if (previousValue.age < currentValue.age) {
        return previousValue
    } else {
        return currentValue
    }
} )


const difference = oldest.age - youngest.age
console.log(difference)







