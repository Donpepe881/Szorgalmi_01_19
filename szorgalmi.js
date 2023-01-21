<script>

// Legnagyobb közös osztó

function Ln_Ko (szamEgy, szamKetto) {
	let lnko=1;
	for (let i=2; i<=szamEgy; i++) {
    	if (szamEgy%i==0 && szamKetto%i==0) {
        lnko=i;
        }
    }
return lnko;
}    
document.write(Ln_Ko(32,16));    


// Prímszám

function PrimSz (vizsgaltSzam) {
	let oszto=0;
    for (let i=0; i<=vizsgaltSzam; i++) {
    	if(vizsgaltSzam%i==0)
        {
        oszto++;
        }
        else {}
   	}
    if (oszto==2) {
    	document.write(`A ${vizsgaltSzam} prím`);
    }
    else {
    	document.write(`A ${vizsgaltSzam} NEM prím`);
    }
}

PrimSz(37)




function Ln_Ko (szamEgy, szamKetto) {
	let lnko=1;
	for (let i=2; i<=szamEgy; i++) {
    	if (szamEgy%i==0 && szamKetto%i==0) {
        lnko=i;
        }
    }
    if(lnko==1){
	document.write(`A ${szamEgy} és ${szamKetto} relatív prím`);
	}
	else {
	document.write(`A ${szamEgy} és ${szamKetto}
	NEM relatív prím, legnagyobb közös osztója: ${lnko}`);
	} 
return lnko;
}    
Ln_Ko(32,16);


let tomb= [];
for (let i=0; i<12; i++) {
	tomb.push(Math.round(Math.random()*100));
}
document.write("A generált tömb elemei:<hr>");
for (let i=0; i<tomb.length; i++) {
	document.write(tomb[i]+",")
}

// Összegzés tétele

function Osszeg () {
let osszeg=0;
for (let i=0; i<tomb.length; i++) {
	osszeg=osszeg+tomb[i];
}
document.write("<hr>A tömb elemeinek osszege:"+osszeg);
return osszeg;
}
Osszeg()



// A tömb elemeinek átlaga

function Osszeg () {
    let osszeg=0;
    for (let i=0; i<tomb.length; i++) {
        osszeg=osszeg+tomb[i];
    }
    document.write("<hr>A tömb elemeinek átlaga:"+osszeg/tomb.length);
    return osszeg;
    }
    
Osszeg()


// Megszámlálás tétele

function ParosSzamok () {
	let db = 0;
    for (let i=0; i<tomb.length; i++) {
    	if (tomb[i]%2==0)
        {
        db++;
        }
    }
    document.write("<hr>A tömb páros elemeinek mennyisége: "+db);
}

ParosSzamok();


// Minimumkiválasztás érték alapján

function MinErtek() {
	let minErtek = tomb[0];
    for (let i=1; i<tomb.length; i++) {
    if (tomb[i]<minErtek)
    	{
        minErtek=tomb[i];
        }
    }
    document.write("<hr>A tömb elemeinek legkisebb értéke: "+minErtek);
}

MinErtek();



// Minimumkiválasztás index alapján

function MinIndex() {
	let minIndex = 0;
    for (let i=1; i<tomb.length; i++) {
    if (tomb[i]<tomb[minIndex])
    	{
        minIndex=i;
        }
    }
    document.write("<hr>A tömb elemeinek legkisebb értéke index alapján: "+minIndex);
}

MinIndex();



// Maximumkiválasztás érték alapján

function MaxErtek() {
	let maxErtek = tomb[0];
    for (let i=1; i<tomb.length; i++) {
    if (tomb[i]>maxErtek)
    	{
        maxErtek=tomb[i];
        }
    }
    document.write("<hr>A tömb elemeinek legnagyobb értéke: "+maxErtek);
}

MaxErtek();



// Maximumkiválasztás index alapján

function MaxIndex() {
	let maxIndex = 0;
    for (let i=1; i<tomb.length; i++) {
    if (tomb[i]>tomb[maxIndex])
    	{
        maxIndex=i;
        }
    }
    document.write("<hr>A tömb elemeinek legnagyobb értéke index alapján: "+maxIndex);
}

MaxIndex();


// Kiválogatás tétele

document.write("<hr>A tömbben lévő páros elemek listája:");
function ParosSzam () {
	for(let i=0;i<tomb.length;i++)
	{
		if(tomb[i]%2==0)
    	{
    		document.write(tomb[i]+",");
    	}
	}
}

ParosSzam ();







</script>
