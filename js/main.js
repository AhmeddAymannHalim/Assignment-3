var bookmarkNameInput = document.getElementById('bookmarkNameInput');
var bookmarkSiteInput =document.getElementById('bookmarkSiteUrlInput');
var buttonSubmit = document.querySelector('.button-submit');
var tableBody = document.getElementById('tBody');




var bookMarkContainer ;
if(localStorage.getItem('bookMarks')!= null){
    bookMarkContainer = JSON.parse(localStorage.getItem('bookMarks'));
    displayBookMarks(bookMarkContainer)

}
else{
    bookMarkContainer= [];
}
function addBookMark() {
   var bookMark = {
     bookmarkName: bookmarkNameInput.value,
     bookmarkUrl: bookmarkSiteInput.value,
   }
   bookMarkContainer.push(bookMark);
   localStorage.setItem('bookMarks',JSON.stringify(bookMarkContainer));
   displayBookMarks(bookMarkContainer)
   clearForm();
 
}
//add event listener to submit button
buttonSubmit.addEventListener('click',function (eventInfo) {
    
    addBookMark();
})

function displayBookMarks(arr) {
    var cartona = ``;
    for(var i =0; i<bookMarkContainer.length;i++){
        cartona += ` 
        <tr>
        <td>${[i]}</td>
        <td>${arr[i].bookmarkName}</td>
        <td><a href="${arr[i].bookmarkUrl}" target="_blank" class="btn btn-success button-visit"> <i class="fa-solid fa-eye"></i>Visit</a></td>
        <td><button onclick="deleteBookMarks(${i})" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
       </tr>`;
    }
    tableBody.innerHTML = cartona;
    
    
}
function clearForm() {
    bookmarkNameInput.value='';
    bookmarkSiteInput.value='';
    
}
function deleteBookMarks(deleteIndex) {
    bookMarkContainer.splice(deleteIndex,1);
    localStorage.setItem('bookMarks',JSON.stringify(bookMarkContainer));
    displayBookMarks(bookMarkContainer)
    
}
function validatBookMark(name){
    var regex = /^[A-Z]{1}[a-z]{1,}[\w]{0,}$/;
    if(regex.test(name)){
        
        bookmarkNameInput.classList.replace('is-invalid','is-valid');
    }
    else{
        bookmarkNameInput.classList.add('is-invalid');
    }

}
function validatBookMarkUrl(term) {
    var regex = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
    if(regex.test(term)){
       bookmarkSiteInput.classList.replace('is-invalid','is-valid');


    }
    else{
        bookmarkSiteInput.classList.add('is-invalid');


    }
    
}

