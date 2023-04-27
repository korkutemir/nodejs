//require("dotenv").config();
const express = require('express');
const app = express();
var port=process.env.PORT || 3000;

var path=require('path');

app.use(express.static(path.join(__dirname, "")));

app.get('/', function (req, res) {

 // res.send('Merhaba Express');
  //res.send('<h1>Merhaba Express</h1>');
  res.sendFile( __dirname + "/" + "manifest.html");

});

app.get('/login', function (req, res) {

 // res.send('Merhaba Express');
  //res.send('<h1>Merhaba Express</h1>');
  res.sendFile( __dirname + "/" + "google2.html");

});

app.post('/', function (req, res) {
 // res.send('Merhaba Express');
  res.sendFile( __dirname + "/" + "earth.html");
});

app.listen(port, function () {
  console.log('Sunucu çalışıyor...');
});


const puppeteer = require('puppeteer');
var dizin=["iPhone 4","iPhone 6","iPhone 5","iPhone 7","iPad","iPad Pro","iPhone X","iPhone 11","iPhone 12","iPhone 13","Pixel 2",
"Pixel 3","Pixel 4","Pixel 5","Nexus 4","Nexus 5","Nexus 6","Nexus 7","Nexus 10","Galaxy S5","iPad Mini",
"Galaxy Note 3","Galaxy S8","Galaxy S9+","Galaxy S5","Nokia N9"];

var number_1=0;

var status=false;

var timer_1=0;

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
var fs=require("fs");

let xhr = new XMLHttpRequest()

xhr.open( 'GET',  'https://proxylist.geonode.com/api/proxy-list?limit=500&page=1&sort_by=lastChecked&sort_type=desc&country=TR' )

//xhr.open("GET","http://free-proxy.cz/en/proxylist/country/TR/socks4/ping/all");

xhr.onload = function() {
    
    if ( xhr.status == 200 ) {
        
      //  console.log( xhr.responseText );

        //console.log(JSON.parse(xhr.responseText));
               

      //  var delek_file=JSON.stringify(xhr.responseText);

     
      (async () => {

       setInterval(function() {
        if(status==true) {
          console.log("status :"+status);
          number_1=parseInt(number_1)+1;
        }
        else {
          number_1=parseInt(number_1)+1;
        }
       },120000);
 
        async function eko() {
        console.log(status);
        try {
        var dizin_length=parseInt(dizin.length)-1;
        var delek1=dizin[Math.floor(Math.random()*dizin_length)];
        console.log(delek1);
        const iPhone = puppeteer.devices[delek1];
       console.log(JSON.parse(xhr.responseText).data[number_1].ip);
          
       /* if(await timer_1==2) {
            number_1=parseInt(number_1)+1;
            console.log("ip count :"+number_1);
          }*/
          //console.log(timer_1);
         browser = await puppeteer.launch({
          args: [   '--proxy-server=socks4://'+JSON.parse(xhr.responseText).data[number_1].ip+":"+JSON.parse(xhr.responseText).data[number_1].port,
          '--ignore-certificate-errors',
          '--ignore-certificate-errors-spki-list ',
          '--disable-web-security',
          '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials',
          "--no-sandbox", 
          "--disable-setuid-sandbox",
          "--single-process",
      "--no-zygote"],
           headless:true,
          ignoreHTTPSErrors: true
        });
        const page = await browser.newPage();
        await page.authenticate();
        await page.emulate(iPhone);
        
  
        await page.goto('https://mega.cyclic.app/delek',{waitUntil: "networkidle2"});
       
        page.on('error', err=> {
          console.log('error happen at the page: ', err);
        });
      
        page.on('pageerror', pageerr=> {
          console.log('pageerror occurred: ', pageerr);
        })
        
      
      
        console.log(await page.title());

        console.log(JSON.parse(xhr.responseText).data[number_1].ip);
      
      
      status=true;
      
      timer_1=parseInt(timer_1)+1;

      
      
        await page.evaluate(scrollToBottom);
      
      console.log("connected :"+timer_1);
       
      
       status=false;
        
        await browser.close();
    
        await eko();

       
        } catch(error) {
            status=false;
          console.log("error :"+error);
          if(error=="Error: net::ERR_PROXY_CONNECTION_FAILED at https://mega.cyclic.app/delek") {
          //  number_1=parseInt(number_1)+1;
          }
          browser.close();
          eko();
        }
   
      }
      
 
      eko();
      })();

        
    } else {
        
        console.log( `Error: ${xhr.status}` )
        
    }
}

xhr.send();

async function scrollToBottom() {
     
  await new Promise(resolve => {
    const distance = Math.floor(Math.random()*500); 
    var distance_2=parseInt(distance)+200;
    console.log("distance :"+distance_2);
    var waiting_time=Math.floor(Math.random()*40000)
    const delay = parseInt(waiting_time)+80000;
    console.log("time :"+delay);
    const timer = setInterval(() => {
      document.scrollingElement.scrollBy(0, distance);
      if (document.scrollingElement.scrollTop + window.innerHeight >= document.scrollingElement.scrollHeight) {
      //  document.getElementsByClassName("product-btn")[0].click();
        clearInterval(timer);
        resolve();
      }
    }, delay);
  });
}

console.log("eko2");
