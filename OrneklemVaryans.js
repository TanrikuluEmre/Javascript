function OrneklemVaryansı(){

    let girilensayi = prompt("Kac Sayi Girilecek ?") ;
    let diziSayi = [];
    let ort=0;
    let varyans=0;
    let OMS=0;
    for(i=0;i<girilensayi;i++){//ortalama
        
        diziSayi[i] = prompt(i+1+".Sayıyı Giriniz");
        ort += diziSayi[i]/girilensayi;
    }
   
    for(i=0;i<girilensayi;i++){//varyans
        let x = diziSayi[i];
        varyans += (x-ort)*(x-ort)/(girilensayi-1);
    }
    for ( i = 0; i < girilensayi; i++) { // OMS
        let y = diziSayi[i];
        OMS += Math.abs(y-ort)/(girilensayi);
        
    }
    let siraliDizi = diziSayi.sort(function(a, b){return a - b})

    let standartsapma = varyans**(1/2);
    console.log(diziSayi);
    console.log("ortalama : "+ort);
    console.log("varyans : "+varyans);
    console.log("Standart Sapma : "+standartsapma);
    console.log("OMS : "+OMS);
    console.log("DK : "+standartsapma/ort);
    console.log();
}