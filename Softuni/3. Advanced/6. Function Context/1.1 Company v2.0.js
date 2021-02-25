class Company {
  constructor() {
    this.departments = [];
    this.index = {};
    // using index obj to optimize: so we find the department by the name without having to loop 

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

  addEmployee(username, salary, position, department) {
    // Валидация на параметри
    this._validateParam(username);
    this._validateParam(salary);
    this._validateParam(position);
    this._validateParam(department);

    if (salary < 0) {
      throw new Error("Invalid Input!");
    }

    // Откриваме референция към отдела по даденото име
    let currentDepartment = this.departments[this.index[department]];
    //-- ако отдела не съществъва да се създаде
    if (currentDepartment === undefined) {
      currentDepartment = {
        name: department,
        employees: [],
      };
      this.departments.push(currentDepartment);
      this.index[department] = this.departments.length - 1;
    }

    // добавяме работника към отдела
    currentDepartment.employees.push({
      username,
      salary,
      position,
    });

    return `New employee is hared. Name: ${username}. Position: ${position}`;
  }

  bestDepartment() {
    // сортираме отделите по средна заплата и взимаме първия
    const best = this.departments
      .map((department) => ({
        name: department.name,
        employees: department.employees.slice(),
        averageSalary:
          department.employees.reduce(getAverage, 0) /
          department.employees.length,
      }))
      .sort((a, b) => b.averageSalary - a.averageSalary)[0];

    if (best !== undefined) {
      best.employees.sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username));

      // връщаме оформения низ
      const result = [
        `Best department is: ${best.name}`,
        `Average salary: ${best.averageSalary}`,
      ];

      best.employees.forEach((employee) => {
        result.push(
          `${employee.username} ${employee.salary} ${employee.position}`
        );
      });

      return result.join("\n");
    }

    function getAverage(previous, current) {
      return previous + current.salary;
    }
  }

  // Private function
  _validateParam(param) {
    if (param === "" || param === undefined || param === null) {
      throw new Error("Invalid Input!");
    } // or (!param) for falsy values
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