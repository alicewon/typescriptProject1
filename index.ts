const isOpen: boolean = false

const myName: string = 'alice'

const age: number = 30

const list: number[] = [0,1,2,3]

// tuple: has to follow order of types declared
const me: [string, number] = ["Alice", 30]

// enum
enum Job { WebDev, WebDesigner, PM }
const job: Job = Job.WebDev

// any
const phone: any = "Pixel"
const tablet: any = 3

// never
// undefined
// null

// Functions in TS

const sayWord = (word: string) :string => {
    console.log(word)
    return word
}

sayWord("Alice")

