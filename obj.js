const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
    }
    },
    {
    name: "Victor",
    course: 4,
    subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
    }
    },
    {
    name: "Anton",
    course: 2,
    subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
    }
    }];
// 1.
// const getSubjects = (studentName, students) => {
//     const student = students.find(student => student.name === studentName)
//     const Subj = Object.keys(student.subjects)
//     const upperLtr = Subj.map(Subj => Subj.charAt(0).toUpperCase() + Subj.slice(1))
//     const withoutDesh = upperLtr.map(Dash => Dash.replace('_', " "))
//     return withoutDesh
//     }
// console.log(getSubjects('Anton', students));
// console.log(getSubjects('Tanya', students));
// console.log(getSubjects('Victor', students));

// 2.
// const getAverageMark = (studentName ,students) => {
//     const student = students.find(student => student.name === studentName)
//     const marks = Object.values(student.subjects).flat()
//     let sum = 0
//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//     }
//     const average = (sum / marks.length).toFixed(2);
//     return average
// }
// console.log(getAverageMark('Anton', students));
// console.log(getAverageMark('Victor', students));
// console.log(getAverageMark('Tanya', students));

// 3.
// const getStudentInfo = (stdntName ,students) => {
//     const student = students.find(student => student.name === stdntName)
//     student.averageMark = getAverageMark(stdntName, students)
//     return student
// }
// console.log(getStudentInfo('Tanya',students));

// 4.
// const getStudentsNames = (students) => {
//     const sortedName = [...students.map(student => student.name)]
//     sortedName.sort()
//     return sortedName
// }
// console.log(getStudentsNames(students));

// 5.
// const getBestStudent = (students) => {
//     const bestStudent = students.reduce((best, current) => {
//         const marks = Object.values(current.subjects).flat()
//         const sum = marks.reduce((total, mark) => total + mark, 0)
//         const average = sum / marks.length
//         if (!best || average > best.average) {
//             return { name: current.name, average: average }
//         } else {
//             return best;
//         }
//     }, null)
//     return bestStudent.name
// }
// console.log(getBestStudent(students));

// 6.
// const calculateWordLetters = (word) => {
//     const letterCount = {}
//     for(let i of word){
//         if(letterCount[i]){
//             letterCount[i]++
//         }else{
//             letterCount[i] = 1
//         }
//     }
//     return letterCount
// }
// console.log(calculateWordLetters('тест'));
