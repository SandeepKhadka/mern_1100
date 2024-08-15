/* 

    a) if - else
    b) else - if
    c) switch - case

    d) loop
        - while
        - do-while
        - for
        - for....of
        - for....in
    
    break , continue

*/

let percentage = 37;

// if syntax

// if(exp){
//     // if body
// }else{
//     // else body
// }

if (percentage >= 80) {
  // if body
  console.log("First Div with Distinction");
} else {
  if (percentage >= 60 && percentage < 80) {
    console.log("First Div");
  } else {
    if (percentage >= 45 && percentage < 60) {
      console.log("Second Div");
    } else {
      if (percentage >= 35 && percentage < 45) {
        console.log("Third Div");
      }
    }
  }
  // else body
}
// console.log("Your marks is less than 80");

// else if syntax

if(percentage >= 80){
    console.log("First Div with Distinction")
} else if(percentage >= 60 && percentage < 80){
    console.log("First Div");
} else if(percentage >= 45 && percentage < 60){
    console.log("Second Div");
}else if(percentage >= 35 && percentage < 45){
    console.log("Third Div");
} else{
    console.log("Failed");
    
}

// switch case syntax

let act = "ok" // add, edit, show, delete, 

switch(act){
    case 'add':
        console.log("This is add action")
        break;
    
    case 'show':
        console.log("This is show action");
        break

    case 'edit':
        console.log("This is edit action");
        break
    
    case 'delete':
        console.log("This is delete action");
        break
    
    default:
        console.log("No match found")    
}