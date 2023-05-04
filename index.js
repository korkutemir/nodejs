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

/*require("./iplist.js");
require("./index-main.js");*/



const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest
var fs=require("fs");
const jsonfile = require('jsonfile');
const axios = require("axios");


var obj={
    table:[]
}

number1=0;


function deneme() {

let xhr = new XMLHttpRequest()

//xhr.open('GET','https://www.proxy-list.download/api/v1/get?type=socks4&anon=elite&country=TR');

//xhr.open( 'GET',  'https://proxylist.geonode.com/api/proxy-list?limit=500&page=1&sort_by=lastChecked&sort_type=desc&country=TR' )

xhr.open("GET","https://api.proxyscrape.com/v2/?request=displayproxies&protocol=http&timeout=10000&country=tr&ssl=all&anonymity=all");


xhr.onload = function() {
    
    if ( xhr.status == 200 ) {
        
        console.log( xhr.responseText );
      //  console.log(JSON.parse(xhr.responseJSON));
       //  console.log(JSON.parse(xhr.responseText).data.length);

        var delek_file=JSON.stringify(xhr.responseText);
        console.log(delek_file);
        var delek_2=delek_file.split('\\r\\n');
        console.log(delek_2);
        console.log(delek_2.length);
       // console.log(JSON.parse(xhr.responseText).data[0].ip);
      

      for(var i=1;i<=delek_2.length-1;i++) {
        var delek={
            ip:delek_2[i-1],
            type:"http"
        }

        obj.table.push(delek);

        number1++;
      }
      if(i>=delek_2.length) {
         
      }
        
    } else {
        
        console.log( `Error: ${xhr.status}` )
        
       // console.log(JSON.parse(xhr.responseText));
    }
}
xhr.onloadend=function() {
    console.log("end");
    eko2();
}
xhr.send();



}

function eko2() {

    let xhr = new XMLHttpRequest()

    
    xhr.open( 'GET',  'https://proxylist.geonode.com/api/proxy-list?limit=500&page=1&sort_by=lastChecked&sort_type=desc&country=TR' )
    
    
    
    xhr.onload = function() {
        
        if ( xhr.status == 200 ) {
            
            console.log( xhr.responseText );
          //  console.log(JSON.parse(xhr.responseJSON));
           //  console.log(JSON.parse(xhr.responseText).data.length);
    
    
           // console.log(JSON.parse(xhr.responseText).data[0].ip);
          
    
          for(var i=1;i<=JSON.parse(xhr.responseText).data.length;i++) {
            var delek={
                ip:JSON.parse(xhr.responseText).data[i-1].ip+":"+JSON.parse(xhr.responseText).data[i-1].port,
                type:"socks4"
            }
    
            obj.table.push(delek);
            
        number1++;
          }
          if(i>=JSON.parse(xhr.responseText).data.length) {
             
          }
            
        } else {
            
            console.log( `Error: ${xhr.status}` )
            
           // console.log(JSON.parse(xhr.responseText));
        }
    }
    xhr.onloadend=function() {
        console.log("end");
        eko3();
    }
    xhr.send();
    
   
}

function eko3() {

    let xhr = new XMLHttpRequest()

    xhr.open('GET','https://www.proxy-list.download/api/v1/get?type=socks4&anon=elite&country=TR');
    
    
    xhr.onload = function() {
        
        if ( xhr.status == 200 ) {
            
            console.log( xhr.responseText );
  
    
            var delek_file=JSON.stringify(xhr.responseText);
            console.log(delek_file);
            var delek_2=delek_file.split('\\r\\n');
            console.log(delek_2);
            console.log(delek_2.length);
    
          
          for(var i=1;i<=delek_2.length-1;i++) {
            var delek={
                ip:delek_2[i-1],
                type:"socks4"
            }
    
            obj.table.push(delek);
            
        number1++;
          }
          if(i>=delek_2.length) {
            
          }
            
        } else {
            
            console.log( `Error: ${xhr.status}` )
            
           // console.log(JSON.parse(xhr.responseText));
        }
    }
    xhr.onloadend=function() {
        console.log("end");
        eko4();
    }
    xhr.send();

}

