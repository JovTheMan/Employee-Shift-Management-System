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
