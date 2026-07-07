---
title: "Electric Revolution"
image: "test.jpg"
tech: ["React", "Express", "MongoDB", "Docker"]
description: "Ett projekt med realtidskarta över hyrscootrar. Utvecklat med karta, sockets, CI-flöde och fullt containeriserat"
github: "https://github.com/git-Stella/vteam"
---

## Projektet

Electric Revolution är ett gruppprojekt utvecklat tillsammans med tre kurskamrater vid BTH. Projektets syfte var att skapa ett system för hantering av elscootrar, för både användare och administratör enligt en fiktiv kunds kravspecifikation.

Inledningsvis tog vi fram en System Design Specification där vi dokumenterat projektets funktionalitet, arkitektur & teknikval. Lösningen implementerades sedan enligt denna och presenterades med en full simulering av projektet.

## Tekniker

- React - Frontend (Full client side)
- Zustand - State management
- Leaflet - Kartor
- Socket.io - realtidskommunikation
- Express - Backend
- Event bus - Hantering av händelser i systemet
- MariaDB - Relationsdatabas
- Docker - Full containerisering (compose)
- Continous Integration Github
- SonarQube - Statisk kodanalys

## Mitt bidrag till projektet

Jag arbetade med både frontend, backend och projektets struktur.

### Frontend

- Implementarede global state med Zustand
- Realtidsuppdateringar via socket.io
- Kartfunktionalitet med leaflet
- Byggde komponenter för scootrar och uthyrning.

### Backend

- Logik för hantering av pågående resor
- Logik för hantering av rent and return för scootrar
- Eventemitter för affärslogik
- Socket-io med kopplad simulation
- Rutter för simuleringen
- Hjälpfunktioner och en del CRUD operationer.

### Miljö

- Full docker-setup för hela projektet
- Strukturering av projektets mappstruktur och arkitektur.

## Lärdom

Detta projekt gav mig en djupare förståelse för hur man bygger ett realtidssystem med sockets, globala states och utvecklar med en eventdrivet arkitektur i ett lite större system. Jag lärde mig hur man containeriserar ett helt projekt och hur man kan jobba i detta tillsammans med ett team.

Jag fick praktiskt erfarenhet av hur man kan bygga en skalbar och modulär applikation där det går att lägga till ny funktionalitet över tiden.