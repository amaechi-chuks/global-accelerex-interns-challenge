# global-accelerex-interns-challenge

## Table of contents

- [Introduction](#introduction)
- [Motivation](#motivation)
- [Style Guide](#style-guide)
- [Screen Shot](#screen-shot)
- [Installing](#installing)
- [Prerequisites](#prerequisites)
 - [Folder Structure](#folder-structure)
 - [Working Routes](#working-routes)
 - [License](#license)
 - [Author](#author)
 - [Acknowledgments](#acknowledgments)
 - [Live Demo](#live-demo)

## Introduction
This is a documentation for an endpoint to allow you pull a list for a people and update the description for a person.

## Motivation

This is a REST API challenge that will contritube greatly to my journey of becoming an intern in `Global Accelerex`.

### Style guide

[Airbnb ](https://github.com/airbnb/javascript)(Javascript style guide)


### Screen Shot

![alt](/screenshot_21.png)


## Installing

#### Prerequisites

Ensure you have **NodeJS** installed by entering `node -v` on your terminal
If you don't have **NodeJS** installed go to the [NodeJS Website](http://nodejs.org), and follow the download instructions

To install this app

```
git clone https://github.com/amaechi-chuks/global-accelerex-interns-challenge.git
```

## Folder Structure

```
global-accelerex-interns-challenge/
index.css
index.html
index.js
person.html
README.md
screenshot_21.png
```


### Working Routes

<table>
<thead>
<tr>
<th>Endpoint</th>
<th>Functionality</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET request to “{BASE_URL}/persons”</td>
<td>Returns a list of people.<br /> N.B: This endpoint is paginated and returns a maximum of 10 items per request. It accepts a query parameter named page which should be an integer greater than 0.
</td>
</tr>
<tr>
<td>POST request to “{BASE_URL}/persons/{personId}”</td>
<td>This endpoint updates the description for a person identified by the parameter personId. This endpoint also accepts a single parameter description in the body of the request.<br />Example request body is:
{
     			"description": "Nice"
}
</td>

<tr>
<td></td>
<td></td>
</tr>
</tbody></table>

## License

This projects is under the MIT LICENSE

## Author

[Amaechi Chuks U.](https://github.com/amaechi-chuks)

## Acknowledgments

- [Andela](https://andela.com)
- [Medium](https://medium.com)
- [Google Search](https://google.com)
- [Stackoverflow](https://stackoverflow.com)


### Live demo

You can test the api endpoints

- [Here ](https:)
