var apiURL = "https://crudcrud.com/api/47d78bafbef5457d9e3f93ddef833823";

async function getAlbums() {
  var result = await $.ajax({
    url: apiURL + "/albums",
    dataType: "json",
    contentType: "application/json",
    type: "GET",
    success: doStuffWithData,
    error: sayError
  });
  return result;
}

const doStuffWithData = (data) => {
  console.log(data)
}

const sayError = (error) => {
  console.log(data)
}

getAlbums().then(result => console.log(result))

// 1. In the commented code below, write a unique word where it says "typeWordHere".  Then, uncomment out the code below so that $.ajax does a POST request to the API.  The API should make a new "resource" (kind of like an API folder) on the backend that is the same name as your word.

// $.ajax({
//   url: apiURL + "/typeWordHere",
//   dataType: 'json',
//   data: JSON.stringify({test: "test"}),
//   contentType: "application/json",
//   type: "POST",
//   success: doStuffWithData
// });

// 2. Now comment back out the code above.  On line 5, change the word "albums" to your new word so that you can do a GET request and get all the data in your resource.

// 3. In order to remove data from a resource, the API documentaion (on crudcrud.com) says that you need to use a DELETE request and that you need to specify an ID in the API URL for whatever you are deleting.  Look at the GET request that you did for your resource and try to find an ID that you can use to delete data.  Then change the words "albums" and "PUT-ID-HERE" below to delete the data. 

// $.ajax({
//   url: apiURL + "/albums" + "/PUT-ID-HERE",
//   dataType: 'json',
//   contentType: "application/json",
//   type: "DELETE",
//   success: doStuffWithData
// });

// 4. Wrap the two jquery ajax functions above in async functions so that you don't have to keep commenting and uncommenting them everytime you want to add and delete.

// 5. On the HTML page, make 3 buttons: Get, Add, and Delete.  Make the Get button run the GET request function.

// 6. Finally, on the HTML page make two text inputs, one that will take an ID number (for deletion purposes) and one that will just take regular text (for addition purposes).  Make it so that the Add and Delete buttons use the values in the input boxes to Add and Delete.  To do this you'll need to use many of the HTML and JavaScript skills you learned in past lessons.






// -------------------
// -------------------
// * Below is just for reference purposes...
// -------------------
// -------------------

// Example promise (what is often happening on the backend):

let myPromise = new Promise((myResolve, myReject) => {
  var data = "This is data."

  if (data) {
    myResolve(data);
  } else {
    myReject("Error.  The data was not found.");
  }
});

// Example of a promise being waited for (often on the front end):

// myPromise.then(
//   (data) => {
//     console.log("The promise resolved.")
//     console.log(data);
//   },
//   (error) => {
//     console.log(error);
//   }
// );
