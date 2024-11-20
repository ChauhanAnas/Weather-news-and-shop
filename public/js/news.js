const submitbtn = document.getElementById('submitbtn');
const keyword = document.getElementById('keyword');
// const cont1 = document.getElementById('card1')
// const cont2 = document.getElementById('card2')
// const cont3 = document.getElementById('card3')
// const cont4 = document.getElementById('card4')
// const cont5 = document.getElementById('card5')
// const cont6 = document.getElementById('card6')
// const cont7 = document.getElementById('card7')
// const cont8 = document.getElementById('card8')
// const cont9 = document.getElementById('card9')


const  fillDataInCard = (ottClone, artical) => {
    const newsImg = ottClone.querySelector('#news-img')
    const newsTitle = ottClone.querySelector('#title')
    const read = ottClone.querySelector('#read')
    newsImg.src = artical.image_url
    newsTitle.innerHTML = artical.title
    read.addEventListener('click',()=>{
        location.href = artical.link
    })
}

const bindData = (articals) =>{
    const cards = document.getElementById('cards')
    const ott = document.getElementById('ott')
    cards.innerHTML = "";

    articals.forEach(artical => {
        if(!artical.image_url)return
        const ottClone = ott.content.cloneNode(true)
        fillDataInCard(ottClone, artical)
        cards.appendChild(ottClone)
    });
}

const getNews = async (event) =>{
    // console.log("heloo")
    event.preventDefault()
    try{
        const newsVal = keyword.value
        let url = `https://newsdata.io/api/1/news?apikey=pub_495762211db93608249bf8ed1dd165ffd75ed&q=${newsVal}`
        const respnse = await fetch(url)
        const data = await respnse.json()
        const arrData = [data]
        bindData(arrData[0].results)
        console.log(arrData[0].results)

        
        // // div one 
        // const img1 = document.createElement('img')
        // img1.src = arrData[0].results[0].image_url
        // cont1.appendChild(img1)
        // const p1 = document.createElement('p')
        // p1.innerHTML = arrData[0].results[0].title
        // cont1.appendChild(p1)
        // const btn1 = document.createElement('button')
        // btn1.innerHTML = "Read More"
        // cont1.appendChild(btn1)
        // btn1.onclick = function(){
        //     location.href = arrData[0].results[0].link
        // }

        // // div two
        // const img2 = document.createElement('img')
        // img2.src = arrData[0].results[1].image_url
        // cont2.appendChild(img2)
        // const p2 = document.createElement('p')
        // p2.innerHTML = arrData[0].results[1].title
        // cont2.appendChild(p2)
        // const btn2 = document.createElement('button')
        // btn2.innerHTML = "Read More"
        // cont2.appendChild(btn2)
        // btn2.onclick = function(){
        //     location.href = arrData[0].results[1].link
        // }

        // // div three
        // const img3 = document.createElement('img')
        // img3.src = arrData[0].results[2].image_url
        // cont3.appendChild(img3)
        // const p3 = document.createElement('p')
        // p3.innerHTML = arrData[0].results[2].title
        // cont3.appendChild(p3)
        // const btn3 = document.createElement('button')
        // btn3.innerHTML = "Read More"
        // cont3.appendChild(btn3)
        // btn3.onclick = function(){
        //     location.href = arrData[0].results[2].link
        // }

        // // div four
        // const img4 = document.createElement('img')
        // img4.src = arrData[0].results[3].image_url
        // cont4.appendChild(img4)
        // const p4 = document.createElement('p')
        // p4.innerHTML = arrData[0].results[3].title
        // cont4.appendChild(p4)
        // const btn4 = document.createElement('button')
        // btn4.innerHTML = "Read More"
        // cont4.appendChild(btn4)
        // btn4.onclick = function(){
        //     location.href = arrData[0].results[3].link
        // }

        // // div five
        // const img5 = document.createElement('img')
        // img5.src = arrData[0].results[4].image_url
        // cont5.appendChild(img5)
        // const p5 = document.createElement('p')
        // p5.innerHTML = arrData[0].results[4].title
        // cont5.appendChild(p5)
        // const btn5 = document.createElement('button')
        // btn5.innerHTML = "Read More"
        // cont5.appendChild(btn5)
        // btn5.onclick = function(){
        //     location.href = arrData[0].results[4].link
        // }

        // // div six
        // const img6 = document.createElement('img')
        // img6.src = arrData[0].results[5].image_url
        // cont6.appendChild(img6)
        // const p6 = document.createElement('p')
        // p6.innerHTML = arrData[0].results[5].title
        // cont6.appendChild(p6)
        // const btn6 = document.createElement('button')
        // btn6.innerHTML = "Read More"
        // cont6.appendChild(btn6)
        // btn6.onclick = function(){
        //     location.href = arrData[0].results[5].link
        // }

        // // div seven
        // const img7 = document.createElement('img')
        // img7.src = arrData[0].results[6].image_url
        // cont7.appendChild(img7)
        // const p7 = document.createElement('p')
        // p7.innerHTML = arrData[0].results[6].title
        // cont7.appendChild(p7)
        // const btn7 = document.createElement('button')
        // btn7.innerHTML = "Read More"
        // cont7.appendChild(btn7)
        // btn7.onclick = function(){
        //     location.href = arrData[0].results[6].link
        // }

        // // div eight
        // const img8 = document.createElement('img')
        // img8.src = arrData[0].results[7].image_url
        // cont8.appendChild(img8)
        // const p8 = document.createElement('p')
        // p8.innerHTML = arrData[0].results[7].title
        // cont8.appendChild(p8)
        // const btn8 = document.createElement('button')
        // btn8.innerHTML = "Read More"
        // cont8.appendChild(btn8)
        // btn8.onclick = function(){
        //     location.href = arrData[0].results[7].link
        // }

        // //div nine
        // const img9 = document.createElement('img')
        // img9.src = arrData[0].results[8].image_url
        // cont9.appendChild(img9)
        // const p9 = document.createElement('p')
        // p9.innerHTML = arrData[0].results[8].title
        // cont9.appendChild(p9)
        // const btn9 = document.createElement('button')
        // btn9.innerHTML = "Read More"
        // cont9.appendChild(btn9)
        // btn9.onclick = function(){
        //     location.href = arrData[0].results[8].link
        // } 

    }catch(err){
        alert("Enter keyword properly")
    }
}

submitbtn.addEventListener('click', getNews)