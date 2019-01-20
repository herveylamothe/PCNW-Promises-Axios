// # Axios & Promises 

// ## Problem 1

// Convert the following into a Promise function:

// ```javascript
// // -- Dependencies
// const cheerio = require('cheerio');
// const url = require('url');

// const getImagesInPage = (pageUrl, pageHtml, cb) => {

//   const arrayOfImages = [];
//   const $ = cheerio.load(pageHtml);

//   $('img').map((i, e) => {
//     const imgURL = url.resolve(pageUrl, $(e).attr('src'));
//     arrayOfImages.push(imgURL);
//   });

//   cb(arrayOfImages);
// }


// // ----- Promisified
// getImagesInPagePromisified('url', 'html')
//   .then(imageUrls => {
//     console.log(imageUrls);
//   })
// ```


const cheerio = require('cheerio');
const url = require('url');

const getImagesInPagePromisified = (pageUrl,pageHtml) => {
	return new Promise((resolve,reject) => {
		const arrayOfImages = [];
		  const $ = cheerio.load(pageHtml);
console.log("hello there");
		  $('img').map((i, e) => {
			const imgURL = url.resolve(pageUrl,$(e).attr('src'));
			arrayOfImages.push(imgURL);
			//if(err) reject(err)
			 resolve(arrayOfImages)
  });

	})
}

getImagesInPagePromisified('url', 'html')
  .then((imageUrls) => {
    console.log(imageUrls);
    console.log('HEy it worked!')
  })

const lol =(num1, num2) => {
    return new Promise ((resolve, reject)=>{
        let sum = num1 + num2;
        resolve(sum)
        reject(err)
    })
}

lol(8,10).then((sum) => {
    console.log(sum);

},
(err)=> {
console.log(err)
})



// ## Problem 2

// Convert the following into a Promise function:

// ```javascript
// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.log('error:', error); // Print the error if one occurred
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });
// ```


const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('body:', body); // Print the HTML for the Google homepage.
});

const google = (url) => {
    return new Promise((resolve, reject) => {
        request(url, function (error, response, body) {
            resolve(body)
            })
        })
        
}

google('http://www.google.com')
.then((gt) => {
    // console.log(gt)
})

// ## Problem 3

// Using Axios and the function you built in Problem 1, create a promise based function that returns all the image URLs on a webpage. 

// ### Example:

// ```javascript
getImagesFrom('https://en.wikipedia.org/wiki/Ceratosaurus')
  .then(imageUrls => {
    console.log(imageUrls);
  })
  .catch(err => {
    console.log(err);
  })
```
