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
