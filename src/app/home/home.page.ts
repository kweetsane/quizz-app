import { Component, ɵConsole } from '@angular/core';
import {QUIZZ} from '../quizz';
import {Router} from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  
  answer=0;
  
  Pass:boolean ;
  Question=[
    new QUIZZ("what does covid-19 stand for?",
    
    
    
    ["its a term for Coronavierus Disease 19","its a term that stands for coronovirus disease 2019"],"its a term that stands for coronovirus disease 2019","userAnswer1"),
   
   
   
   
   
   
    new QUIZZ("what other viruses belong to the coronavirus family?",["SARS and influenza", "SARS AND MERS", "SARS AND HIV"],"SARS AND MERS","userAnswer2"),
    new QUIZZ("A vaccine stimulate yoyr immune sytstem ",["True","False"],"True","userAnswer3"),
    new QUIZZ("There are currently vaccines for the following coronaviruses",["SARS","MERS","MERS AND SARS","None of the above"],"None of the above","userAnswer4"),
    new QUIZZ("How many candidate for covid-19 have been proposed",["25","100","120"],"120", "useranswer5"),
    new QUIZZ("The virus is mutating  rapidly",["True","False"],"False","userAnswer6")

  ];

  submit(){
  for (let index = 0; index < this.Question.length; index++) {
    console.log(this.Question[index].correctAnswer);
    console.log(this.Question[index].userAnswer)
    if (this.Question[index].correctAnswer==this.Question[index].userAnswer ) {
    this.answer =this.answer+1;
    
    }  
  }  
  console.log(this.answer/ this.Question.length*100)
  
  if (this.answer/ this.Question.length*100  >=80) {
   
    console.log("passed")

    this.Pass =true;
    
  }else {
   
    this.Pass =false;
    console.log("fail")
  }
  
}
}
