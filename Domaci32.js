// 1.	Kreirati funkciju koja ce za zadani broj od 1 - 6 kreirati HTML naslove do prosledjenog nivoa. 
// Elemente kreirati uz
// 	pomoc for petlje i ispisati u HTML dokument pomocu document.write() funkcije.
// 		PRIMER: Ako je funkciji prosledjen broj 3, treba da se izgenerisu naslovi od h1 do h3.
// 		REZULTAT:
// 			<h1>Ovo je generisani naslov</h1>
// 			<h2>Ovo je generisani naslov</h2>
// 			<h3>Ovo je generisani naslov</h2>

function naslovi(a){
    for(var i = 1; i <= a; i++){
        document.write("<h" + i + ">" + "Ovo je generisani naslov" + "</h" + i + ">" );
    }
}
naslovi(6);


// 2.	Izmeniti funkciju iz 1. zadatka tako da kao parametar prima 2 broja i generise naslove izmedju 
//ta dva broja.
// 		PRIMER: Ako su funkciju prosledjeni brojevi 2 i 4, generisu se naslovi od h2 do h4.
// 		REZULTAT:
// 			<h2>Ovo je generisani naslov</h2>
// 			<h3>Ovo je generisani naslov</h3>
// 			<h4>Ovo je generisani naslov</h4>

function naslovi2(a, b){
    for (var i = a; i <= b; i++){
        document.write("<h" + i + ">" + "Ovo je generisani naslov" + "</h" + i + ">" );
    }
}
naslovi2(3,6);


// 3.	Kreirati funkciju koja ce uz oslonac na ugradjenu 
//funkciju 'indexOf' proveravati da li prvi prosledjeni string sadrzi
// 	drugi.
// 		PRIMER: Ako su funkciji prosledjeni stringovi 'Dobar dan' i 'dan', 
//  funkcija treba da vrati vrednost true, 
// 		jer je string 'dan' sadrzan u stringu 'Dobar dan'.

 function sadrziString(param1, param2){
    var a = param1.indexOf(param2)
    if(a == -1){
        console.log(param1 + " ne sadrzi " + param2);
    } else {
       
        console.log(param1 + " sadrzi " + param2);
    }

}
sadrziString("Dobar dan", "Dan");


// 4.	Izmeniti funkciju iz 3. zadatka, tako da se ignorisu 
// velika i mala slova prilikom provere.
function sadrziString(param1, param2){
    var a = param1.toLowerCase().indexOf(param2)
    if(a == -1){
        console.log(param1 + " ne sadrzi " + param2);
    } else {
       
        console.log(param1 + " sadrzi " + param2);
    }

}
sadrziString("Dobar dan", "dobar");

// 5.	Kreirati program koji analizira JMBG koji je definisan kao string 
//(kao u primerima '10. numbers' i '11. string').
// 	Znacajne delove JMBG-a izdvojiti putem funkcije substring.
// 	JMBG je broj formata 'DDMMGGGRRBBBK' i sastoji se od sledecih informacija:

// 		DD - dan rođenja
// 		MM - mesec rođenja
// 		GGG - zadnje tri cifre godine rođenja
// 		RR - region rođenja, odn. prebivalište za građane rođene pre 1976. godine.
// 		BBB - pol:
// 		    	000-499 - muški
// 		    	500-999 - ženski
// 		K - kontrolna cifra

// 	U zadatku ispisati datum rodjenja i pol osobe za zadani JMBG.

function jmbg(a){
    var dan = a.substring(0,2);
    var mesec = a.substring(2,4);
    var godine = a.substring(4,7);
    var pol = a.substring(7,10);
    if(pol < 500){
        pol = "muskog";
    } else {
        pol = "zenskog"
    }
    console.log("Biljana Nedeljkov je rodjena " + dan + "." + mesec + "." +
    "1" + godine + "." + " i " + pol + " je pola.")
}
jmbg("1003979855047");




// 6.	Uz pomoc funkcije split() kreirati funckiju koja ce za zadati deo URL-a
//  izvuci vrednosti HTTP GET parametara.
// 	PRIMER:	Zadat je deo urla: '?ime=sinisa&prezime=mihajlovic'
// 	REZULTAT: Rezultat je sledeci ispis u HTML dokument:
// 		ime=sinisa
// 		prezime=mihajlovic	

function imePrez(param){
    var a = param.split("&");
    var ime = a[0].substring(1);
    var prezime = a[1];
    document.write(ime + "<br>" + prezime);
}
imePrez('?ime=sinisa&prezime=mihajlovic');
document.write("<br/><br/>")


// 7.	Kreirati JavaScript program koji u HTML dokument ispisuje koliko je dana ostalo do vikenda
// u odnosu na trenutni dan.
// 	Napomena: Trenutni dan mozete dobiti na sledeci nacin:
// 	var danas = new Date();
// 	var dan = danas.getDay(); // 0 - nedelja, 6 - subota

function vikend(){
    var danas = new Date();
    var dan = danas.getDay();
    var ostalodovikenda = 6 - dan;
    document.write("Do vikenda je ostalo " + ostalodovikenda + " dana.")

}
vikend();