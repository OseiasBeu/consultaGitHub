const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");
const img = document.createElement("img");
const title = document.createElement("h3");
const p = document.createElement("p");
const p1 = document.createElement("p");


function buscaUsuario(){
  let url = `https://api.github.com/users/` + input.value;
  console.log(url);

  axios.get(url).then(function(resposta){
    console.log(resposta.data);
    
    img.src = resposta.data.avatar_url;
    document.querySelector("div").appendChild(img);

    title.innerHTML = resposta.data.login;
    document.querySelector("div").appendChild(title);

    p.innerHTML = resposta.data.id;
    document.querySelector("div").appendChild(p);

    console.log(resposta.data.repos_url);
    p1.innerHTML = resposta.data.repos_url;
    document.querySelector("div").appendChild(p);


  }).catch(function(error){
    if(error){
      console.log(error);
    }
  });

}

button.onclick = buscaUsuario;
