function PermutasyonKombinasyon(){
    let secim = prompt("[1].Permütasyon\n[2].Kombinasyon");
    if(secim==1){ // Permütasyon

        let n = Number(prompt("n = ?"));
        let r = Number(prompt("r = ?"));
        let p = 1;
       
        for(i=n;i>n-r;i--){

            p=p*i;
        }
        alert(p);
    }
    else if(secim==2){
        
        let n = Number(prompt("n = ?"));
        let r = Number(prompt("r = ?"));
        let p = 1;
        let k = 1;
        for(i=r;i>0;i--){
            k=k*i;
        }
        for(i=n;i>n-r;i--){

            p=p*i;
            
        }
        alert(p/k);
    }
    else{
        alert("Yanlış Numara Tekrar deneyiniz.")
        PermutasyonKombinasyon();
    }
}