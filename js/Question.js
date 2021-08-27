class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name Here....");
   //Create a input box to enter the number
    this.input2 = createInput("").attribute("placeholder","Enter Correct Option No..")


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.qusestion = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.input2.hide();
    this.qusestion.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
   this.qusestion.html("Question:- What starts and ends with the letter 'E', but has only one letter ?")
   this.qusestion.position(100,70)

   this.option1.html("1: Everyone")
   this.option1.position(100,100)

   this.option2.html("2: Envelope")
   this.option2.position(100,125)

   this.option3.html("3: Estimate")
   this.option3.position(100,150)

   this.option4.html("4: Example")
   this.option4.position(100,175)


    this.input1.position(100, 270);
    this.input2.position(320,270)
    this.button.position(270, 340);
    this.message.position(200,200)

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.input1.hide();
    this.input2.hide();
    this.qusestion.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.button.hide();
    this.message.html("Thank You, Your Answer Has Been Submitted")
    
    }
  )


  }
}
