function Company() {
    
    const departments = [];
    const index = {};

    const company = {
      departments,
      index,
      addEmployee,
      bestDepartment
    };

    return company;
  
    function addEmployee(username, salary, position, department) {
      // Валидация на параметри
      _validateParam(username);
      _validateParam(salary);
      _validateParam(position);
      _validateParam(department);
  
      if (salary < 0) { throw new Error("Invalid Input!"); }
  
      // Откриваме референция към отдела по даденото име
      let currentDepartment = departments[index[department]];
      //-- ако отдела не съществъва да се създаде
      if (currentDepartment === undefined) {
        currentDepartment = {
          name: department,
          employees: [],
        };
        departments.push(currentDepartment);
        index[department] = departments.length - 1;
      }
  
      // добавяме работника към отдела
      currentDepartment.employees.push({
        username,
        salary,
        position,
      });
  
      return `New employee is hared. Name: ${username}. Position: ${position}`;
    }
  
    function bestDepartment() {
      // сортираме отделите по средна заплата и взимаме първия
      const best = departments
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
    function _validateParam(param) {
      if (param === "" || param === undefined || param === null) {
        throw new Error("Invalid Input!");
      } // or (!param) for falsy values
    }
  }
  
  let c = Company();
  
  c.addEmployee("Stanimir", 2000, "engineer", "Construction");
  c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
  c.addEmployee("Slavi", 500, "dyer", "Construction");
  c.addEmployee("Stan", 2000, "architect", "Construction");
  c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
  c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
  c.addEmployee("Gosho", 1350, "HR", "Human resources");
  
  console.log(c.bestDepartment());