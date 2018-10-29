function loadXMLDoc(myurl, cb){
    var xmlhttp;
    if (window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();}
    else{
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}
 
     xmlhttp.onreadystatechange=function(){
         if (xmlhttp.readyState==4 && xmlhttp.status==200){
             if( typeof cb === 'function' )
                 cb(xmlhttp.responseText);
         }
     }
 
    xmlhttp.open("GET",myurl,true);
    xmlhttp.send();
 
 }

 loadXMLDoc('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD', function(responseText) {
    var json = JSON.parse(responseText);
    document.getElementById("BitcoinPrice").innerHTML = '$ ' + json.RAW.BTC.USD.PRICE;
    document.getElementById("BitcoinInfo").innerHTML = json.RAW.BTC.USD.CHANGEDAY + ' (' + json.RAW.BTC.USD.CHANGEPCTDAY + ' %)';

    if(json.RAW.BTC.USD.CHANGEDAY < 0){
        document.getElementById("BitcoinChart").src = 'images/red.png';
        document.getElementById("BitcoinInfo").style.color = "red";
    } else{
        document.getElementById("BitcoinChart").src = 'images/green.png';
        document.getElementById("BitcoinInfo").style.color = "green";
    }
});

loadXMLDoc('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BCH&tsyms=USD', function(responseText) {
    var json = JSON.parse(responseText);
    document.getElementById("BitcoinCashPrice").innerHTML = '$ ' + json.RAW.BCH.USD.PRICE;
    document.getElementById("BitcoinCashInfo").innerHTML = json.RAW.BCH.USD.CHANGEDAY + ' (' + json.RAW.BCH.USD.CHANGEPCTDAY + ' %)';

    if(json.RAW.BCH.USD.CHANGEDAY < 0){
        document.getElementById("BitcoinCashChart").src = 'images/red.png';
        document.getElementById("BitcoinCashInfo").style.color = "red";
    } else{
        document.getElementById("BitcoinCashChart").src = 'images/green.png';
        document.getElementById("BitcoinCashInfo").style.color = "green";

    }
});

loadXMLDoc('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=ETH&tsyms=USD', function(responseText) {
    var json = JSON.parse(responseText);
    document.getElementById("EthereumPrice").innerHTML = '$ ' + json.RAW.ETH.USD.PRICE;
    document.getElementById("EthereumInfo").innerHTML = json.RAW.ETH.USD.CHANGEDAY + ' (' + json.RAW.ETH.USD.CHANGEPCTDAY + ' %)';

    if(json.RAW.ETH.USD.CHANGEDAY < 0){
        document.getElementById("EthereumChart").src = 'images/red.png';
        document.getElementById("EthereumInfo").style.color = "red";
    } else{
        document.getElementById("EthereumChart").src = 'images/green.png';
        document.getElementById("EthereumInfo").style.color = "green";

    }
});

loadXMLDoc('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=LTC&tsyms=USD', function(responseText) {
    var json = JSON.parse(responseText);
    document.getElementById("LitecoinPrice").innerHTML = '$ ' + json.RAW.LTC.USD.PRICE;
    document.getElementById("LitecoinInfo").innerHTML = json.RAW.LTC.USD.CHANGEDAY + ' (' + json.RAW.LTC.USD.CHANGEPCTDAY + ' %)';

    if(json.RAW.LTC.USD.CHANGEDAY < 0){
        document.getElementById("LitecoinChart").src = 'images/red.png';
        document.getElementById("LitecoinInfo").style.color = "red";

    } else{
        document.getElementById("LitecoinChart").src = 'images/green.png';
        document.getElementById("EthereumInfo").style.color = "green";
    }
});