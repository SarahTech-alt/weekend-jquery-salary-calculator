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

function addEmployee(){
    let employee = employeeArray[employeeArray.length-1] //references the last employee added
    $('#employee-table').append(`<tr>
    <td>${employee.firstName}</td>
    <td>${employee.lastName}</td>
    <td>${employee.employeeID}</td>
    <td>${employee.employeeTitle}</td>
    <td>${employee.employeeSalary}</td>
    <td><button class="delete-employee">Delete</button></td>`)
    $('#monthly-cost-value').empty()
    totalSalary+= parseInt(employee.employeeSalary); //converts employee salary from string to number
    $('#monthly-cost-value').append(`${totalSalary}`);
    $('.delete-employee').on('click', deleteEmployee)
}
totalSalary = 0;

//gunction calculateCosts() {
   // console.log($(this));
    //totalSalary ++;

    //totalSalary+= $(this).parent(employeeSalary);
    //$('#monthly-costs').append(`$${totalSalary}`);
//}

function deleteEmployee(){
    console.log('hey there');
}