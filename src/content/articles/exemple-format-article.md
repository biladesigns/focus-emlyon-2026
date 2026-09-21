---
titre: Exemple de format d'article
description: Article de demonstration qui documente le format attendu. Reste en brouillon, n'apparait jamais en production.
date: 2026-09-21
auteur: FOCUS emlyon
motCle: exemple
image: /og-image.jpg
brouillon: true
---

## À quoi sert ce fichier

Il documente le format. Il est en `brouillon: true`, donc il n'apparaît ni sur
`/articles`, ni dans le sitemap, ni sur une URL publique. Supprime-le quand tu
as publié un vrai article.

## Champs du frontmatter

- `titre`, `description`, `date`, `motCle` sont **obligatoires**, le build
  échoue s'il en manque un. C'est voulu : mieux vaut un build cassé qu'un
  article publié sans balisage.
- `motCle` est la requête visée. Elle sert au journal SEO, pas au référencement
  direct.
- `brouillon: true` garde l'article hors production.

## Écriture

Texte en markdown standard : **gras**, *italique*, [liens](https://focus-emlyon.com),
listes, et blocs de code.

> Les citations fonctionnent aussi.

Le temps de lecture est calculé automatiquement à partir du nombre de mots.
