// My api key is- 46cdc41be0f84f81b369eaada0554af1

function indianews(){
    let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=46cdc41be0f84f81b369eaada0554af1";
    fetch(url).then(response=>response.json()).then(data=>{
        let putnews=document.querySelector('.news');
        let str="";
        let components=data.articles;
        console.log(components);
        for(news in components)
        {
            str+=` <p>
            <button class="btn btn-secondary mt-2" style="width:100%" type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              ${components[news].title}
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
              ${components[news].description}
            </div><a href="${components[news].url}">Read more...</a>
            <div style="margin-left: 35vw;
            width: 133vw;">
             <img src="${components[news].urlToImage}" alt="nothing" style="width:20%;margin:auto;">
             </div>
          </div>`
        }
        putnews.innerHTML=str;
    });
}

indianews();