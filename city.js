const cities=[
    {name:"غزة هاشم", title:"مدينة الصمود", img:"images/gaza.jpeg"},
    {name:" القدس الشريف", title:"مدينة الصمود..تاريخ يرويه الحجر", img:'images/jerosalem.jpeg'},
    {name:" يافا", title:" عروس البحر", img:"images/yafa.jpeg"},
    {name:" حيفا", title:" عروس الكرمل", img:"images/heafa.jpeg"},
    {name:" الخليل", title:"مدينة الاباء", img:"images/hebron.jpeg"},
    {name:"بيت لحم", title:"مدينة الميلاد", img:"images/beat laheam.jpeg"},
    {name:" جنين", title:"عش الشهداء", img:"images/jenean.jpeg"},
    {name:"طول كرم", title:"خضراء فلسطين", img:"images/toal karem.jpeg"},
    {name:" قلقيلية", title:"مدينة البرتقال", img:"images/qalaelia.jpeg"},
    {name:" أريحا", title:"مدينة القمر", img:"images/jericho.jpeg"},
    {name:"رام الله", title:"عروس المصايف", img:"images/ramallah.jpeg"},
    {name:" سلفيت", title:"سلة خبز فلسطين", img:"images/salfeat.jpeg"},
    {name:" طوباس", title:"سلة الغذاء", img:"images/tobas.jpeg"},
    {name:"بيت جالا", title:"مدينة الكرمة", img:"images/beatjala.jpeg"},
    {name:"بيت ساحور", title:"مدينة الرعاء", img:"images/beat sahour.jpeg"}
];
let currentindex=1;
function renderSlider(){
    const container=document.getElementById("city-container");
    container.innerHTML="";
    for (let i=-1; i<=1;i++){
        let index=(currentindex+i+cities.length)%cities.length;
        const city=cities[index];
        const card=document.createElement('div');
        card.className=`card ${i===0? 'active':''}`;
        card.innerHTML=`
        <div class="city-img-frame">

            <img src="${city.img}" class="" alt="${city.name}">
        </div>
        <h3>${city.name}</h3>
        <p>${city.title}</p>
        <button class="explore-btn">أدخل الى${city.name}</button>`;
        container.appendChild(card);
    }
}
function changeCity(step){
    currentindex=(currentindex+step+cities.length)
    renderSlider();
}
window.onload=renderSlider