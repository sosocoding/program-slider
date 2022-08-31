Bonjour, je suis Soufiane merci de prendre le temps de me lire.

## Questions

Je me suis demandé :

- A-t-on le droit d'utiliser une librarie pour le carousel ou si le but de l'exercice était l'implémentation from scratch de ce dernier.
- Le carousel doit-il être responsive ?
- Y-a-t-il un comportement particulier à respecter ?

Au final j'ai opté pour une implémentation from scratch

Dans l'implémentation from scratch je me suis demandé si je devais créer un state qui gère l'état du slider en contenant
l'index des cards affichés, finalement je suis aller au plus simple en faisant scroller une DIV horizontalement.

Pour la partie récupération de données, j'ai obtenu un objet indexé contenant d'autres objets j'ai donc du le formatter sous forme
de tableau en faisant attention de l'indiquer à typescript.

J'ai eu la problèmatique des images qui n'existe pas, ce qui avait pour conséquence de casser le design de mon slider,
j'ai donc créer un hook qui vérifie si celle-ci existe sinon il renvoi une image par défaut à la place.

## Améliorations du JDD

Pour les améliorations du jeu de données j'ai pensé à :

- Renvoyer un tableau de Program au lieu d'un objet indéxé
- Peut-être, ne pas renvoyer des urls d'image qui sont KO
- La petite faute d'orthographe sur le mot "thumbnail" :)

## Choix des technos

J'ai choisi de partir du NextJs pour répondre à la problématique du SSR, et pour le reste je me suis adapté à la stack technique
de chez TF1 à une exception près.

J'ai fait le choix d'utiliser Emotion JS qui à mon sens est beaucoup plus intuitif que tailwind et surtout car j'ai oublié le
nom des classes :)

Encore Merci à vous !
