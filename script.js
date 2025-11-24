fetch("https://fakestoreapi.com/products/")
.then((data)=>{
  return data.json()
})
.then((jsData)=>{

  console.log(jsData);
  
  let app = document.querySelector(".sai");

  jsData.forEach((c,i,t)=>{

    console.log(c);
    console.log(c.title);  

    let ram = document.createElement("div");

    ram.innerHTML = `<img src="${c.image}" />
                        <h3>${c.title.slice(0,50)}...</h3>
                        <p>${c.description.slice(0,50)}...</p>
                        <h5>price : ${c.price}</h5>`;

    app.appendChild(ram);

  });

})