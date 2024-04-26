import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostraService {

  mostre: any = [
    {id: 1 ,nomeMostra:" policeman sercing", nomeArtista: "bansky", img: "https://i2-prod.dailyrecord.co.uk/incoming/article1726541.ece/ALTERNATES/s1227b/Banksy.jpg" ,imgLogo:"https://i.pinimg.com/originals/fc/b4/74/fcb474527b14a21f31ff1c319937e42c.jpg", descrizione:"Questo pezzo è legato alla politica di stop and search che consente alla polizia di perquisire tutti i giovani che ritiene possano non fare nulla di buono è stata accolta con molte critiche, quindi non è una sorpresa vedere Banksy intervenire nel dibattito. Policeman Searching Girl è apparso a Londra nel 2007 mostrando una giovane ragazza con un orsacchiotto che viene perquisita da un poliziotto. Da allora è stato dipinto", dataInizio: new Date().getTime() + (2 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (3 * 30 * 24 * 60 * 60 * 1000)},
    { id: 2, nomeMostra: "Untitled (1981)", nomeArtista: "Jean Michel Basquiat", img: "https://www.singulart.com/blog/wp-content/uploads/2023/09/Untitled-Skull-Basquait-Jean-Michel-1981-2-1140x1348.jpg", imgLogo: "https://i.pinimg.com/564x/c4/ed/0f/c4ed0f60f707d9a53e4fe441529d21d7.jpg", descrizione: "Questa opera ritrae una affascinante combinazione di simboli e testo, mostrando la capacità dell’artista di canalizzare l’energia sulla tela.", dataInizio: new Date().getTime(), dataFine: new Date().getTime() + (30 * 24 * 60 * 60 * 1000)},
    { id: 3, nomeMostra: "Obey Giant (1989)", nomeArtista: "Shepard Fairey", img: "https://www.singulart.com/blog/wp-content/uploads/2023/10/Obey-Giant-1989.jpg", imgLogo: "url_logo", descrizione: "Raffigurando il volto di Andre the Giant nello stile di Fairey, questa immagine è diventata sinonimo di ribellione alla controcultura", dataInizio: new Date().getTime(), dataFine: new Date().getTime() + (30 * 24 * 60 * 60 * 1000)},
    { id: 4, nomeMostra: " Il gigante di Boston", nomeArtista: "os Gemeos", img: "https://cdn.thecollector.com/wp-content/uploads/2020/03/image6-5.jpg?width=1200&quality=55", imgLogo: "url_logo", descrizione: "Creata dal duo di gemelli brasiliani Otavio e Gustavo Pandolfo, The Giant of Boston è un'opera temporanea realizzata nell'ambito di una mostra per l'Institute of Contemporary Art di Boston. Questo enorme lavoro di graffiti occupa 70 piedi quadrati e raffigura un grande personaggio giallo mentre sembra stringersi tra gli edifici che lo circondano.", dataInizio: new Date().getTime(), dataFine: new Date().getTime() + (30 * 24 * 60 * 60 * 1000)},
    { id: 5, nomeMostra: "Tuttomondo", nomeArtista: "Keith Haring, 1989", img: "https://cdn.thecollector.com/wp-content/uploads/2020/03/image2-1.png?width=1080&quality=55", imgLogo: "url_logo", descrizione: "Con le figure iconiche che sono state prominenti in gran parte del lavoro di Keith Haring c'è Tuttomundo, che significa tutto il mondo in italiano. Haring incontrò a New York un amico di Pisa che lo invitò nella città in cui è stato realizzato questo murale. Le figure sono intrecciate e collegate per simboleggiare l'unità e la pace nel mondo.", dataInizio: new Date().getTime(), dataFine: new Date().getTime() + (30 * 24 * 60 * 60 * 1000)},
    { id: 6, nomeMostra: "Mio Dio, aiutami a sopravvivere a questo amore mortale", nomeArtista: "Dmitri Vrubel", img: "https://cdn.thecollector.com/wp-content/uploads/2020/03/image1-3.jpg?width=1200&quality=55", imgLogo: "url_logo", descrizione: "Negli anni '80, il muro di Berlino che separava la Germania dell'Est da quella dell'Ovest era un luogo popolare per gli artisti di graffiti per presentare il loro lavoro. Non solo quest'opera, conosciuta anche come Fraternal Kiss, è stata una delle opere più famose che abbiano mai colpito il muro, ma è anche una delle opere d'arte dei graffiti più famose di tutti i tempi.", dataInizio: new Date().getTime(), dataFine: new Date().getTime() + (30 * 24 * 60 * 60 * 1000)},
    { id: 7, nomeMostra: "Chain", nomeArtista: "Blu", img: "https://cdn.lifegate.it/GgjiEUP6zSZ_DjTXjEPo7sDCLQk=/640x0/smart/https://www.lifegate.it/app/uploads/blu-berlin-carnagenyc-flickr.jpg", imgLogo: "url_logo", descrizione: "Attraverso la prima opera Chain, a sinistra BLU denuncia la nostra società dei consumi, mostra un colletto bianco che si aggiusta la cravatta, legato dalle catene del capitalismo con i suoi due Rolex", dataInizio: new Date().getTime(), dataFine: new Date().getTime() + (30 * 24 * 60 * 60 * 1000)},

  ]

  mostra1: any = [
    {id: 1 ,nomeMostra:"Il Misterioso Genio dell'Arte di Strada", nomeArtista: "Banksy", img: "https://i2-prod.dailyrecord.co.uk/incoming/article1726541.ece/ALTERNATES/s1227b/Banksy.jpg", imgO1:"https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FX8u7Dl6gA5wDdLu4M_vTUw%2Fnormalized.jpg&width=910" , imgO2:"https://suggestive.com/wp-content/uploads/2016/03/nofuture.jpg" ,imgLogo:"https://galeriemagazine.com/wp-content/uploads/2018/12/snow3-1024x680-1920x1200.jpg", descrizione:"Nell'arte contemporanea, pochi nomi risuonano con lo stesso mistero e l'ammirazione di Banksy. Questo enigmatico artista di strada, la cui vera identità è ancora sconosciuta al mondo, ha lasciato il suo segno indelebile nelle città di tutto il mondo con le sue opere provocatorie e iconiche.", dataInizio: new Date().getTime() + (2 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (3 * 30 * 24 * 60 * 60 * 1000)}
  ]
  mostra2: any = [
    {id: 2 ,nomeMostra:"#", nomeArtista: "#",  img: "#", imgO1:"#" , imgO2:"#" ,imgLogo:"#", descrizione:"#", dataInizio: new Date().getTime() + (5 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000)}
  ]

  mostra3: any = [
    {id: 3 ,nomeMostra:"#", nomeArtista: "#", img: "#", imgO1:"#" , imgO2:"#" , imgLogo:"#", descrizione:"", dataInizio: new Date().getTime() + (9 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (11 * 30 * 24 * 60 * 60 * 1000)}
  ]

  mostra4: any = [
    {id: 4 ,nomeMostra:"", nomeArtista: "",img: "", imgO1:"" , imgO2:"" , imgLogo:"", descrizione:"", dataInizio: new Date().getTime() + (10 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (11 * 30 * 24 * 60 * 60 * 1000)},
  ]

  mostra5: any = [
    {id: 5 ,nomeMostra:"", nomeArtista: "",  img: "", imgO1:"" , imgO2:"" ,imgLogo:"", descrizione:".", dataInizio: new Date().getTime() + (1 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (3 * 30 * 24 * 60 * 60 * 1000)}
  ]

  mostra6: any = [
    {id: 6 ,nomeMostra:"", nomeArtista: "", img: "", imgO1:"" , imgO2:"" ,imgLogo:"", descrizione:"", dataInizio: new Date().getTime() + (8 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (10 * 30 * 24 * 60 * 60 * 1000)}
  ]

  mostra7: any = [
    {id: 7 ,nomeMostra:"", nomeArtista: "", img: "", imgO1:"" , imgO2:"" , imgLogo:"", descrizione:"", dataInizio: new Date().getTime() + (5 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000)}
  ]
}
