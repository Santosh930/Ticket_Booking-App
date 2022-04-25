// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
// console.log(3);

let id;
    let movies_div=document.getElementById("movies");
async function searchMovies(){

    try{
        
        
        const query=document.getElementById("search").value;
        const url=`https://www.omdbapi.com/?apikey=a57166bf&s=${query}`;
        
let res= await fetch(url);
let data= await res.json();
//  console.log("data:",data);
const movie=data.Search;
return movie;
 appendMovies(movie);
    }
    catch (err){
        console.log("err:",err);
    }
    }
    function appendMovies(data){
        // optimization#1
        if(data===undefined)
        {
            return false;
        }
        // optimization#2
        movies_div.innerHTML=null;
        data.forEach(function(el){
            let div=document.createElement("div");
            let p=document.createElement("p");
            p.innerHTML=el.Title;
            let img=document.createElement("img");
            img.src=el.Poster
            let btn=document.createElement("button");
            btn.innerText="Book Now"
            btn.setAttribute("class","book_now");
            btn.addEventListener("click",function(){
                Byfunction(data);

            });
            

            
            div.append(img,p,btn);
            movies_div.append(div);



        });
        let complited=JSON.parse(localStorage.getItem("movie"))|| [];
        function Byfunction(data){
            complited.push(data);
            //  console.log(complited);
            localStorage.setItem("movie",JSON.stringify(complited));



        }

        
    }

    // we will assemble them(appendMovies & searchMovies) in one function
    async function main(){
        let data=await searchMovies();
        //  console.log("data:",data)
        if(data===undefined)
        {
            return false;
        }
        appendMovies(data);

    }
    // debouncing
    function debounce(func,delay){
if(id){
    clearTimeout(id);
}
id=setTimeout(function(){
    func();
},delay);
    }