const confirmContainer=document.querySelector('.confirm-container')
const start=document.getElementById('start');
const cancel=document.getElementById('cancel');
const cancelText=document.getElementById('cancel-text');
//cancelText.style.display="none";
start.addEventListener('click',function () {
				window.location="html/quizpage.html";
});
cancel.addEventListener('click',function () {
				confirmContainer.style.display="none";
				cancelText.style.display="block";
			 cancelText.innerHTML="<p>If you are ready then click<b> Start</b> button and then click ok for the Quiz ☹️.</p><br><button class='start-again' onclick='location.reload()'>Start</button>"	;
			 cancelText.style.display="block";
});
