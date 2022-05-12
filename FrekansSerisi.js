function FrekansSerisi(){
    let girilensayi = prompt("Kac Sayi Girilecek ?") ;
    let sayiDizisi = [];
    let tekrarDizisi =[];
    for (i=0;i<girilensayi;i++){
    
        tekrarDizisi[i]=1;
    }
    let x=1;
    for(i=0;i<girilensayi;i++){
        
        sayiDizisi[i] = prompt(x+".Sayiyi Giriniz");
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
    //sıralama
    for(i =0;i<sayiDizisi.length;i++){
    
        for( j=i+1;j<sayiDizisi.length;j++)
        {
    
            if (sayiDizisi[j]<sayiDizisi[i]){
                let x = sayiDizisi[i];
                let y = tekrarDizisi[i]
                tekrarDizisi[i]=tekrarDizisi[j];
                tekrarDizisi[j]=y;
                sayiDizisi[i]=sayiDizisi[j];
                sayiDizisi[j]=x;
    
            }
    
        }
    }
    //yazdırma
    for(i=0;i<sayiDizisi.length;i++)
    {
        console.log(i+1+".Sayi : "+sayiDizisi[i]+" Tekrar Sayisi : "+tekrarDizisi[i]);
    }
    
    
    }