---
title: "Performance Study"
image: "test2.jpg"
tech: ["Astro", "Svelte", "React", "Hono", "Lighthouse"]
description: "En studie i frontendarkitekturens påverkan på prestanda och dataförbrukning i tre identiska UI"
github: "http://github.com/KenZan00/web-performance-comparison-react-astro.svelte"
---

## Projektet

En jämförande studie i hur tre identiska UI med olika frontendarkitektur påverkar prestanda och dataförbrukning.

Projektet sätter upp en empirisk studie med tre funktionellt och visuellt identiska sidor för varje arkitektur och jämför deras inital load metrics och total byte weight med Google Lighthouse.

Resultaten analyseras med Pandas för att identifiera de olika lösningarnas prestanda och avvikelsevärden. Den teoretiska delen av examensarbetet går igenom en noggrant formulerad metod för att undvika bias, gör en litteraturundersökning och analyserar resultaten både inom projektet och deras generaliserbarhet.

## Tekniker

- React - SPA med react router
- Astro - Som "Islands hydrated"
- Svelte - Som enskilda komponenter av interaktivitet i Astro
- Hono - Backend
- Lighthouse - Programmatisk uppsättning med loggning av resultat i JSON-format
- Pandas
- Matplot / Seaborn


## Lärdom

Examensjobbet lärde mig om hur olika frontendarkitekturer fungerar under ytan, och hur deras redneringsstrategier påverkar prestanda och dataförbrukning i applikationer.

Att arbeta med en empirisk studie gav mig kunskap inom hur man sätter upp experimentiell kod och hur dessa kan jämföras samt en ökad kunskap om metodik.

En av dem viktigaste kunskaperna jag fick från detta projekt var hur man med hjälp av korrekta teknikval redan i planeringsarbetet kan påverka en webapplikations framtida prestanda och dataförbrukning.
