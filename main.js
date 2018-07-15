'use strict';

let  createNode = function (element) {
    return document.createElement(element);
}

let append = function (parent, el) {
    return parent.appendChild(el);
}

//Implementation to fetch data from specified API(using Promise)
const  url = 'https://intern-challenge.herokuapp.com/persons';
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
                
                id_name = person.name.split(' ')[0]; //creating unique id for button
            img.src = person.photo;
            img.alt = person.name;
            
             img.setAttribute('id', id_name); // Trigger the Modal
             button.innerHTML = person.name + ' ';
             append(li, img);
            append(li, button);
            append(ul, li);
            
            // Get the modal
            const modal = document.getElementById('myModal');

            // Get the image and insert it inside the modal - use its "alt" text as a caption
            let img_modal = document.getElementById(id_name);
            let modalImg = document.getElementById("img01");
            let captionText = document.getElementById("caption");
            img_modal.onclick = function () {
                modal.style.display = "block";
                modalImg.src = img.src;
                captionText.innerHTML = `Name : ${img.alt} <br> Age: ${person.age} <br> Description: ${person.description} <a href='#'><i class="fa fa-pencil-square-o" style="font-size:24px;color:red"</a></i> `;
            }

            // Get the <span> element that closes the modal
            const span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function () {
                modal.style.display = "none";
            }
        });
        //error handling
    }).catch(function (error) { 
        console.log(error);
    });