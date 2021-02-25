class Company {
    constructor(){
        this.departments = [];
    /* Structure departments:
        [    
            {
                name: 'departmentName',
                employees: [
                    {
                        name: 'Stan',
                        salary: 2500,
                        position: 'Web Dev'
                    }
                ]
            }
        ]
    */
    }

    addEmployee(username, salary, position, department){

        // Валидация на параметри
        this._validateParam(username);
        this._validateParam(salary);
        this._validateParam(position);
        this._validateParam(department);

        if (salary < 0) { throw new Error('Invalid Input!'); }
        
        // Откриваме референция към отдела по даденото име
        let currentDepartment = this.departments.find(dep => dep.name === department); // if theres no such it will return undefined
        //-- ако отдела не съществъва да се създаде
        if (currentDepartment === undefined) {
            currentDepartment = {
                name: department,
                employees: []
            };
            this.departments.push(currentDepartment);
        }

        // добавяме работника към отдела
        currentDepartment.employees.push({
            username,
            salary,
            position
        });

        return `New employee is hared. Name: ${username}. Position: ${position}`;
    }

    bestDepartment(){

        // сортираме отделите по средна заплата
        const departments = this.departments.map(department => { // By using .map we are not changing the original array 
            
            const copyDepartment = {
                name: department.name,
                employees: department.employees.slice() // make a copy of employees array
            };
            // or:
            //const copyDepartment = Object.assign({}, department);

            let total = 0;
            for (const employee of copyDepartment.employees) {
                total += employee.salary;
            }
            copyDepartment.averageSalary = total / department.employees.length;
            // Using reduce:
            // copyDepartment.averageSalary = department.employees.reduce((p, c, i, a) => p + c.salary, 0) / department.employees.length;
            
            return copyDepartment;
        });

        departments.sort((a, b) => b.averageSalary - a.averageSalary);

        // взимаме първия
        const best = departments[0];
        if (best !== undefined) {
            // сортираме масива работници по заплата и име
            best.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

            // връщаме оформения низ
            const result = [
                `Best department is: ${best.name}`,
                `Average salary: ${best.averageSalary}`
            ];

            best.employees.forEach(employee => {
                result.push(`${employee.username} ${employee.salary} ${employee.position}`);
            });

            return result.join('\n');
        }


    }

    // Private function
    _validateParam(param){
        if (param === '' || param === undefined || param === null) { throw new Error('Invalid Input!'); } // or (!param) for falsy values
    }
}


let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());