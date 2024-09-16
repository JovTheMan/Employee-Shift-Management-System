// Task 1: Initialize Employees with Shift Schedules
const employees = [
    { 
        name: 'John', 
        shifts: [
            { day: 'Monday', hours: 8 }, 
            { day: 'Wednesday', hours: 6 }
        ]
    },
    { 
        name: 'Sara', 
        shifts: [
            { day: 'Tuesday', hours: 5 }, 
            { day: 'Thursday', hours: 7 }
        ]
    },
    { 
        name: 'David', 
        shifts: [
            { day: 'Monday', hours: 8 }
        ]
    },
    { 
        name: 'Emily', 
        shifts: [
            { day: 'Friday', hours: 8 }
        ]
    }
];

// Task 2: Create a Function to Display Employee Shift Details
function displayEmployeeShifts(employee) {
    console.log(`Employee: ${employee.name}`);
    employee.shifts.forEach(shift => {
        console.log(`Day: ${shift.day}, Hours Worked: ${shift.hours}`);
    });
}

// Example usage of displayEmployeeShifts
console.log("Displaying Employee Shifts:");
displayEmployeeShifts(employees[0]);

// Task 3: Create a Function to Assign a New Shift
function assignShift(employeeName, day, hours) {
    // Find the employee by name
    const employee = employees.find(emp => emp.name === employeeName);
    
    // If employee found, check if they already have a shift that day
    if (employee) {
        const shiftExists = employee.shifts.some(shift => shift.day === day);
        if (shiftExists) {
            console.log(`Error: ${employeeName} already has a shift on ${day}.`);
        } else {
            // Assign new shift if no shift exists for that day
            employee.shifts.push({ day, hours });
            console.log(`Assigned ${hours} hours shift to ${employeeName} on ${day}.`);
        }
    } else {
        console.log(`Error: Employee ${employeeName} not found.`);
    }
}

// Example usage of assignShift
console.log("Assigning new shift:");
assignShift('John', 'Thursday', 5);

// Task 4: Create a Function to Calculate Total Hours Worked
function calculateTotalHours(employeeName) {
    // Find the employee by name
    const employee = employees.find(emp => emp.name === employeeName);
    
    if (employee) {
        // Sum up the hours of all shifts
        const totalHours = employee.shifts.reduce((total, shift) => total + shift.hours, 0);
        console.log(`${employeeName} has worked a total of ${totalHours} hours this week.`);
        return totalHours;
    } else {
        console.log(`Error: Employee ${employeeName} not found.`);
        return 0;
    }
}

// Example usage of calculateTotalHours
console.log("Calculating total hours worked:");
calculateTotalHours('Sara');

// Task 5: Create a Function to List Employees with Free Days
function listAvailableEmployees(day) {
    console.log(`Employees available on ${day}:`);
    // Iterate over employees and check who is free on the given day
    employees.forEach(employee => {
        const isFree = !employee.shifts.some(shift => shift.day === day);
        if (isFree) {
            console.log(employee.name);
        }
    });
}

// Example usage of listAvailableEmployees
console.log("Listing employees with free days:");
listAvailableEmployees('Monday');
