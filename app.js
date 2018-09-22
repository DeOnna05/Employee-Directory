//for loop to display all employees from the array in employeeList.js
const showAll = function(){  
  $('.content').empty();

for(let i = 0; i < employeeList.length; i++){
    $('.content').append(`<p>${employeeList[i].name}</p>`)
    $('.content').append(`<p>${employeeList[i].officeNum}</p>`);
    $('.content').append(`<p>${employeeList[i].phoneNum}</p>`);
  }
}

$('#view').on("click", showAll); 

//user can add new input name, office number, and phone number and returns the updated employee list - needs a input box to enter new information

const newInfo = function(){
    //variables for new values to be held
    const newName = $('#name').val();
    const newOffice = $('#office').val(); //getting pushed as string instead of number
    const newPhone = $('#phone').val();

    
    if(confirm("Please verify all of the following information is correct before continuing:\n\nName: " + newName + "\nOffice Number: " + newOffice + "\nPhone Number: " + newPhone + "\n\nPress OK to save or Cancel to go back")){
    //pushing new values to list in an object
   
    employeeList.push({
        name: newName, 
        officeNum: newOffice, 
        phoneNum: newPhone
    });
    //clear input fields and return updated list
    $('#name').val(''); 
    $('#office').val(''); 
    $('#phone').val('');
    alert("Thank you! " + newName + " has been added to the Employee Directory");
} else {
    $('#name').val(''); 
    $('#office').val(''); 
    $('#phone').val('');
};
};

$('#add').on("click", newInfo); 


$('#verify').on("click", ) //after user inputs a name, it returns yes if the employee exists and no if not. (if/else statement)

$('#update').on("click", ) //user inputs existing name, office number and phone number and updates the office number and phone number then returns updated employee list 


$('#delete').on("click", ) 
