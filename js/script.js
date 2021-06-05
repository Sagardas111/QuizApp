//Question and Answer database
const quizDb = [
				{
								question: "Q1. Capital of India.",
								option1: "Dehli",
								option2: "Mumbai",
								option3: "Chennai",
								option4: "Kolkata",
								answer: "answer1"
				},
				{
								question: " Q2. Capital of Nepal.",
								option1: "Pokhran",
								option2: "Ghorahi",
								option3: "Kathmandu",
								option4: "Lalitpur",
								answer: "answer3"
				},{
								question: "Q3. Capital of China.",
								option1: "Tianjin",
								option2: "Chengdu",
								option3: "Beijing",
								option4: "Dongguan",
								answer: "answer3"
				},{
								question: "Q4. Capital of Japan.",
								option1: "Fukuoka",
								option2: "Sapporo",
								option3: "Yokohama",
								option4: "Tokyo",
								answer: "answer4"
				},{
								question: "Q5. Capital of Bhutan.",
								option1: "Thimphu",
								option2: "Paro",
								option3: "Jakar",
								option4: "Samtse",
								answer: "answer1"
				},{
								question: "Q6. Capital of Pakistan.",
								option1: "Lahore",
								option2: "Karachi",
								option3: "Peshawar",
								option4: "Islamabad",
								answer: "answer4"
				},
				{
								question: " Q7. Capital of Bangladesh.",
								option1: "Gazipur",
								option2: "Dhaka",
								option3: "Khulna",
								option4: "Barisal",
								answer: "answer2"
				},{
								question: "Q8. Capital of Indonesia.",
								option1: "Bali",
								option2: "Bandung",
								option3: "Jakarta",
								option4: "Manado",
								answer: "answer3"
				},{
								question: "Q9. Capital of England.",
								option1: "London",
								option2: "Birmingham",
								option3: "Leeds",
								option4: "St Davids",
								answer: "answer1"
				},{
								question: "Q10. Capital of Italy.",
								option1: "Milan",
								option2: "Rome",
								option3: "Naples",
								option4: "Palermo",
								answer: "answer2"
				}
				
];
//getting all the necessary elements
const body=document.querySelector('body')
const mainBox=document.querySelector('.main-box');
const watch=document.querySelector('#watch');
const question=document.querySelector('h2');
const optionsAll=document.querySelectorAll('.options');
const answersAll=document.querySelectorAll('.answer');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const caution=document.querySelector('#caution');
const colorBorder=document.querySelector('.color-border');
const ansBox=document.querySelector('.ans-box')
const scoreBox=document.querySelector('.score');
const questionIndex=document.querySelector('#question-index');
const submit=document.querySelector('.submit');
const next=document.querySelector('.next');

//declaration of all the variables
let questionCount=0;
let numberOfQuestion=quizDb.length;
let scoreCount=0;
let mark=0;
let count;
let time=15;
let timer;

			//function for question update
const getQuestion=()=>{
  let questionDet=quizDb[questionCount];		
		question.innerHTML=questionDet.question;
		option1.innerHTML=questionDet.option1;
		option2.innerHTML=questionDet.option2;
		option3.innerHTML=questionDet.option3;
		option4.innerHTML=questionDet.option4;
};
getQuestion();

//function for finding checked radio
const getCheckedAns=()=>{
  let selected;
		answersAll.forEach(answers=>{
				if(answers.checked){
		  		selected=answers	.id		
				};
		});
		return selected;
};

//function for marking right ans
const getCheckedAnsMark=(count)=>{					
if(optionsAll[count-1].children[2].style.color=="white"){
optionsAll[count-1].children[2].style.color="green";
				}else{
optionsAll[count-1].children[2].style.color="white";
				};
};

//function for score block 
const seeScore=()=>{
				if(scoreCount*100/numberOfQuestion>=60) {
							scoreBox.innerHTML=`Great😍, You have scored ${scoreCount} out of ${numberOfQuestion} 👍.`;
					 	ansBox.style.display="block";
						 submit.style.display="none";
				}else{
							scoreBox.innerHTML=`Ohh no😕, You have scored ${scoreCount} out of ${numberOfQuestion} 👍. Try one more time for a good score 🙂.`;
					 	ansBox.style.display="block";
						 submit.style.display="none";
				}
};

//function of timer
const timerSet=()=>{
			timer=setInterval(function(){
		  	if(time==-1){
			  		if(questionCount+1<numberOfQuestion){
					  		clearInterval(timer);
				  			submit.style.display="none";
			  				next.style.display="block";
count=quizDb[questionCount].answer.substring(6);	
optionsAll[count-1].children[2].style.color="white";
			  				getCheckedAnsMark(count);
			  				time=15;
	  				}else {
count=quizDb[questionCount].answer.substring(6);	
optionsAll[count-1].children[2].style.color="white";
			  	 		getCheckedAnsMark(count);
		  					seeScore();
	  	 		};
  			}else{
  					if(time<=5){
	    				watch.innerText=time;
	   colorBorder.style.height=time*100/15+"%";
  	  				watch.style.color="red";
  	  				colorBorder.style.background="red";
  							time--;
	  				}else{
	  						watch.innerText=time;
	   colorBorder.style.height=time*100/15+"%";
	  						watch.style.color="green";
	  						colorBorder.style.background="green";
	  						time--;					
  					};
  			};
	  		},1000);
};
timerSet();

//calling functions by submit button
submit.addEventListener('click',function(){
				const checkedAns=getCheckedAns();
				if(checkedAns==null){
								caution.style.display="block";
				}else{
								clearInterval(timer);
if(checkedAns===quizDb[questionCount].answer){
								scoreCount++;
								};
								if(questionCount+1<numberOfQuestion){
								caution.style.display="none";
								submit.style.display="none";
								next.style.display="block";
count=quizDb[questionCount].answer.substring(6);	
optionsAll[count-1].children[2].style.color="white";
								getCheckedAnsMark(count);
								}else{
								caution.style.display="none";
count=quizDb[questionCount].answer.substring(6);	
optionsAll[count-1].children[2].style.color="white";
								getCheckedAnsMark(count);
								seeScore();
								};
				};
});		
	
//next button functionality
next.addEventListener("click",function(){
				getCheckedAnsMark(count);
				questionCount++;
				getQuestion();
				questionIndex.innerText=(questionCount +1)+" of "+ numberOfQuestion+" questions."
				time=15;
				timerSet();
				submit.style.display="block";
				next.style.display="none";
				answersAll.forEach(options=>{
				options.checked=false;
				});	
});
								
