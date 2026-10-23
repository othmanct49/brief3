// =============================================================
// script.js — Mon Dex
// =============================================================
// Les données viennent de data.js (la constante `creatures`).
// Écrivez votre code ici, fonctionnalité par fonctionnalité.
// Une carte GitHub Projects et au moins un commit par fonctionnalité.


// -------------------------------------------------------------
// 1. AFFICHAGE
// Supprimez les cartes écrites à la main dans index.html et
// construisez la grille à partir du tableau `creatures`.
  import {creatures} from './data.js'
   let grid = document.getElementById('grid')
 let id_card = 0;

 


   creatures.forEach(cart => { 

 
 
   grid.insertAdjacentHTML('beforeend' ,`  <article id="${id_card}"  class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 

            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${cart.stats.hp + cart.stats.attack + cart.stats.defence } </p>
          <button type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` ) 
       id_card ++ ;
      });

 

    








// -------------------------------------------------------------
    

// -------------------------------------------------------------
// 2. DÉTAIL
  // const cart= document.querySelectorAll('.select');
  // cart.addEventlistener("click"; get_cart ) ;
  let details = document.getElementById('detail') 
 grid.addEventListener('click', (event) => {
       let clicked = event.target.closest('.select_card')
       if (clicked) {
       const card_select = clicked.querySelector('.find_cart')
       const id_card_select = card_select.innerHTML
       console.log (id_card_select)
       const index_card_select = creatures.findIndex(element => element.id == id_card_select )
      
      

   
       details.innerHTML = `<div class="flex items-center justify-between">
            <span class="font-mono text-sm text-muted">${creatures[index_card_select].id} · Détail</span>
            <button  type="button" aria-label="Fermer le détail" class="close_bot btn-outline w-11 px-0">✕</button>
          </div>
          <div class="flex h-48 items-center justify-center rounded-2xl bg-brand-light">
            <img src="${creatures[index_card_select].image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 
          </div> 
          <div class="flex items-center justify-between">
            <h2 class="font-display text-3xl font-extrabold">${creatures[index_card_select].name}</h2>
            <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold">${creatures[index_card_select].type}</span>
          </div>
          <p class="text-gray-700">${creatures[index_card_select].description}<</p>
          <div class="flex flex-col gap-2 text-sm">
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2">
            <span class="font-bold">PV</span>
            <div class="h-3  w-full  rounded-full bg-ground">
              <span class="block h-3  rounded-full bg-brand" style="width:${creatures[index_card_select].stats.hp}%" ></span>
            </div>
            <span class="text-right font-mono">${creatures[index_card_select].stats.hp}</span>
            </div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">Attaque</span><span class="h-3 rounded-full bg-ground"><span class="block h-3  rounded-full bg-brand" style="width:${creatures[index_card_select].stats.attack}% " ></span></span><span class="text-right font-mono">${creatures[index_card_select].stats.attack} </span></div>
            <div class="grid grid-cols-[80px_1fr_40px] items-center gap-2"><span class="font-bold">Défense</span><span class="h-3 rounded-full bg-ground"><span class="block h-3  rounded-full bg-brand"style="width:${creatures[index_card_select].stats.defence}% " ></span></span><span class="text-right font-mono">${creatures[index_card_select].stats.defence}</span></div>
          </div>
          <button type="button" class="btn-primary">Ajouter à l'équipe</button>` }


 
 
 
 
 
 
      }


)
   details.addEventListener('click' , (event)=>{
   let close = event.target.closest('.close_bot')
   if (close){
    details.innerHTML=`      <p class="font-display font-extrabold mx-auto text-2xl">chose card</p>`
   }
 
 } )

  

// -------------------------------------------------------------


// -------------------------------------------------------------
// 3. RECHERCHE
// La liste se met à jour pendant la saisie d'un nom
// (sans tenir compte des majuscules).
  let search = document.getElementById('search');

  let input = search.addEventListener('input', (event)=>{
    let input_search = event.target.value.toLowerCase();
        grid.innerHTML= " "
        let card_recherche = creatures.filter (arg => arg.name.toLowerCase().includes(input_search))
       
       card_recherche.forEach(cart => {
        grid.insertAdjacentHTML('beforeend', `  <article   class="select_card  flex flex-col gap-3 rounded-card bg-white  hover:-translate-y-4 hover:shadow-lg transition-all duration-300  p-3 pb-4">
          
          <div class="relative flex h-36 items-center justify-center rounded-xl bg-brand-light">
          <img src="${cart.image}" width="140px" class="  hover:-translate-y-2 hover:scale-200 mx-auto  transition-transform duration-300  " > 

            <span class="find_cart absolute left-3 top-2 font-mono text-sm text-muted">${cart.id}</span>
          </div>
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display text-xl font-semibold">${cart.name}</h3>
            <span class="rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-ink">${cart.type}</span>
          </div>
          <p class="text-sm text-muted">${cart.level} ·${cart.stats.hp + cart.stats.attack + cart.stats.defence } </p>
          <button type="button" class="btn-outline">Ajouter à l'équipe</button>
        </article> ` ) 
        
   
       })
     })

  



// -------------------------------------------------------------


// -------------------------------------------------------------
// 4. FILTRE
// Les boutons de type n'affichent que les créatures de ce type ;
// « Tous » réinitialise le filtre.
// La recherche et le filtre fonctionnent ENSEMBLE.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 5. CRÉER UNE CRÉATURE
// Validez chaque champ du formulaire avec une expression régulière
// (voir le tableau du brief). Affichez le message d'erreur sous le
// champ, et n'ajoutez jamais une créature invalide.
// -------------------------------------------------------------


// -------------------------------------------------------------
// 6. MON ÉQUIPE
// Boutons « Ajouter à l'équipe » et « Retirer », gérés avec UN SEUL
// écouteur sur la grille et UN SEUL sur l'équipe (délégation).
// -------------------------------------------------------------


// -------------------------------------------------------------
// 7. RÈGLES DE L'ÉQUIPE
// 6 créatures au maximum, pas de doublon, un message clair quand
// une action est refusée, et un compteur (x/6).
// -------------------------------------------------------------


// -------------------------------------------------------------
// BONUS : LocalStorage, Fetch API, tri, comparaison
// -------------------------------------------------------------
