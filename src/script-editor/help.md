
# Controls  
## Checkbox
- Methoden
	- **isChecked():bool** : Liefert ein boolean zurück  
```groovy 
//checkbox ist nicht gesetzt
def result = chkRegistered.isChecked() //checkbox ist nicht gesetzt
//Hilfe für command assert siehe im Kapitel Assert.
assert result , "User ist nicht registriert"
```
## Listbox  
- Elemente  

- Methoden  
	- **getListOfItems():[string]** - Liefert ein Array mit verfügbaren Werten  
	- **getCurrentSelection():string** - Liefert den aktuell ausgewählten Wert  
	- **select(val:string):void** - Selektiert den vorgegebenen Wert aus der Liste  

```groovy 
//Beispiele:
def liste= lbGeschlecht.getListOfItems()
console.log(liste) //['weiblich', 'männlich', 'divers', 'unbekannt']

def geschlecht = lbGeschlaecht.getCurrentSelection()
console.log(geschlecht) // 'weiblich'

def geschlecht = 'männlich'
lbGeschlecht.select(geschlecht)
def selectedgeschlecht = lbGeschlecht.getCurrentSelection()
console.log(selectedgeschlecht) //'männlich'
```  

## Button  
- Elemente  

- Methoden  
	- **click():void** - Liefert ein Array mit verfügbaren Werten  
	- **isDisabled():bool** - Liefert den aktuell ausgewählten Wert  

```groovy 
//Beispiel
btnSave.click()
def result = btnSave.isDisabled() 
assert result, "Button Save ist nicht deaktiviert"
```
## Link  
- Elemente  

- Methoden  
	- **click():void**  
	- **isDisabled():bool** 

```groovy 
//Beispiel
lnkLogin.click()
def result = lnkLogin.isDisabled() 
assert result, "Link Login ist nicht deaktiviert"
```

## Radiogroup  
- Elemente  
	- **rgroupname** : string

- Methoden  
	- **select(labeltext:string):** - Selektiert die im labeltext vorgegebene Option
	- **getSelected()** - liefert den labeltext der selectierten Option.

```groovy  
//Beispiele familienstand(fs) radiogroup mit werten ['ledig','verheiratet','geschieden']
def famstand = 'ledig'
fs.select(famstand)

def selectedfs = fs.getSelected()
console.log(selectedfs) //ledig
```  

## Label  
- Elemente  
- Methoden
	- get():string - Liefert den Labeltext zurück

```groovy
def message ='' 
message = lblMessage.get()
console.log(message) // 'Sie Sind eingeloggt als John Doo'
```  

## Textbox  

- Elemente  
- Methoden  
	- **set(val:string):void** - Setzt den vorgegebenen Wert in die Textbox
	- **get():string** - Liefert den Wert aus dem Textbox zurück  
	- **clear():void** - Löscht den Wert in der Textbox
	- **isDisabled():bool** - Liefert true wenn die Textbox deaktiviert ist ansonsten false.
	- **isFocused():bool** - Liefert true wenn der Cursor auf der Textbox steht ansonsten false

```groovy  
//Beispiele mit der Textbox txtNachname
def mylastname = 'Schmidt'
txtNachname.set(mylastname)

def customerName = txtNachname.get()
console.log(customerName) // 'Schmidt'  

txtNachname.clear()
console.log(txtNachname.get()) // ''

assert txtNachname.isDisabled(), 'Textbox ist nicht deaktiviert.'
assert txtNachname.isFocused(), 'Textbox Nachname ist nicht im fokus'  
```  

## Table  
- Elemente
	- ColumnList - Liefert eine Liste mit Spaltennamen `['ID','Vorname','Nachname','Geburtsdatum']`  

- Methoden  
	- **getRowWithCellText(columnname:string, text:string):number** - Liefert Zeilennummer mit dem `text` in der vorgegebenen Spalte `columnname`
	- **getColumnIndex(colname:string):number** - Liefert spaltennummer
	- **getCellData(rownr:number, colnr:number):string** - Liefert den Wert aus der Celle mit vorgegebener Zeilen und Spaltennummer  
	- **columnCount()** -Liefert Anzahl der Spalten.
	- **rowCount()** - Liefert Anzahl der Zeilen exkl. Zeile mit Spaltennamen  
	- **childItem(rownr:number, columnname:string, type:string, idx:number)** - Liefert den Control vom Type `type` und Index `idx` in der Zeile `rownr` und Spalte `columnname`

