function merkeziEgilimOlculeri(){
    let girilensayi = prompt("Kac Sayi Girilecek ?") ;
    let sayiDizisi = [];
    let tekrarDizisi =[];
    let tekrarliSayiDizisi=[];
    for (i=0;i<girilensayi;i++){
    
        tekrarDizisi[i]=1;
    }
    let x=1;
    for(i=0;i<girilensayi;i++){
        
        sayiDizisi[i] = prompt(x+".Sayiyi Giriniz");
        tekrarliSayiDizisi[x-1]=sayiDizisi[i];
        if(sayiDizisi[i]==null){
            alert("Lütfen Sayı Giriniz.")
        }
        x++;
        for(j=0;j<i;j++){
            if(sayiDizisi[i]==sayiDizisi[j])
             {
                sayiDizisi.pop();
                i--;
                girilensayi--;
                tekrarDizisi[j]++;
             }
        }
    }
    console.log("Sayılar : "+tekrarliSayiDizisi)
    tekrarliSayiDizisi.sort(function(a,b){return a-b});
    console.log("Sıralı Hali : "+tekrarliSayiDizisi)
    
    
    
        let toplam = 0;
        for(i=0;i<tekrarliSayiDizisi.length;i++)
        {
            toplam+=Number(tekrarliSayiDizisi[i]);
        }
        console.log("Ortalama : "+toplam/tekrarliSayiDizisi.length);
    
    
        let modvar=false;
        let mod=tekrarDizisi[0];
        let mods = [];
        for(i=1;i<sayiDizisi.length;i++)
        {
            if(tekrarDizisi[0]!=tekrarDizisi[i])
            {
                modvar=true;
            }
        }
        if(modvar==true){
            for(i=1;i<tekrarDizisi.length;i++)
            {   
                if(mod<tekrarDizisi[i])
                {
                    mod=tekrarDizisi[i];
                }
            }
            for(i=0;i<tekrarDizisi.length;i++)
            {
                if(mod==tekrarDizisi[i])
                 {
                    mods.push(sayiDizisi[i]);
                 }
            }
            console.log("Mod : "+mods)
        }else{
            console.log("Mod Yok");
        }
    
    
    
        let len = tekrarliSayiDizisi.length;
        if(len%2==0)
        {
            console.log("Medyan : "+tekrarliSayiDizisi[len/2-1]+" "+tekrarliSayiDizisi[len/2]);
        }else{
            console.log("Medyan : "+tekrarliSayiDizisi[Math.floor(len/2)]);
        }
    }