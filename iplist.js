

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