```groovy  
//Beispiel mit der Zeile ['ID','Vorname';'Nachname','Vorgang']
// Spalte Vorgang mit Buttons Details/Delete
def myrownr = tblCustomer.getRowWithCellText("Nachname", "Schmidt") //3 dritte Zeile
def mycolnr = tblCustomer.getColumnIndex("Nachname") //2 dritte Spalte (Index beginnt mit 0)  
def customervorname = tblCustomer.getCellData(myrownr, 1) // 'Wolfgang' 1 ist index der Spalte Vorname
def spaltenanzahl = tblCustomer.columnCount() // 4 
def customercount = tblCustomer.rowCount() // 10  10 Kunden/Zeilen werden angezeigt

def detailsbutton = tblCustomer.childItem(3, "Vorgang", "button", 0)
detailsbutton.click()
//oder 
(tblCustomer.childItem(3, "Vorgang", "button", 1)).click() // click auf Button Delete
```

# Pages  

## Startseite

- Elemente
	- *Menu: MainMenu* 
	- *Titel: label*
	- *Logout: link*
	- *ErrorMessage: label* - Beim einträten eines fehlers wird die Nachricht unter dem Titel angezeigt und wird wieder entfernt wenn der Fehler behoben ist
	- *InfoMessage: label* - wird unterhalb von Titel angezeigt.
	- *Suche: SucheForm* - Ein Formular mit Feldern als Such Parameter
	- *Ergebnis: table* 
- Methoden

## Detailansicht  

- Elemente  
	- *_form: webelement* - Internes(private) element. Sollte im Script nicht verwendet werden.
	- *Titel: label*
	- *_tableiste: webelement* - Internes(private) element. Verwendung in der function SelectTag(tabname)
	- *ErrorMessage: label* - Beim einträten eines fehlers wird die Nachricht unter dem Titel angezeigt und wird wieder entfernt wenn der Fehler behoben ist
	- *InfoMessage: label* - wird unterhalb von Titel angezeigt.
	- *Bestellungen: table*
	- *Aendern: button* 
	- *Zurueck: button* 
	- *Popup: webelement*
- Methoden
	- **SelectTab(tabname :string) :void** - Selektiert den vorgegebenen Tab  

```groovy 
//Beispiele
assert Title=='Kunden Detailansicht: $kundenname'
SelectTab('Rechnungsdaten')
def anzahlderbestellungen = Bestellungen.rowCount()
Zurueck.click()
```  


# Module
## KiwiPopup  
KiwiPopup ist ein Dialog Popup das Context bezogenen Inhalt (Titel, Text/Beschreibung  und Buttons) anzeigt. 

- Elemente
	- *Titel :label*
	- *Text :label*
	- *Abschliessen :button* - Einzelne Buttons werden je nach Context angezeigt.
	- *Ja :button*
	- *Nein :button*
	- *Zurueckkehren :button*

## MainMenu  
Das MainMenu wird auf jeder Seite auf der linken Seite angezeigt.

- Elemente
	- *_mnuKunden :link*
	- *_mnuBestellungen :link*
	- *_mnuBestellungenOffen :link*
	- *_mnuBestellungenGeschlossen :link*
	- *_mnuBestellungenStorniert :link*
	- *...*  

- Methoden
	- *Open(menuname :sting) :void* - Auf das vorgegebene Eintrag in dem Menu wird geclickt. Menulevel werden durch ein Punkt gekennzeichnet. siehe Beispiel.  
	- *expandMenuBestellungen(): void*
	- *...* 

```groovy  
//Beispiel: 'Menu' ist die Element Bezeichnung aus dem Page Object.
Menu.Open('Bestellungen.BestellungenOffen')
```

# Utils  

## getBrowser  
Mit der Methode `Utils.GetBrowser('firefox'|'chrome'|'ie')`   
wird eine neue Instance des vogegebenen Browsers geöffnet  
und zur BaseUrl navigiert. 
Mit Attribute @Shared wird die verfügbarkeit von Variable `b`  
in der gesammten `Spezification` also in allen Schritten freigeschaltet.   

```groovy  
@Shared b
b=Utils.getBrowser('firefox') 
```  

## Manual  
Mit der Methode `Utils.Abmelden(b)` wird Button Logout geclickt und die Seite geschlossen.  

# Commands  

## given  
Vorbedienungen in einem Spock Feature Step  

## when  
Actionen in einem Spock Feature Step  

## then
Ergebnis der Actionen in einem Spock Feature Step  



