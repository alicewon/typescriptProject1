import Job, {Person, Type2} from './interfaces'

const isOpen: boolean = false

const myName: string = 'alice'

const age: number = 30

const list: number[] = [0,1,2,3]

// tuple: has to follow order of types declared
const me: [string, number] = ["Alice", 30]

// enum
// enum Job { WebDev, WebDesigner, PM }
const job: Job = Job.WebDev

// any
const phone: any = "Pixel"
const tablet: any = 3

// never
// undefined
// null

// Functions in TS
// ? for optional params
// const sayWord = (word?: string) :string => {
//     console.log(word || "Hello")
//     return word || "Hello"
// }

// sayWord()


// default params
// Rest params work as expected
const sayWord = (word = "Hello", ...otherStuff: string[]) :string => {
    console.log(otherStuff)
    return word
}

sayWord("Scott", "Wes")

// Implicit types in TS
let newName: string | number | boolean = 'Scott' 
newName = "Wes"
// newName = 10
// newName = false
console.log(newName)

// Inferring type from a variable, from INITIAL declaration, not the current value
let newNameTwo = newName 
// newNameTwo = 11

// Union Types with |
const makeMargin = (x: string | number): string => {
    return `margin: ${x}px`;
}

makeMargin(10)


//Null and Undefined types

let dog: string = "sammy"
dog = null
console.log(dog)
dog = "Lucy"
dog = undefined
// dog = 10
// dog = false


// Interface (similar to GraphQL) - allows to check for object shape, or named params
// Replacement for named parameters
// interface Person {
//     name?: string, // optional param (?)
//     age: number
// }

const sayName = ({name, age}: Person): string => {
    console.log(name, age)
    return name
}

// sayName({
//     name: "Alice", 
//     age: 32
// })

sayName({
    age: 32,
    // name: "Alice", 
})
// order of params matters when not using an interface. Once interface is defined, you don't need to specify order

//TS Docs example:
interface LabeledValue {
    label: string
}

function printLable(labeledObj: LabeledValue){
    console.log(labeledObj.label)
}

let myObj = {size: 10, label: "Size 10 Object"}

printLable(myObj)

//Enumzzz - define a set of named constants, list of exact items

// enum Type2 {
//     Video = "VIDEO", // 0 default unless declared
//     BlogPost = "BLOG_POST", // 1
//     Quiz = "QUIZ" // 2
// }

const createContent2 = (contentType: Type2) => {}
createContent2(Type2.Video)
console.log(Type2.Quiz)


// Classes

class Team {
   readonly teamName: string //readonly - prevents from being changed
//    public teamName: string

    constructor(teamName) {
        this.teamName = teamName
    }
    score(): string {
        console.log(this.teamName)
        return "goal!"
    }
}

const redWings = new Team('Red Wings')
redWings.score()
redWings.teamName

// Generics
const outputInput = <T>(arg: T): T => {
    return arg
}

const output: string = outputInput("hi")
outputInput(3)