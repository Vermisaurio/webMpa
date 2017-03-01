if (window.location.href == "http://www.mpa.panter.co/index.php/es/home/" || window.location.href == "http://www.mpa.panter.co/index.php/en/home-2/") {
  var men = document.getElementsByClassName('widget_nav_menu');
  var len = document.getElementsByClassName('widget_polylang');
  men[0].className = men[0].className + " sHome";
  len[0].className = len[0].className + " lHome";
  var fot = document.getElementById('footer');
  var cont = fot.getElementsByClassName('container');
  cont[0].style.width = '890px';
}

else {
  var exc = document.getElementsByClassName('container');
  if(exc[0] != undefined){
    var rect = exc[0].getBoundingClientRect();
    var sitelog = document.getElementsByClassName('site-logo-link');
    var tlNav = document.getElementsByClassName('tl-nav-container');
    /*tlNav[1].style.width = window.innerWidth - (Math.round(rect.left) + 200 + 17) + 'px';
    for( i = 0; i < sitelog.length; i++) {
      var sitelogimg = sitelog[i].getElementsByTagName('img');
      sitelogimg[0].style.marginLeft = Math.round(rect.left) + 'px';
      sitelog[i].style.width = Math.round(rect.left) + 200 + 'px';
    }*/
    var pDesc = document.getElementsByClassName('p-desc');
    for ( i = 0; i < pDesc.length; i++){
      var pDescp = pDesc[i].getElementsByTagName('p');
      pDescp[0].style.marginLeft = Math.round(rect.left) + 'px';
      pDesc[i].style.width = window.innerWidth * 0.25 + 'px';
      pDesc[i].style.left= (pDesc[i].offsetWidth * -1) + 'px';
    }
  }
}


if (window.innerWidth > 768){
  var asd = document.getElementsByClassName('wp-tsas-medium-6');
  for (i=1; i < asd.length; i= i+3) {
    asd[i].style.marginLeft = '5%';
    asd[i].style.marginRight = '5%';
  }
}


var elem = document.getElementsByClassName('team-grid');
var box = document.getElementsByClassName('wp-modal-box');
var contPa = document.getElementsByClassName('layers-content-widget');
if (contPa[0] != undefined) {
  var disPa = contPa[0].getBoundingClientRect();
  if (window.innerWidth > 768) {
    var dis = 0;
    var sum = 0;
    for (i=0; i < elem.length; i= i+3) {
      dis = sum + dis;
      for(e=i; e < elem.length; e++){
        box[e].style.marginTop = dis + 'px';
      }
      sum = 485;
    }
  }
  else {
    if (window.innerWidth < 461) {
      for (var i = 0; i < box.length; i++) {
        var dis = elem[i].getBoundingClientRect();
        box[i].style.marginTop = 410*(i) + 100 + 'px';
      }
    }
    else {
      for (var i = 0; i < box.length; i=i+2) {
        var dis = elem[i].getBoundingClientRect();
        box[i].style.marginTop = (Math.floor(dis.top - disPa.top - 50)) + 'px';
        box[i+1].style.marginTop = (Math.floor(dis.top - disPa.top - 50)) + 'px';
      }
    }
  }
}


var contSlider = document.getElementsByClassName('swiper-wrapper');
var sliders = contSlider[0].getElementsByTagName('a');
var num = Math.floor(Math.random() * sliders.length);
for (i=0; i < sliders.length; i++) {
  sliders[i].className = 'inactive';
}
sliders[num].className = 'swiper-slide invert has-image image-top text-center swiper-slide-active';



/* Estilos Header */

function overP(obj) {
var tamwindow = window.innerWidth;
var dAs = document.getElementsByClassName('dropdown-toggle');
for (i=0; i < dAs.length; i++){
dAs[i].setAttribute("onclick", "overP(this)");
}
if (tamwindow > 768){
obj.setAttribute("onclick", "segclick(this)");
  var padre = obj.parentElement;
var tUl = padre.getElementsByTagName('ul');
var liT = tUl[0].getElementsByClassName('menu-item');
var div = padre.getElementsByTagName('div');
div[0].style.height = (liT.length * 23) + 40 + 'px';
var divs = document.getElementsByClassName('p-desc');
var uls = document.getElementsByClassName('dropdown-menu');
var xclose = document.getElementsByClassName('xclose');
var tclose = padre.getElementsByClassName('xclose');
if (div[0].style.display = 'none') {
for(i=0; i<divs.length;i++){
divs[i].style.display = 'none';
uls[i].style.display = 'none';
xclose[i].style.display = 'none';
}
div[0].style.display = 'block';
tUl[0].style.display = 'block';
tclose[0].style.display = 'block';
}
}
var padre = obj.parentElement;
var mMenu = padre.getElementsByClassName('dropdown-menu');
var uls = document.getElementsByClassName('dropdown-menu');
for(i=0; i<uls.length;i++){
uls[i].style.display = 'none';
}
mMenu[0].style.display = 'block';
}


function showF(obj){
var copy = document.getElementsByClassName('copyright');
if(copy[0].style.display == 'block'){
copy[0].style.display = 'none';
obj.style.backgroundImage = 'url(http://www.mpa.panter.co/wp-content/uploads/2016/04/ic_keyboard_arrow_down_48px-128-copia.png';
}
else {
copy[0].style.display = 'block';
obj.style.backgroundImage = 'url(http://www.mpa.panter.co/wp-content/uploads/2016/04/ic_keyboard_arrow_down_48px-128.png';
}
}

function cerrarMenu(){
var divs = document.getElementsByClassName('p-desc');
var uls = document.getElementsByClassName('dropdown-menu');
var xclose = document.getElementsByClassName('xclose');
for(i=0; i<divs.length;i++){
divs[i].style.display = 'none';
uls[i].style.display = 'none';
xclose[i].style.display = 'none';
}
}

function segclick(obj) {
 var padre = obj.parentElement;
var uls = padre.getElementsByClassName('dropdown-menu');
var as = uls[0].getElementsByTagName('a');
var url = as[0].getAttribute('href');
obj.setAttribute("href", url);
}
