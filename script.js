const quizData = [
    {
      question: "What is the capital of Pakistan?",
      options: ["Karachi", "Lahore", "Inslamabad", "Dengan"],
      answer: 2,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: 1,
    },
    {
      question: "Who wrote 'To Kill a Mockingbird'?",
      options: [
        "Harper Lee",
        "Mark Twain",
        "F. Scott Fitzgerald",
        "Ernest Hemingway",
      ],
      answer: 0,
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "O2", "CO2", "NaCl"],
      answer: 0,
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Southern Ocean",
        "Pacific Ocean",
      ],
      answer: 3,
    },
  ];
  
  /////// Best part of this code in js .....
  const quiz = document.querySelector("#quiz")
  
  const answerElm = document.querySelectorAll(".answer");
  const [questionElm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
      "#question , .option_1 , .option_2 , .option_3 ,.option_4"
    );
  const submitBtn = document.getElementById("submit");
  
  
  let currentQuiz = 0 ;
  let score = 0;
  
  const loadQuiz = () => {
      const {question ,options} = quizData[currentQuiz] ;
      console.log(question);
      questionElm.innerText = `${currentQuiz+1}: ${question}` ;
      options.forEach((corOption , index) => (window[`option_${index+1}`].innerText = corOption));
  };
  
  loadQuiz();
  ////////////////////////////////////////////////////
  const getSelectedOption = () => {
    let ans_index ;
    answerElm.forEach((corOption , index) => {
      if(corOption.checked){
        ans_index = index;
      }
    });
    return ans_index ;
  }
  const deselectedAnswers = () => {
    answerElm.forEach((curElm)=> curElm.checked = false);
  }
  
  submitBtn.addEventListener('click' , ()=>{
    const selectedOptIndex = getSelectedOption();
    console.log(selectedOptIndex);
  
    if(selectedOptIndex === quizData[currentQuiz].answer){
      score = score + 1;
    }
  
    currentQuiz++;
    if(currentQuiz < quizData.length){
      deselectedAnswers();
      loadQuiz();
    } else {
      quiz.innerHTML = `<div class="result">
      <h2> Your Score is ${score}/${quizData.length} Correct Answer</h2>
      <p> Congratulations on Completing the Quiz </p>
      <button class="reload-button" onclick="location.reload()"> PlayAgain </button>
      </div> 
      `;
    }
  }) ;
  