function eko4() {
    let xhr = new XMLHttpRequest()

    xhr.open("GET","https://api.proxyscrape.com/v2/?request=displayproxies&protocol=socks4&timeout=10000&country=tr&ssl=all&anonymity=all");
    
    
    xhr.onload = function() {
        
        if ( xhr.status == 200 ) {
            
            console.log( xhr.responseText );
    
            var delek_file=JSON.stringify(xhr.responseText);
            console.log(delek_file);
            var delek_2=delek_file.split('\\r\\n');
            console.log(delek_2);
            console.log(delek_2.length);
           // console.log(JSON.parse(xhr.responseText).data[0].ip);
          
    
          for(var i=1;i<=delek_2.length-1;i++) {
            var delek={
                ip:delek_2[i-1],
                type:"socks4"
            }
    
            obj.table.push(delek);
    
            number1++;
          }
          if(i>=delek_2.length) {
             
          }
            
        } else {
            
            console.log( `Error: ${xhr.status}` )
            
           // console.log(JSON.parse(xhr.responseText));
        }
    }
    xhr.onloadend=function() {
        console.log("end");
        eko5();
    }
    xhr.send();
    

}

function eko5() {

    const options = {
        method: 'GET',
        url: 'https://proxy-list2.p.rapidapi.com/proxy/get',
        params: {type: 'http', country: 'TR', anonymity: 'transparent'},
        headers: {
          'X-RapidAPI-Key': '26e5a25716mshccfd1e6294cd6edp109607jsn8b73105c0656',
          'X-RapidAPI-Host': 'proxy-list2.p.rapidapi.com'
        }
      };
      
      
      axios.request(options).then(function (response) {
        for(var i=1;i<=response.data.length;i++) {
          console.log(i+", "+response.data.length);
         
          //console.log(response.data[i-1].ip);
          
          var delek={
            ip:response.data[i-1].ip+":"+response.data[i-1].port,
            type:"http"
            
          }
          console.log(delek);
          obj.table.push(delek);

        number1++;
      
          if(i>=response.data.length) {
            eko();
          }
        }
       
      }).catch(function (error) {
          console.error(error);
      });

      function eko() {
          console.log("number :"+number1);
        fs.writeFile("iplist12.json",JSON.stringify(obj),"utf8",function() {
            console.log("ip list refreshed");
        });
    }

}

deneme();

setInterval(function() {
    number=0;
    obj.table=[];
deneme();
},60*60*15*1000);



const puppeteer = require('puppeteer');
var dizin=["iPhone 4","iPhone 6","iPhone 5","iPhone 7","iPhone 6","iPad","iPad Pro","iPhone X","iPhone 11","iPhone 12","iPhone 13","Pixel 2",
"Pixel 3","iPad Pro","Pixel 4","Pixel 5","iPad Pro","Nexus 4","iPad Pro","Nexus 5","iPad Pro","Nexus 6","Nexus 7","Nexus 10","Galaxy S5","iPhone 13","iPad Mini",
"Galaxy Note 3","iPad","Galaxy S8","iPad","iPhone 6","Galaxy S9+","iPad","iPhone 7","Galaxy S5","Nokia N9","iPhone 5","iPhone 12"];

var number_1=1;

var status=false;

var timer_1=0;


var fs=require("fs");
//const path = require('path');

const alerts = fs.readFileSync(
    path.resolve(__dirname, './iplist12.json'),
    {'encoding': 'utf-8'}
  );

        console.log("length :"+JSON.parse(alerts).table.length);
               

    

     
      (async () => {

       setInterval(function() {
        if(status==true) {
          console.log("status :"+status);
          console.log("number :"+number_1);
          number_1=parseInt(number_1)+1;
        }
        else {
          number_1=parseInt(number_1)+1;
        }
       },120000);
 
        async function eko() {
        console.log(status);
        
        if(number_1 > JSON.parse(alerts).table.length) {
          number_1=1;
        }

        try {
        var dizin_length=parseInt(dizin.length)-1;
        var delek1=dizin[Math.floor(Math.random()*dizin_length)];
     //   console.log(delek1);
     //   const iPhone = puppeteer.devices[delek1];
            console.log("ip :"+JSON.parse(alerts).table[number_1].ip+", type :"+JSON.parse(alerts).table[number_1].type);

         browser = await puppeteer.launch({
          args: [   '--proxy-server='+JSON.parse(alerts).table[number_1].type+'://'+JSON.parse(alerts).table[number_1].ip,
          '--ignore-certificate-errors',
          '--ignore-certificate-errors-spki-list ',
          '--disable-web-security',
          '--disable-features=IsolateOrigins',
          '--disable-site-isolation-trials',
          "--no-sandbox", 
          "--disable-setuid-sandbox",
        "--single-process",
      "--no-zygote"],
        //  headless:false,
          ignoreHTTPSErrors: true
        });
        const page = await browser.newPage();
        await page.authenticate();
     //   await page.emulate(iPhone);
        
  
        await page.goto('https://antalyasektorel.com.tr',{waitUntil: "networkidle2"});
       
        page.on('error', err=> {
          console.log('error happen at the page: ', err);
        });
      
        page.on('pageerror', pageerr=> {
          console.log('pageerror occurred: ', pageerr);
        })
        

        console.log(await page.title());


      
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
