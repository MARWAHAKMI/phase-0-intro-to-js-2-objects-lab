// Write your solution in this file!

const employee = {
    name: "Sam"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value }
}

console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"))

console.log(employee['streetAddress'])
//////////////////////////////////////////////////////
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway'))

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }
    delete newEmployee[key]
    return newEmployee
}

console.log(deleteFromEmployeeByKey(employee, 'name'))
console.log(employee.name)

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
console.log(destructivelyDeleteFromEmployeeByKey(employee, 'name'))
console.log(employee.name)
