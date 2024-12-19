# Application de Panier d'Achats avec Angular et NgRx

Cette application démontre l'implémentation d'un panier d'achats en utilisant Angular et NgRx pour la gestion d'état. Elle présente une architecture moderne basée sur les composants autonomes (standalone) et intègre les dernières fonctionnalités d'Angular.

## Fonctionnalités

L'application offre les fonctionnalités suivantes :
- Affichage d'une liste de produits disponibles
- Ajout de produits au panier
- Gestion des quantités dans le panier
- Calcul automatique du total
- Sauvegarde automatique du panier (simulation)

## Prérequis Techniques

- Node.js (version 18 ou supérieure)
- Angular CLI (version 18.2.12)
- NPM ou Yarn

## Installation

1. Clonez le dépôt :
```bash
git clone https://github.com/mandavola/ngrx-cart.git
cd ngrx-cart
```

2. Installez les dépendances :
```bash
npm install
```

3. Installez les dépendances NgRx :
```bash
npm install @ngrx/store@18.0.0 @ngrx/effects@18.0.0 @ngrx/store-devtools@18.0.0
```

## Structure du Projet

```
src/
├── app/
│   ├── cart/
│   │   ├── cart.component.html
│   │   ├── cart.component.scss
│   │   ├── cart.component.spec.ts
│   │   └── cart.component.ts
│   ├── models/
│   │   └── product.model.ts
│   ├── product-list/
│   │   ├── product-list.component.html
│   │   ├── product-list.component.scss
│   │   ├── product-list.component.spec.ts
│   │   └── product-list.component.ts
│   ├── services/
│   │   └── cart.service.ts
│   ├── store/
│   │   ├── cart.actions.ts
│   │   ├── cart.effects.ts
│   │   ├── cart.reducer.ts
│   │   ├── cart.selectors.ts
│   │   └── store.config.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
```

## Architecture

### Composants Standalone
L'application utilise l'architecture standalone d'Angular, éliminant le besoin de modules NgModule traditionnels. Chaque composant est autonome et déclare ses propres dépendances.

### Gestion d'État avec NgRx
- **Actions** : Définissent les interactions possibles avec le panier
- **Reducer** : Gère les modifications d'état en réponse aux actions
- **Effects** : Gèrent les effets secondaires comme la sauvegarde du panier
- **Selectors** : Permettent d'accéder à l'état de manière optimisée

## Routes

L'application définit deux routes principales :
- `/products` : Affiche la liste des produits disponibles
- `/cart` : Affiche le contenu du panier

## Développement

Pour lancer l'application en mode développement :
```bash
ng serve
```
L'application sera accessible à l'adresse `http://localhost:4200`.

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
