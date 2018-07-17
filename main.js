'use strict';

let createNode = function (element) {
    return document.createElement(element);
}

let append = function (parent, el) {
    return parent.appendChild(el);
}

let url = 'https://intern-challenge.herokuapp.com/persons/';
let newUrlData = '';
let postBody = {};
fetch(url)
    .then((resp) => {
        return resp.json();
    })
    .then((data) => {
        let ul = document.getElementById('persons');
        let people = data.persons;

        return people.map((person) => {
            let li = createNode('li'),
                img = createNode('img'),
                button = createNode('button'),
                id_name = person.id; //creating unique id for button
            img.src = person.photo;
            img.alt = person.name;
            //button.setAttribute('class', class_name); // Trigger the Modal 
            img.setAttribute('id', id_name); // Trigger the Modal
            //img.setAttribute('alt', person.name);
            button.innerHTML = person.name + ' ';
            append(li, img);
            append(li, button);
            append(ul, li);

            // Get the modal
            let modal = document.getElementById('myModal');

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            let img_modal = document.getElementById(id_name);
            let modalImg = document.getElementById("img01");
            let captionText = document.getElementById("caption");
            img_modal.onclick = () => {
                postBody = person;
                newUrlData = id_name;
                // console.log(newUrlData);
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = `Name : ${img.alt} <br> Age: ${person.age} <br> Description: <span id='mod'>${person.description}</span> <a id='modify' href='#'><i  class="fa fa-pencil-square-o" style="font-size:24px;color:red"</a></i> `;
                // Fetching the edit icon and toggling the edit form
                let update = document.getElementsByClassName('fa')[0];
                //console.log(update);
                let modle = document.getElementById('mod');
                let edit = document.getElementById('to_edit');
                //console.log(edit);
                update.onclick = () => {
                    edit.style.display = 'inline';
                    modle.setAttribute('contenteditable', true);
                }
                edit.onsubmit = () => {
                    edit.style.display = 'inline'
                }
            }

            let edit = document.getElementById('to_edit');
            let modle = document.getElementById('mod');
            // Get the <span> element that closes the modal
            let span = document.getElementsByClassName("close")[0];
            // When the user clicks on <span> (x), close the modal
            span.onclick = () => {
                modal.style.display = "none";
                edit.style.display = 'none'
            }
        });

    }).catch((error) => {
        return (error);
    });

//Listen to Submit action from the html Form
document.getElementById('postData').addEventListener('submit', postData);

// Function to fire after submit button is clicked
function postData(event) {
    //console.log(JSON.stringify(postBody));
    let postUrl = url + newUrlData; //setting new url for POST action
    event.preventDefault();
    //console.log(postUrl);
    // The data we are going to send in our request
    let data = document.getElementById('description').value;
    //postBody.description = data;
    let postInfo = {
        "description": `${data}`
    };
    // The parameters we are gonna pass to the fetch function
    let fetchData = {
        method: 'POST',
        body: JSON.stringify(postInfo),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    //console.log(fetchData);
    fetch(postUrl, fetchData)
        .then((resp) => {
            return (resp.json())

        })
};