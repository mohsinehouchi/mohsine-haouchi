class Task {
  public name: string;
  public duration: string;
  public description: string;
  public isCompleted: boolean;
  public assignedTo: string;
  constructor(
    name: string,
    duration: string,
    description: string,
    isCompleted: boolean,
    assignedTo: string
  ) {
    this.name = name;
    this.duration = duration;
    this.description = description;
    this.isCompleted = false;
    this.assignedTo = assignedTo;
  }

  public completTask() {
    this.isCompleted = true;
  }
}
const task1 = new Task (
"Solve First OOP Problem",
"1 Hour",
"Trying to understand OOP with TS",
false,
"Mohsine",

)
const task2 = new Task (
    "Solve last OOP Problem",
    "45 min",
    "trying to understand OOP with ts",
    false,
    "mohsine"
)

console.log(`Task 1 name${task1.name}`);
console.log(`Task 1 duration ${task1.duration}`);
console.log(`Task 1 description ${task1.description}`);
console.log(`Task 1 isCompleted ${task1.isCompleted}`);
console.log(`Task 1 assignedTo ${task1.assignedTo}`);
1
console.log(`Task 2 name${task2.name}`);
console.log(`Task 2  duration ${task2.duration}`);
console.log(`Task 2  description ${task2.description}`);
console.log(`Task 2  isCompleted ${task2.isCompleted}`);
console.log(`Task 2  assignedTo ${task2.assignedTo}`);

task1.completTask();
console.log(`Task 1 isCompleted ${task1.isCompleted}`);

