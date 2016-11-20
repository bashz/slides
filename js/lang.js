search2object = function(search){
  var Obj = {}
  search.slice(1).slice(0).split('&').forEach(function(entry){
    var keyValue = entry.split('=');
    Obj[keyValue[0]] = keyValue[1];
  })
  return Obj;
}
search = search2object(window.location.search);
i18next.init({
  lng: search.lang || 'en',
  resources: {
    en: {
      translation: {
        "Rust for everyone": "Rust for everyone",
        "Presented By": "Presented by",
        "Before it was": "Before it was",
        "Memory access Errors": "Memory access Errors",
        "Buffer overflow": "Buffer overflow",
        "Null pointer dereference": "Null pointer dereference",
        "Use after free": "Use after free",
        "use of uninitialized memory": "use of uninitialized memory",
        "Illegal free" : "Illegal free (of a non-malloced pointer)",
        "And then came Rust": "And then came Rust",
        "To allow you": "To allow you to SAFELY manipulate MEMORY MANUALLY",
        "What is Rust": "What is Rust",
        "system programing language": "Rust is a system programing language",
        "compiled programing language": "It is a compiled programing language",
        "It is new": "It is new, the first stable release, was released on May 15, 2015",
        "Modern, Fast and Safe": "Modern, Fast and Safe",
        "New language": "New language",
        "New syntax to learn?": "New syntax to learn?",
        "Not at all": "Not at all, Rust is a C like language with a slight mix of Python/Javascript syntax.",
        "Why? we already have plenty languages": "Why? we already have plenty languages",
        "Memory Safety": "Memory Safety",
        "Concurrent Access": "Concurrent Access",
        "No garbage collector": "No garbage collector",
        "0 cost abstraction": "C++ performance with 0 cost abstraction",
        "Performance and Safety": "Rust provides both Performance and Safety at the same time",
        "When to use rust": "When to use rust",
        "When Performance count": "When Performance count",
        "Many Intervenants": "Many Intervenants",
        "Parallelism": "Parallelism",
        "have a weak point": "When your application have a weak point",
        "How to Rust": "How to Rust",
        "hello world": "hello world",
        "functions": "functions",
        "loop": "loop",
        "Cargo": "Cargo",
        "Packaging Manager": "Packaging Manager",
        "Cargo is to Rust": "Cargo is to Rust, what's npm is to nodejs",
        "Easy configuration": "Easy configuration",
        "Dependency": "Dependency configuration",
        "Envirement": "Envirement configuration",
        "Name, description": "Name, description, license, version, readme...",
        "Website": "Website",
        "a Crate is": "a Crate is a lib/package in the rust world",
        "The Community": "The Community",
        "Keys of success": "Keys of success",
        "Code of conduct": "Code of conduct",
        "Automatisation": "Automatisation",
        "Who decide about Rust": "Who decide about Rust",
        "Recap": "Recap",
        "High expectations": "High expectations",
        "Exclude the immoderate": "Exclude the immoderate",
        "Require & simplify communication": "Require & simplify communication",
        "Show appreciation": "Show appreciation",
        "Rust is made by": "Rust is made by everyone for everyone",
        "Thank you": "Thank you",
        "Videos": "Videos"
      }
    },
    fr: {
      translation: {
        "Rust for everyone": "Rust pour tout le monde",
        "Presented By": "Présenté par",
        "Before it was": "Avant c'était",
        "Memory access Errors": "Erreurs d'accès memoir",
        "Buffer overflow": "Indentation du tampon",
        "Null pointer dereference": "Pointeur Nule",
        "Use after free": "Utilisation après libération",
        "use of uninitialized memory": "Utilisation de memoir non initialisée",
        "Illegal free" : "Libération de memoir non allouée",
        "And then came Rust": "Et puis on a eu droit à Rust",
        "To allow you": "Qui nous permet de manipuler la memoir manuellement  mais de façon sûre et en sécurité",
        "What is Rust": "C'est quoi Rust",
        "system programing language": "Rust est un langage de programmation système",
        "compiled programing language": "C'est un langage compilé",
        "It is new": "Il nouveau, la première version stable 1.0 a été lancé le 15 mai, 2015",
        "Modern, Fast and Safe": "Moderne, rapide et sécurisé (safety)",
        "New language": "Nouveau langage",
        "New syntax to learn?": "Nouvelle syntaxe à apprendre?",
        "Not at all": "Pas du tout, la syntaxe de Rust est proche du C avec quelque influence JavaScript",
        "Why? we already have plenty languages": "Pourquoi? on a déjà plusieurs langages de programmation",
        "Memory Safety": "Sécurité de la memoir",
        "Concurrent Access": "Accès concurrent",
        "No garbage collector": "Pas de recyclage (garbage collector)",
        "0 cost abstraction": "Il offre la performance du C++ sans cout supplémentaire (0 cost abstraction)",
        "Performance and Safety": "Rust nous offre la sureté et la performance en même temps",
        "When to use rust": "Quand utiliser Rust?",
        "When Performance count": "Quand la performance est un élément critique (ex: embarqué, moteur de rendu, moteur physique, moteur graphique...)",
        "Many Intervenants": "Si on a plusieurs intervenants sur le projet",
        "Parallelism": "Parallelism",
        "have a weak point": "Quand l'application souffre d'un point de faiblesse",
        "How to Rust": "Comment on Rust",
        "hello world": "hello world",
        "functions": "fonctions",
        "loop": "boucle",
        "Cargo": "Cargo",
        "Packaging Manager": "Gestionnaire de paquet",
        "Cargo is to Rust": "Cargo est pour Rust ce qui est npm pour Nodejs",
        "Easy configuration": "Configuration facile",
        "Dependency": "Gestion de dépendances",
        "Envirement": "Gestion des environnements",
        "Name, description": "Auteur, description, licence, version, readme ...",
        "Website": "SiteWeb",
        "a Crate is": "Une Crate est une librairie/paquet dans le monde de Rust",
        "The Community": "La communauté",
        "Keys of success": "Les clés de la réussite",
        "Code of conduct": "Code de conduite",
        "Automatisation": "Automatisation",
        "Who decide about Rust": "Qui décide pour Rust",
        "Recap": "Récapitulant",
        "High expectations": "Grandes Attentes",
        "Exclude the immoderate": "Langage de programmation système performant et sûre",
        "Require & simplify communication": "Langage de programmation système performant et sûr, Il offre de la puissance aux développeurs en simplifiant les opérations compliquées comme le parallélisme",
        "Show appreciation": "Il est mature, et il a appris des expériences des autres langages pour adopter une approche moderne",
        "Rust is made by": "Rust est fait par tout le monde, pour tout le monde",
        "Thank you": "Merci",
        "Videos": "Vidéos"
      }
    },
    ar: {
      translation: {
        "Presented By": "Presented by"
      }
    }
  }
}, (err, t) => {
  document.querySelector('html').setAttribute('lang', search.lang);
  Array.prototype.slice.call(document.querySelectorAll('[data-lang]')).forEach(function(container){
    var transaltion = document.createTextNode(i18next.t(container.dataset.lang));
    container.appendChild(transaltion);
  })
});