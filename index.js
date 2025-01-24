let command=[];
function CommandPage(){

  function saveToStorage() {
    localStorage.setItem('command', JSON.stringify(command));
  }
 function UserPage(){
 function LoadCommand(){
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('load',()=>{
    
   command=JSON.parse(xhr.response);
   saveToStorage();
   html=Loadcommands();
   document.querySelector('body').innerHTML=html;
   
   return command;
     })
    
    xhr.open('GET','https://chinavipbackend.onrender.com/article');
    xhr.send();
    }
  LoadCommand();
  }
  UserPage();
  let html='';
  let i=1;
function Loadcommands(){
  command.forEach((item)=>{
      html=html+`<div class="student-info">
        <h2>Étudiant ${i}</h2>
        <p><strong>Nom:</strong>${item.Name}</p>
        <p><strong>Note:</strong> ${item.Note}</p>
        <p><strong>Passport:</strong> ${item.Passport}</p>
        <p><strong>Âge:</strong> ${item.Age}</p>
         <p><strong>Niveau:</strong>${item.Niveau}</p>
         <p><strong>Filière:</strong>${item.filiere}</p>
        <p><strong>Numéro:</strong> ${item.Numero}</p>
       
    </div>

`
i++;
  }  )
  
  return html;}
}



document.querySelector('.refresh').addEventListener('click',()=>{
  setTimeout(function() {
    // Code to be executed after 2 seconds
    CommandPage();
  }, 3000);
  

})