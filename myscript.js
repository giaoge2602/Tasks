const questions = document.querySelectorAll('.question2');
const answers = document.querySelectorAll('.answer');


questions.forEach((question, index) => {
  question.addEventListener('click', () => {
  
    answers.forEach((answer) => {
      answer.style.display = 'none';
    });

    
    const correspondingAnswer = answers[index];
    if (correspondingAnswer.style.display === 'none') {
      correspondingAnswer.style.display = 'block';
    } else {
      correspondingAnswer.style.display = 'none';
    }
  });
});

  function copyToClipboard(text) {
       
        const tempInput = document.createElement("textarea");
        tempInput.value = text; 
        document.body.appendChild(tempInput); 
        tempInput.select(); 
        document.execCommand("copy");
        document.body.removeChild(tempInput);
        alert(`已复制到剪贴板: ${text}`); 
      }
  
     
      document.getElementById("box1").addEventListener("click", () => {
        copyToClipboard("725567051");
      });
  
   
      document.getElementById("box2").addEventListener("click", () => {
        copyToClipboard("newthread_geek@outlook.com"); 
      });
  
   
      document.getElementById("box3").addEventListener("click", () => {
        window.open("https://www.bilibili.com/bangumi/play/ep1114045?spm_id_from=333.337.0.0", "_blank"); // 替换为实际的 Github 链接
      });
    
