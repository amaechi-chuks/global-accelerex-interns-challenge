'use strict';

let  createNode = function (element) {
    return document.createElement(element);
}

let append = function (parent, el) {
    return parent.appendChild(el);
}

//Implementation to fetch data from specified API(using Promise)
const  url = 'https://intern-challenge.herokuapp.com/persons';
let  newUrlData = '';
let postBody ={};
fetch(url)
    .then(function (resp) {
        return resp.json(); //returns data in JSON  format
    })
    .then(function (data) {
        const ul = document.getElementById('persons');
        const people = data.persons;
         
        return people.map(function (person) {
            let li = createNode('li'),
                img = createNode('img'),
                button = createNode('button'),
                
                id_name = person.id; //creating unique id for button
            img.src = person.photo;
            img.alt = person.name;
            
             img.setAttribute('id', id_name); // Trigger the Modal
             button.innerHTML = person.name + ' ';
             append(li, img);
            append(li, button);
            append(ul, li);
            
            // Get the modal
            const modal = document.getElementById('myModal');

            // Get the image and insert it inside the modal - use its 'alt' text as a caption
            let img_modal = document.getElementById(id_name);
            let modalImg = document.getElementById('img01');
            let captionText = document.getElementById('caption');
            img_modal.onclick = function () {
                postBody = person;
                newUrlData = id_name;
                //console.log(newUrlData);
                modal.style.display = 'block';
                modalImg.src = img.src;
                captionText.innerHTML = `Name : ${img.alt} <br> Age: ${person.age} <br> Description: <span id='mod'>${person.description}</span> <a id='modify' href='#'><i  class='fa fa-pencil-square-o' style='font-size:24px;color:red'</a></i> `;

                
                // Fetching the edit icon and toggling the edit form
                const  update = document.getElementsByClassName('fa')[0];
                //console.log(update);
                let modle = document.getElementById('mod');
                const edit = document.getElementById('to_edit');
               // console.log(edit);
                update.onclick = function () {
                    edit.style.display = 'inline';
                    modle.setAttribute('contenteditable', true);
                }
                edit.onsubmit = function () {
                    edit.style.display = 'inline'
                }
            }
             
            
            const edit = document.getElementById('to_edit');
            let  model = document.getElementById('mod');

            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName('close')[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = 'none';
                edit.style.display = 'none'
            }
        });
        //error handling
    }).catch(function (error) { 
        return error;
    });

    
document.getElementById('postData').addEventListener('submit', postData);


function postData(event) {
    return (JSON.stringify(postBody));
    let postUrl = url + newUrlData;
    event.preventDefault();
    return postUrl;
    // The data we are going to send in our request
    let data = document.getElementById('description').value;
     postBody.description = data;   
   // let good = {
    //    'description' : `${data}`
    //};
    // The parameters we are going pass to the fetch function
    let fetchData = {
        method: 'POST',
        body: postBody,
        headers: new Headers()
    }
    fetch(postUrl, fetchData)
        .then(function (resp) {
            return(resp.json())

        })
};