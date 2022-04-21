/* MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
MILESTONE 2
Adesso rimuoviamo il markup statico in eccesso e inseriamo le immagini dinamicamente servendoci della struttura dati fornita. Stampiamo prima l'immagine grande e usiamo la direttiva v-for per stampare tutti i thumbnails.
Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso Vue-js.
MILESTONE 3
Ora rendiamo lo slider dimanico. Al click dell'utente sulle frecce verso l'alto o verso il basso, l'immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi: - titolo e - testo.
Allo stesso tempo nelle miniature l'immagine attiva dovrà apparire in evidenza rispetto alle altre */

// creo l'istanza Vue
const app = new Vue({
    el: '#app',
    data: {},
    methods: {}
})