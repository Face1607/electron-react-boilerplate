# Überblick Electron-React-Boilerplate

Um die Abhängigkeiten zu installieren muss ein ```npm init``` ins Terminal eingegeben werden. Um das Programm zu starten reicht der Befehl ```npm run-script electron:serve```. 

**Wichtig: der electron:build Befehl ist nicht implementiert!!!**

Der Grund ist die vielen Einstellungen die absolute abhängig von der zu erzeugenden App ist. Wenn man die Appikation am Ende ausführen möchte müssen folgende Schritte absolviert werden:

1. Die React App muss gebuildet werden. Dies geht im Boilerplate mit ```npm build```.
2. Dann muss in der /public/main.js die richtige einstiegsdatei gewählt werden aktuell ist es der localhost:3000.
3. Die electron app muss gebuildet werden. Dies geht am besten am besten mit dem Electron builder.  https://www.electron.build/

## Erklärung zum Boilerplate

Die gesamte App wurde in mehreren Schritten erstellt.

1. Folgender Befehl wurde gemacht ``` npx create-react-app folder name``` - altenativ kann der Folder name durch ein "." ersetzt werden wenn kein Ordner erzeugt werden soll.
2. Es wird folgender Befehl eingegeben ```npm i concurrently wait-on cross-env```
    * concurrently: Dieses Programm ermöglicht es mehrere cmd Befehle hintereinander auszuführen
    * wait-on: Dieses Programm startet einen Befehl erst dann wenn eine Datei geöffnet oder ein Prot erzeugt wurde - wichtig für die erstellung von localhost:3000
    * cross-env: Gibt uns die Möglichkeit Parameter zu setzen wie: ```BROWSER=none```