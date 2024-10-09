let dogruCevap = 0;
let yanlisCevap = 0;



let soru1 = prompt('Türkiye\'nin başkenti neresidir?');

if (soru1 === 'Ankara') {

  dogruCevap++;
  alert('Doğru');

} else {

  yanlisCevap++;
  alert('Doğru Cevap: Ankara');
}

let soru2 = prompt('Dünyanın en yüksek dağı hangisidir?');

if (soru2 === 'Everest') {
  dogruCevap++;
  alert('Doğru');
} else {
  yanlisCevap++;
  alert('Doğru Cevap:Everest');
}

let soru3 = prompt('Dünya\'nın uydusu hangisidir?');
 if (soru3 === 'Ay') {
  dogruCevap++;
  alert('Doğru');
 } else {
  yanlisCevap++;
  alert('Doğru Cevap:Ay');
 }
 
 let soru4 = prompt('Bir yıl kaç gündür?');
 if (soru4 === '365') {
  dogruCevap++;
  alert('Doğru');
 } else {
  yanlisCevap++;
  alert('Doğru Cevap:365');
 }

 let soru5 = prompt('Gökkuşağında kaç renk vardır?');
 if(soru5 === '7') {
  dogruCevap++;
  alert('Doğru');
 } else {
  yanlisCevap++;
  alert('Doğru cevap:7');
 }

 let soru6 = prompt('En büyük kıta hangisidir?');

 if( soru6 === 'Asya') {
  dogruCevap++;
  alert('Doğru');
 } else {

  yanlisCevap++;
  alert('Doğru Cevap:Asya');

 }

 let soru7 = prompt('Bir hafta kaç gündür?');

 if (soru7 === '7') {

  dogruCevap++;
  alert('Doğru');

 } else {

  yanlisCevap++;
  alert('Doğru Cevap:7');
 }

 let soru8 = prompt('Mona Lisa tablosunu kim yaptı?');
 if(soru8 === 'Leonardo da Vinci') {
  dogruCevap++;
  alert('Doğru');

 } else {

  yanlisCevap++;
  alert('Doğru Cevap:Leonardo da Vinci');
 }

 let soru9 = prompt('Türkiye\'nin en uzun nehri hangisidir?');
 if (soru9 === 'Kızılırmak') {
  dogruCevap++;
  alert('Doğru');
 } else {
  yanlisCevap++;
  alert('Doğru Cevap:Kızılırmak');
 }

 let soru10 = prompt('Hangi gezegen "Kırmızı Gezegen" olarak bilinir?');
 if (soru10 === 'Mars') {
  dogruCevap++;
  alert('Doğru');
 } else {
  yanlisCevap++;
  alert('Doğru Cevap:Mars');
 }

 alert('Doğru Cevaplar:' + ' ' + dogruCevap + ' ' + 'Yanlış Cevaplar:' + ' ' + yanlisCevap);