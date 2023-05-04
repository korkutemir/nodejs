const puppeteer = require('puppeteer');
var dizin=["iPhone 4","iPhone 6","iPhone 5","iPhone 7","iPhone 6","iPad","iPad Pro","iPhone X","iPhone 11","iPhone 12","iPhone 13","Pixel 2",
"Pixel 3","iPad Pro","Pixel 4","Pixel 5","iPad Pro","Nexus 4","iPad Pro","Nexus 5","iPad Pro","Nexus 6","Nexus 7","Nexus 10","Galaxy S5","iPhone 13","iPad Mini",
"Galaxy Note 3","iPad","Galaxy S8","iPad","iPhone 6","Galaxy S9+","iPad","iPhone 7","Galaxy S5","Nokia N9","iPhone 5","iPhone 12"];

var number_1=1;

var status=false;

var timer_1=0;


var fs=require("fs");
const path = require('path');

const alerts = fs.readFileSync(
    path.resolve(__dirname, './iplist12.json'),
    {'encoding': 'utf-8'}
  );

        console.log(JSON.parse(alerts));
               

    

     
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
       },100000);
 
        async function eko() {
        console.log(status);
        
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
