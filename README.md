# Interactive Functionality

Ontwerp en maak voor een opdrachtgever een interactieve toepassing die voor iedereen toegankelijk is

De instructie vind je in: ![image](https://github.com/user-attachments/assets/51e7290c-be74-466a-b479-aea7bd1a3ce5)



## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
### Bieb in Bloei
![image](https://github.com/user-attachments/assets/1f860081-470d-4390-baff-128c9801c245)


Live website: https://user-experience-enhanced-website-6ffd.onrender.com
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<!-- Voeg een mooie poster visual of video toe 📸 -->
<!-- Voeg een link toe naar GitHub Pages 🌐-->

## Gebruik
Op de hoofdpagina staan alle stekjes die worden ingeladen uit de database waar de stekjes in staan. Mochten de stekjes niet juist ingeladen worden komt er een error te staan 'Er zijn op dit moment helaas geen stekjes beschikbaar'. Onder elk stekje staat een hartje (like button). Als je op het hartje klikt en dus liked krijg je een loading spinner te zien totdat de like echt is gelukt, dit voorkomt dat de gebruiker niet weet of er echt is geliked, de persoon krijgt dus feedback. 
Het liken word opgeslagen in de database, daar staat onder elk stekje hoeveel likes het heeft. Hoeveel likes een plantje heeft heb ik nog niet kunnen uitwerken in deze website, maar dat ben ik wel van plan.

Als je op een stekje drukt ga je naar de detailpagina van het stekje. Daar staat informatie over dingen als giftigheid, land van herkomst etc..
<!-- Bij Gebruik staat de user story, hoe het werkt en wat je er mee kan. -->

## Kenmerken
### Ontwerp
![image](https://github.com/user-attachments/assets/fe3da450-3e91-4a38-bebd-120cf11252c3)
![image](https://github.com/user-attachments/assets/7e206d39-4877-431f-adbe-32b6fded5a4d)
Ik heb er voor gekozen om de like knop links onder neer te zetten. Dit heb ik gedaan, omdat op veel andere social media daar ook de like knop zit en dit dus een logische plek is voor mensen.


![Schermopname (73)](https://github.com/user-attachments/assets/e0f2d1ce-a1c1-45bb-a346-ce1fae0eede1)
Ik heb gekozen om een loading spinner te laten zien wanneer er geliked word. Dit heb ik gedaan, omdat dit voor feedback zorgt. Daardoor weet de gebruiker bijvoorbeeld dat die niet heeft misgeklikt en dat de like ook echt aan het verwerken is.

### Code
De html en css is genest om overzicht te houden in de code
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/1b881faf7d715dde82e948b966c139760bcb1633/public/stekjes.css#L52-L90

De stekjes worden ingeladen door middel van for loops
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/1b881faf7d715dde82e948b966c139760bcb1633/views/stekjes.liquid#L26-L47
Een for loop hoef je maar 1 keer te schrijven en eigenlijk op basis van hoeveel keer iets in de database staat (wat in dit geval stekjes zijn) voert die die code voor elk stekje uit. Dit is handig, omdat als er nu stekjes bij zouden komen in die database die automatisch toe worden gevoegd op de website.

Mochten er geen stekjes ingeladen worden komt er een vervangende tekst te staan inplaats van alle stekjes
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/82bd9e30f4a4826716d4d950491a0cfd0b22a67a/views/stekjes.liquid#L26-L47
Het bovenste word uitgevoerd (alles boven % else %). Mocht dat niet kunnen dan geld het onderste wat in dit geval de tekst toont dat er geen stekjes beschikbaar zijn.

Als er word geliked is er een loading spinner te zien totdat de like verstuurd en ontvangen is
https://github.com/user-attachments/assets/f3c56561-f6be-4e3a-9b95-82d054d391a3
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/82bd9e30f4a4826716d4d950491a0cfd0b22a67a/views/stekjes.liquid#L50-L110

Via deze server side js worden de detailpagina's gemaakt voor de stekjes
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/dc22446c1b132789b07b85677dc6b7923bebeb03/server.js#L48-L56
Aller eerst word de route gedefinieerd '/stekje/:id' deze code zegt dat er voor elk id een losse stekje pagina komt. En dat klopt, want elk losse stekje heeft zijn eigen detailpagina nodig. Via dat id word dynamisch op id een pagina gemaakt, dit is handig, omdat als er nu een nieuw stekje zou worden toegevoegd in de database dan word er automatisch een nieuwe detailpagina voor dat stekje aangemaakt.


<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? Misschien heb je iets met NodeJS gedaan, of heb je een framework of library gebruikt? -->

## Installatie
Ga naar de website van Node.js (https://nodejs.org/en) en download de LTS versie.
Allereerst is het belangrijk om de repo te forken en clonen zodat je in je eigen omgeving zit. Ga daarom naar github en als je in de juiste repo zit druk dan fork. Na het forken open je de repo met github desktop door op de groene 'code' button en daarna op 'open with GitHub Desktop' te drukken. In github desktop clone je de repo zodat de code in vscode staat.
Nu open je je terminal en navigeer je naar de juiste map (waar je je repo lokaal hebt staan) en voer " cd 'locatie/pad van repo' " uit. Ook kan dit door in github desktop op 'repository' te drukken en daarna op 'open in command prompt'. Met de laatste manier ben je automatisch al in de juiste locatie/pad in de terminal.
Nu je in je terminal in de juiste map bent voer je 'npm install' uit in terminal om alle benodigde paketten te installeren.
Voer nu 'npm start' uit in terminal om lokaal je 'server' op te starten.
Open het adres wat te zien is na het uitvoeren van stap 4 (http://localhost:'port')
Mocht je dingen veranderen in server.js moet je je lokale 'server' opnieuw starten door 'ctrl + c' of 'cmd + c' te typen in de terminal waar je ook de server hebt opgestart.
Om hem op te starten typ je weer 'npm start' in de terminal. Nu kun je werken in je eigen omgeving doormiddel van node :)
<!-- Bij Installatie staat hoe een andere developer aan jouw repo kan werken -->

## Accessibility
Er is rekening gehouden om te zorgen dat de website te gebruiken is voor iedereen.
Uit de lighthouse test in de inspector kwam 90%, dit is nog niet optimaal, maar zeker niet slecht (zie foto)
![Schermopname (72)](https://github.com/user-attachments/assets/bdb80168-8962-4d4f-b2b5-22d19f9ea4b4)
Daarnaast is in het linker deel te zien dat alles tabbaar is.
Ook is er rekening gehouden met screen readers. Zo is de alt van elke foto dynamisch.
https://github.com/Ties7/the-web-is-for-everyone-interactive-functionality/blob/main/views/stekjes.liquid#L31

Daarnaast is de website getest door 3 gebruikers op verschillende oude apparaten en browsers. Hieruit kwam dat sommige styling op hele oude browser versies het niet doet. Dat is opzich helemaal geen probleem aangezien de corefunctionalities het wel bleven doen, zoals het kunnen navigeren naar de detailpagina's en de stekjes liken.
Dit betekend dus dat de website op (bijna) iedere browser en device blijft werken.


## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
