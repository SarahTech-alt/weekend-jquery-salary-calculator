$(document).ready(readyNow)

function readyNow(){
    console.log('Document Ready');
    $('#submit-button').on('click', addEmployee);
}

function addEmployee(){
    console.log('Button pushed');
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let employeeID = $('#employeeID').val();
    let employeeTitle = $('#employee-title').val();
    let employeeSalary = $('#annual-salary').val();
    $('#employee-table').append(`<tr>
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${employeeID}</td>
    <td>${employeeTitle}</td>
    <td>${employeeSalary}</td>`)
}

