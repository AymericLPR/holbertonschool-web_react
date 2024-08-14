// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  // Create student objects
  const student1: Student = {
    firstName: "Test1",
    lastName: "Test2",
    age: 2,
    location: "Toulouse",
  };
  
  const student2: Student = {
    firstName: "1tseT",
    lastName: "2tseT",
    age: 22,
    location: "Toulouse",
  };
  
  // Store students in an array
  const studentsList: Student[] = [student1, student2];
  
  // Render table
  const renderTable = (students: Student[]) => {
    const table = document.createElement("table");
  
    // Add table header
    const thead = table.createTHead();
    const headerRow = thead.insertRow();
    const header1 = document.createElement("th");
    const header2 = document.createElement("th");
    header1.textContent = "First Name";
    header2.textContent = "Location";
    headerRow.appendChild(header1);
    headerRow.appendChild(header2);
  
    // Add table body
    const tbody = table.createTBody();
    students.forEach((student) => {
      const row = tbody.insertRow();
      const cell1 = row.insertCell();
      const cell2 = row.insertCell();
      cell1.textContent = student.firstName;
      cell2.textContent = student.location;
    });
  
    // Append table to the document body
    document.body.appendChild(table);
  };
  
  // Call renderTable function with studentsList
  renderTable(studentsList);
