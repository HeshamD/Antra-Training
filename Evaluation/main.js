

// class Model{
//     constructor(){

//         this.courses = [
            
//         ]

//         //append to the addcourses section

//         addAppend(course)
//         {
//             this.courses = [...this.courses,course]
//         }

//         // Map through all the courses, and replace the text of the todo with the specified id

//         editCourse(id,updatedText)
//         {
//             this.
//         }
//     }
// }


// //END View class


// class View{
//     // for the view part set everything in the constructor
//     constructor(){
//         // root element
//         this.app = this.getElement('#root');

//         //the title of the app

//         this.title = this.createElement('h1');
//         this.title.textContent = 'Course selection'

//     }///End Constructor

//     // create an element with an optional css CLass

//     createElement(tag,className){

//         const element = document.createElement(tag);

//         if(className){
//             element.className.add(className);
//         }
        
//         return element;
//     }

//     //retrieve an element from the DOM
//     getElement(selector){
//         const element = document.querySelector(selector);

//         return element;
//     }


// }

// //END View class


// class Controller{
//     constructor(model,View){
//         this.model = model;
//         this.View = View;

//     }
// }

//END Controller class



//const app = new Controller(new Model(), new View());

// // fetching the data 
const api_json_url = 'http://localhost:4232/courseList';
// async function getCourseList(){
//     const response = await fetch(api_json_url);

//     const data = await response.json();

//     //return data;
//     console.log(data);
// }
// getCourseList();


fetch(api_json_url) // fetch the data
.then(function(response){
    return response.json();
}) //catch the server response
.then(function(courseLists){
    let placeholder = document.querySelector('#data-output');

    let out = "";

    for(let courseList of courseLists){
        out += `
            <tr> 
                <td>
                    ${courseList.courseName} 
                    <br>
                    ${courseList.required}
                    <br>
                    ${courseList.credit} 
                    <br>   
                </td> 
            </tr>
        `
    }

    placeholder.innerHTML = out;
})


