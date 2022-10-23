 const Tour = [
     { 
            "name": "The Mountain Climber", 
            "duration": 12, 
            "ratingsAverage": 4.7, 
            "price": 567, 
            "difficulty": "easy", 
            "ratingsQuantity": 13, 
            "summary": "Not for the faint-hearted. Come and put it to the test", 
            "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum soc.nomen lorem dolor. Lorem ipsum dolor sit amet, piscing elit", 
            "imageCover": "./images/pure.jpg", 
            "images": ["./image/first.jpg", "./images/second.jpg", "./images/third.jpg"], 
            "startDate": "2021-11-25" 
    }, 
               
               
    { 
            "name": "The Forest Hiker", 
            "duration": 15, 
            "ratingsAverage": 4.9, 
            "price": 456, 
            "difficulty": "hard", 
            "ratingsQuantity": 10, 
            "summary": "You can always find something to talk about", 
            "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum soc.nomen lorem dolor. Lorem ipsum dolor sit amet, piscing elit", 
            "imageCover": "./images/pure.jpg", 
            "images": ["./image/first.jpg", "./images/second.jpg", "./images/third.jpg"], 
            "startDate": "2021-11-25" 
  
    }, 
               
               
    { 
            "name": "The Desert Cowboy", 
            "duration": 12, 
            "ratingsAverage": 4.6, 
            "price": 345, 
            "difficulty": "easy", 
            "ratingsQuantity": 13, 
            "summary": "Walk the talk and head for the eye", 
            "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum soc.nomen lorem dolor. Lorem ipsum dolor sit amet, piscing elit", 
            "imageCover": "./images/pure.jpg", 
            "images": ["./image/first.jpg", "./images/second.jpg", "./images/third.jpg"], 
            "startDate": "2021-11-25" 
  
    },
     
     
    { 
            "name": "The Rainforest Trekker", 
            "duration": 18, 
            "ratingsAverage": 4.7, 
            "price": 480, 
            "difficulty": "easy", 
            "ratingsQuantity": 13, 
            "summary": "Let's put those lungs to the test", 
            "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum soc.nomen lorem dolor. Lorem ipsum dolor sit amet, piscing elit", 
            "imageCover": "./images/pure.jpg", 
            "images": ["./image/first.jpg", "./images/second.jpg", "./images/third.jpg"], 
            "startDate": "2021-11-25" 
  
    }, 
    { 
            "name": "The Snowman", 
            "duration": 10, 
            "ratingsAverage": 4.8, 
            "price": 993, 
            "difficulty": "hard", 
            "ratingsQuantity": 13, 
            "summary": "Avalanches too are a thing", 
            "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum soc.nomen lorem dolor. Lorem ipsum dolor sit amet,piscing elit", 
            "imageCover": "./images/pure.jpg", 
            "images": ["./image/first.jpg", "./images/second.jpg", "./images/third.jpg"], 
            "startDate": "2021-11-25" 
  
    }, 
    { 
            "name": "The Sea Explorer", 
            "duration": 12, 
            "ratingsAverage": 4.5, 
            "price": 450, 
            "difficulty": "easy", 
            "ratingsQuantity": 13, 
            "summary": "The waves still crash the coast", 
            "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum soc.nomen lorem dolor. Lorem ipsum dolor sit amet, piscing elit", 
            "imageCover": "./images/pure.jpg", 
            "images": ["./image/first.jpg", "./images/second.jpg", "./images/third.jpg"], 
            "startDate": "2021-11-25" 
  
    } 
 ]

//  console.log(Tour);
 //   create span
 
 
const create_span = (name,duration,ratingsAverage,price,difficulty,ratingsQuantity,summary,description,imageCover,images,startDate) => {
    const name_span = document.createElement('span')
    name_span.innerHTML = name

    const duration_span = document.createElement('span')
    duration_span.innerHTML = duration

    const ratingsAverage_span = document.createElement('span')
    ratingsAverage_span.innerHTML = ratingsAverage

    const price_span = document.createElement('span')
    price_span.innerHTML = price

    const difficulty_span = document.createElement('span')
    difficulty_span.innerHTML = difficulty

    const ratingsQuantity_span = document.createElement('span')
    ratingsQuantity_span.innerHTML = ratingsQuantity

    const summary_span = document.createElement('span')
    summary_span.innerHTML = summary

    const description_span = document.createElement('span')
    description_span.innerHTML = description

    const imageCover_span = document.createElement('span')
    imageCover_span.innerHTML = imageCover

    const images_span = document.createElement('span')
    images_span.innerHTML = images

    const startDate_span = document.createElement('span')
    startDate_span.innerhtml = startDate
    

    // append the span we created to the container in our html
    
    const append_span = document.querySelector('.container')
    append_span.appendChild( name_span)
    append_span.appendChild( duration_span)
    append_span.appendChild( ratingsAverage_span)
    append_span.appendChild( price_span)
    append_span.appendChild( difficulty_span)
    append_span.appendChild( ratingsQuantity_span)
    append_span.appendChild( summary_span)
    append_span.appendChild( description_span)
    append_span.appendChild( imageCover_span)
    append_span.appendChild( images_span)
    append_span.appendChild( startDate_span)

}
 
 for(let i=0; i<Tour.length; i++){
    create_span(Tour[i].name, Tour[i].duration, Tour[i].ratingsAverage, Tour[i].price, Tour[i].difficulty, Tour[i].ratingsQuantity, 
        Tour[i].summary, Tour[i].description, Tour[i].imageCover, Tour[i].images, Tour[i].startDate)
 }
 