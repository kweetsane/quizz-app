export class QUIZZ {
    Question:string;
    option:[];
    correctAnswer:any;
    userAnswer:any;

    constructor(Question,option,correctAnswer,userAnswer){
        this.Question=Question;
        this.option=option;
        this.correctAnswer= correctAnswer;
        this.userAnswer= userAnswer;
    }
}