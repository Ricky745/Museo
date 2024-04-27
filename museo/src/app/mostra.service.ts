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
    { id: 6, nomeMostra: "coesist", nomeArtista: "combo", img: "https://i.pinimg.com/564x/6e/f2/2d/6ef22d1e73df9b5cc904ed6d66cf7544.jpg", imgLogo: "url_logo", descrizione: "nato da padre cristiano libanese e madre musulmana marocchina, Combo ha iniziato ufficialmente la sua carriera di artista nel 2012. Questo artista di strada impegnato ha deciso di passare la zona proibita di Chernobyl per attaccare i suoi manifesti pubblicitari. Nel 2015 si è ispirato a un logo polacco creato dal designer Piotr Mlodozeniec: COEXIST. La coesistenza è illustrata attraverso diversi simboli religiosi: la mezzaluna, la stella di David e la croce cristiana. Questa street art richiede la tolleranza e il rispetto di tutte le fedi. Dopo gli attentati a Charlie Hebdo, Combo ha esposto la sua arte per le strade di Parigi. Sfortunatamente, è già stato attaccato mentre creava la sua arte.", dataInizio: new Date().getTime(), dataFine: new Date().getTime() + (30 * 24 * 60 * 60 * 1000)},
    { id: 7, nomeMostra: "Chain", nomeArtista: "Blu", img: "https://cdn.lifegate.it/GgjiEUP6zSZ_DjTXjEPo7sDCLQk=/640x0/smart/https://www.lifegate.it/app/uploads/blu-berlin-carnagenyc-flickr.jpg", imgLogo: "url_logo", descrizione: "Attraverso la prima opera Chain, a sinistra BLU denuncia la nostra società dei consumi, mostra un colletto bianco che si aggiusta la cravatta, legato dalle catene del capitalismo con i suoi due Rolex", dataInizio: new Date().getTime(), dataFine: new Date().getTime() + (30 * 24 * 60 * 60 * 1000)},

  ]

  mostra1: any = [
    {id: 1 ,nomeMostra:"Il Misterioso Genio dell'Arte di Strada", nomeArtista: "Banksy", img: "https://i2-prod.dailyrecord.co.uk/incoming/article1726541.ece/ALTERNATES/s1227b/Banksy.jpg", imgO1:"https://d7hftxdivxxvm.cloudfront.net/?quality=80&resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FX8u7Dl6gA5wDdLu4M_vTUw%2Fnormalized.jpg&width=910" , imgO2:"https://suggestive.com/wp-content/uploads/2016/03/nofuture.jpg" , descrizione:"Nell'arte contemporanea, pochi nomi risuonano con lo stesso mistero e l'ammirazione di Banksy. Questo enigmatico artista di strada, la cui vera identità è ancora sconosciuta al mondo, ha lasciato il suo segno indelebile nelle città di tutto il mondo con le sue opere provocatorie e iconiche.", dataInizio: new Date().getTime() + (2 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (3 * 30 * 24 * 60 * 60 * 1000)}
  ]
  mostra2: any = [
    {id: 2 ,nomeMostra:"Untitled (1981)", nomeArtista: "Jean Michel Basquiat",  img: "https://i.pinimg.com/564x/62/a5/e5/62a5e52a37f5b13d7163531de2bd8d07.jpg", imgO1:"https://i.pinimg.com/564x/7a/70/00/7a7000630575d11558ba3be28191e5f9.jpg" , imgO2:"https://i.pinimg.com/564x/3a/db/46/3adb463648e2d86c0a10629573c7f4a0.jpg" , descrizione:"Jean-Michel Basquiat è stato un artista statunitense che ha lasciato un'impronta indelebile nel mondo dell'arte contemporanea. Nato nel 1960 a New York, Basquiat è diventato noto per il suo stile unico e provocatorio che mescolava street art, graffiti, e espressionismo.La sua arte spesso affrontava temi come la razza, la politica, l'identità e la cultura urbana. Basquiat era un autodidatta, e il suo stile caratteristico si distingueva per i tratti spontanei, i simboli ricorrenti, e le parole scritte a mano che dominavano le sue opere.", dataInizio: new Date().getTime() + (5 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000)}
  ]

  mostra3: any = [
    {id: 3 ,nomeMostra:"Obey Giant (1989)", nomeArtista: "Shepard Fairey", img: "https://i.pinimg.com/564x/4b/5f/8a/4b5f8ac6d810c73da911767f91495fc4.jpg", imgO1:"https://i.pinimg.com/564x/51/da/33/51da33d018abf0a18836edc025e9f712.jpg" , imgO2:"https://i.pinimg.com/564x/c3/43/cf/c343cf9db5a53cd70cb77e89ba3a0215.jpg" , descrizione:"Shepard Fairey è un artista americano nato nel 1970, noto principalmente per la sua arte di strada e i suoi manifesti iconici. È diventato famoso per il suo lavoro come street artist sotto lo pseudonimo di OBEY e per la creazione dell'immagine dell'HOPE di Barack Obama durante la sua campagna presidenziale del 2008.Fairey ha iniziato la sua carriera come street artist nella scena punk rock di Providence, Rhode Island, dove ha iniziato a creare adesivi, poster e stencil. La sua arte è caratterizzata da immagini audaci, simboli distintivi e un forte messaggio politico e sociale.", dataInizio: new Date().getTime() + (9 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (11 * 30 * 24 * 60 * 60 * 1000)}
  ]

  mostra4: any = [
    {id: 4 ,nomeMostra:"Il gigante di Boston", nomeArtista: "os Gemeos",img: "https://i.pinimg.com/736x/ce/0e/6f/ce0e6f7d81bdcf2298a07fa32d0981ac.jpg", imgO1:"https://i.pinimg.com/564x/11/b6/e0/11b6e0ab32e530cb864e5f962a2079e6.jpg" , imgO2:"https://i.pinimg.com/564x/ec/94/08/ec94085e579d76d5f0cd1db2a89195f2.jpg" , descrizione:"Os Gemeos è un duo di artisti di strada brasiliani composto dai fratelli identici Otavio e Gustavo Pandolfo. Nati a San Paolo nel 1974, Os Gemeos (che in portoghese significa i gemelli) sono diventati noti per il loro stile distintivo e vibrante che mescola influenze della cultura urbana, della street art e della cultura popolare brasiliana.La loro arte è caratterizzata da figure umane stilizzate, spesso dipinte con colori vivaci e intricati dettagli, che creano un mondo immaginario e surreale. Utilizzando principalmente la tecnica dello spray, i gemelli Pandolfo hanno impreziosito le strade di San Paolo e molte altre città del mondo con i loro murales audaci e coinvolgenti.", dataInizio: new Date().getTime() + (10 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (11 * 30 * 24 * 60 * 60 * 1000)},
  ]

  mostra5: any = [
    {id: 5 ,nomeMostra:"tutto il mondo ", nomeArtista: "Keith Haring",  img: "https://i.pinimg.com/564x/de/d1/cd/ded1cde6c71b6a9b7705f59ed9725c91.jpg", imgO1:"https://i.pinimg.com/236x/65/34/52/6534528b46caeda6228ec67ee5a90e59.jpg" , imgO2:"https://i.pinimg.com/564x/97/e2/60/97e260523f980c2f957d27433eec72c5.jpg" , descrizione:" Keith Haring è stato un artista americano nato nel 1958 e scomparso prematuramente nel 1990. È noto per il suo stile distintivo e immediatamente riconoscibile, caratterizzato da linee audaci, colori vivaci e figure iconiche.Haring ha guadagnato fama negli anni '80 per le sue opere di street art che decoravano i muri di New York City, in particolare nelle metropolitane. I suoi disegni, che spesso rappresentavano figure umane stilizzate, animali e simboli, comunicavano messaggi di amore, pace, e consapevolezza sociale.", dataInizio: new Date().getTime() + (1 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (3 * 30 * 24 * 60 * 60 * 1000)}
  ]

  mostra6: any = [
    {id: 6 ,nomeMostra:"coesist", nomeArtista: "combo", img: "https://th.bing.com/th/id/R.07f19d9bf080713bc38bd83eaf4756d2?rik=pNe5viPVre53HA&riu=http%3a%2f%2fwww.mursmurs.com%2f01-Pochoirs-et-Collages%2fassets%2fimages%2fcombo-paris-france-2015-paris-2000x1333-800x533.jpg&ehk=LxdHl9f7mW1fSQtQtkYBwR3IVD4qJdzSXL%2b5qPwlxYQ%3d&risl=&pid=ImgRaw&r=0", imgO1:"https://th.bing.com/th/id/OIP.QHV3HUkRS_HGJoL2slH2YQAAAA?rs=1&pid=ImgDetMain" , imgO2:"https://www.bondyblog.fr/app/uploads/2019/07/poster-de-combo.jpg" , descrizione:"Combo, noto anche come Mr. Combo, è uno street artist francese che ha guadagnato fama per le sue opere di arte di strada che fondono immagini di personaggi dei fumetti, della cultura popolare e icone famose con elementi della vita quotidiana urbana. La sua arte è caratterizzata da una forte componente satirica e ironica, con opere che spesso riflettono sulle tendenze contemporanee, i media di massa e la politica. Combo è noto per la sua creatività nel trovare luoghi insoliti per le sue opere, come gli angoli delle strade, i cestini dei rifiuti e altri oggetti urbani, trasformando gli spazi urbani in gallery a cielo aperto. La sua identità rimane avvolta nel mistero, aggiungendo un elemento di intrigo e fascino alla sua arte di strada. Combo continua a ispirare e provocare riflessioni con le sue opere che combinano l'estetica della cultura pop con una critica sociale penetrante.", dataInizio: new Date().getTime() + (8 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (10 * 30 * 24 * 60 * 60 * 1000)}
  ]

  mostra7: any = [
    {id: 7 ,nomeMostra:"chain", nomeArtista: "Blu", img: "https://i.pinimg.com/564x/97/92/d0/9792d08f378e2c101d11dbf1e8e7194e.jpg", imgO1:"https://i.pinimg.com/564x/dd/f4/c8/ddf4c80cf8d1a7a39c478ddf5580cbb1.jpg" , imgO2:"https://i.pinimg.com/564x/62/a6/3c/62a63c5f72c09a0841ab7befb74a39bb.jpg" , descrizione:"Blu è uno street artist italiano noto per le sue opere provocatorie e concettuali che sfidano le convenzioni artistiche e sociali. Nato a Bologna, Italia, Blu ha iniziato la sua carriera artistica dipingendo murales e graffiti nelle strade della sua città natale e in altre città italiane.Una delle caratteristiche distintive del lavoro di Blu è la sua capacità di trasformare gli spazi urbani con murales di grande scala che catturano l'attenzione del pubblico e suscitano riflessioni su temi politici, sociali e ambientali. Le sue opere spesso incorporano elementi surreali, caricaturali e simbolici che sfidano lo spettatore a pensare in modo critico sul mondo che li circonda.", dataInizio: new Date().getTime() + (5 * 30 * 24 * 60 * 60 * 1000), dataFine: new Date().getTime() + (6 * 30 * 24 * 60 * 60 * 1000)}
  ]
}
