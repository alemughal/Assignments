var courses = [];

for (var i = 0; i < 5; i++) {
    var course = prompt("Enter course " + (i + 1));
    courses.push(course);
}

alert(courses);

for (var i = 0; i < 5; i++) {
    var course = prompt(courses[i]);
    courses.splice(i, 1, course);
}

alert(course);
