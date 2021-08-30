$(document).ready(readyNow)

function readyNow(){
    console.log('Document Ready');
    $('#submit-button').on('click', createEmployee);   
}

let employeeArray = [];



function createEmployee(){
    console.log('Button pushed');
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeID = $('#employeeID').val();
    let employeeTitle = $('#employee-title').val();
    let employeeSalary = $('#annual-salary').val();
    employeeArray.push({firstName,lastName,employeeID,employeeTitle,employeeSalary}); //adds employee to end of array
    addEmployee();
}

totalSalary = 0;

function addEmployee(){
    let employee = employeeArray[employeeArray.length-1] //references the last employee added
    $('#employee-table').append(`<tr id = "${employee.employeeID}"> 
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.employeeID}</td>
    <td>${employee.employeeTitle}</td>
    <td>$${employee.employeeSalary}</td>
    <td><button class="delete-employee" id = "${employee.employeeID}">Delete</button></td>`) // creates a table row with and id of the employee id number for future referencing
    //console.log(document.getElementsByClassName(`${employee.employeeID}`)); // testing accessing row
    $('#monthly-cost-value').empty()
    totalSalary+= parseInt(employee.employeeSalary); //converts employee salary from string to number
    let monthlyCost = Math.round(totalSalary/12);
    $('#monthly-cost-value').append(`$${monthlyCost}`);
   
    if (monthlyCost > 20000){
        $('#monthly-cost-value').css('background-color','red');
    }
    $('.delete-employee').unbind().click(deleteEmployee); // from https://stackoverflow.com/questions/14969960/jquery-click-events-firing-multiple-times unbind removes prior event handlers from elements https://api.jquery.com/unbind/
}


function deleteEmployee(){
    console.log(employeeArray); //checking contents of employee array
    // let employeeRow = $(this).parent();
    // employeeRow.empty();
    let row = $(this).parent().parent();
    row.empty();
    //employeeArray.shift(row);
    //employeeArray.pop(row); //removes last element of employeeArray
    // hasID(`${employee.employeeID}`)
}