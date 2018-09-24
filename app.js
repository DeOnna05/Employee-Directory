//for loop to display all employees from the array in employeeList.js
const showAll = function(){  
  $('.content').empty();
//loop through employee list and show all content in paragrapgh
for(let i = 0; i < employeeList.length; i++){
    $('.content').append(`<p>${employeeList[i].name}</p>`)
    $('.content').append(`<p>${employeeList[i].officeNum}</p>`);
    $('.content').append(`<p>${employeeList[i].phoneNum}</p>`);
  } //how can I put a border around each contact
}

$('#view').on("click", showAll); //listener for view button

//user can add new input name, office number, and phone number and returns the updated employee list - needs a input to enter new information

const newInfo = function(){
    //variables for new values to be held and validated
    const newName = $('#name').val();
    const newOffice = $('#office').val(); //newOffice num getting pushed as string instead of number
    const newPhone = $('#phone').val();

    //confirm screen to verify newInfo before saving
    if(confirm("Please verify all of the following information is correct before continuing:\n\nName: " + newName + "\nOffice Number: " + newOffice + "\nPhone Number: " + newPhone + "\n\nPress OK to save or Cancel to go back")){
    //pushing new values to list in an object
   
    employeeList.push({
        name: newName, 
        officeNum: newOffice, 
        phoneNum: newPhone
    });
    //clear input fields
    $('#name').val(''); 
    $('#office').val(''); 
    $('#phone').val('');
    alert("Thank you! " + newName + " has been added to the Employee Directory");
    //show updated employee list
    showAll();
} else { //option to cancel newInfo
    $('#name').val(''); 
    $('#office').val(''); 
    $('#phone').val('');
};
};

$('#add').on("click", newInfo);  //listener for add button

//after user inputs a name, it returns yes if the employee exists and no if not. (if/else statement)

function checkList(){
    //variables to store data that is entered to compare later
    const nameInput = $('#name').val();
    
   for(let i = 0; i < employeeList.length; i++){
//loop through the employee list to see if name input matches name in list
    if(nameInput === employeeList[i].name)  {
        document.querySelector('.true').innerText = 'That employee is already in the directory';
            $('#name').val(''); 
            $('#office').val(''); 
            $('#phone').val(''); 
    } else {
       document.querySelector('.false').innerText = 'That employee is not in the directory';
            $('#name').val(''); 
            $('#office').val(''); 
            $('#phone').val('');
    }

};
};
$('#verify').on("click", checkList) //listener for verify


//user inputs existing name, office number and phone number and updates the office number and phone number then returns updated employee list 

function changeInput (){

}
$('#update').on("click", ) 
   










//Deletes employee with the matching name and then returns the new employee list
function removeContact(){
    const nameInput = $('#name').val(''); 
    //finds index of name input and splices it out
employeeList.splice(employeeList.indexOf(nameInput), 1)
    $('#name').val(''); 
    //shows updated employee list
    showAll();
}


$('#delete').on("click", removeContact) //listener for removeContact


