let idDiv=document.getElementById("content");
let idDiv1=document.getElementById("content1");
let idDiv2=document.getElementById("content2");
let url="https://fakestoreapi.com/products/category/jewelery";
const responseFromFetch= fetch(url).then(response =>{
    return response.json();

}).then(data =>{
    // data manipulation
    console.log(data);
    mytable(data)
function mytable(data)
{
    var table=document.getElementById('content')

    for(var i=0;i<=10;i++)
    {
        var data2= `
                <tr>
                <td>${data[i].id}</td>
                <td>${data[i].title}</td>
                <td>${data[i].price}</td>
                <td>${data[i].image}</td>
                </tr>
                 `
        table.innerHTML += data2;
        
        
    }
}


    
    // console.log(a);
    // // avatarDiv.innerHTML=data[0].avatar_url
})