export interface Person {
    name: string, // optional param (?)
    age?: number
}

enum Job { 
    WebDev,
    WebDesigner, 
    PM 
}

export default Job

export enum Type2 {
    Video = "VIDEO", // 0 default unless declared
    BlogPost = "BLOG_POST", // 1
    Quiz = "QUIZ" // 2
}