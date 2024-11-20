const submitbtn = document.getElementById('submitbtn')
const movieType = document.getElementById('movieType')
// const fetch = require('node-fetch');
// const movie_card1 = document.getElementById('movie_card1')
// const movie_card2 = document.getElementById('movie_card2')
// const movie_card3 = document.getElementById('movie_card3')
// const movie_card4 = document.getElementById('movie_card4')
// const movie_card5 = document.getElementById('movie_card5')
// const movie_card6 = document.getElementById('movie_card6')
// const movie_card7 = document.getElementById('movie_card7')
// const movie_card8 = document.getElementById('movie_card8')
// const movie_card9 = document.getElementById('movie_card9')


const fillDataInCard = (cardClone,artical) =>{
    const newsImg = cardClone.querySelector('#p-img')
    const newsTilte = cardClone.querySelector('#title')
    const newsBtn = cardClone.querySelector('#shop')
    const delivery = cardClone.querySelector('#delivery')
    const rating = cardClone.querySelector('#rating')
    const price = cardClone.querySelector('#price')

    newsImg.src = artical.product_photo
    newsTilte.innerHTML = artical.product_title
    delivery.innerHTML = artical.delivery
    rating.innerHTML = (artical.product_star_rating!=null?artical.product_star_rating + "Star" : "No rating")
    price.innerHTML = artical.product_price
    newsBtn.addEventListener('click',()=>{
        location.href = artical.product_url
    })
}

const bindData=(articals)=>{
    const movies_cards = document.getElementById('movies_cards')
    const show = document.getElementById('show')

    movies_cards.innerHTML = ""

    articals.forEach(artical => {
      if(!artical.product_photo || !artical.product_price) return
      const cardClone = show.content.cloneNode(true)
      fillDataInCard(cardClone,artical)
      movies_cards.appendChild(cardClone)
    });
}

const getinfo = async (event) =>{
    event.preventDefault()
    const val = movieType.value
    const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${val}&page=1&country=US&sort_by=NEWEST&min_price=142.2&product_condition=ALL`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'c647dac785msha9a3db7ec327e75p123397jsne3fb3b56edd0',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };
    const response = await fetch(url, options);
    const result = await response.json();
    const data = [result]
    // console.log(data[0].data.products)
    bindData(data[0].data.products);





    // const img1 = document.createElement('img')
    // img1.src = data[0].poster_path
    // movie_card1.appendChild(img1)
    // const p1 = document.createElement('p')
    // p1.innerHTML = data[0].title
    // movie_card1.appendChild(p1)
    // const btn1 = document.createElement('button')
    // btn1.innerHTML = "Watch"
    // movie_card1.appendChild(btn1)
    // btn1.addEventListener('click',()=>{
    //   location.href = data[0].homepage
    // })
    // console.log(data)
}

submitbtn.addEventListener('click', getinfo)