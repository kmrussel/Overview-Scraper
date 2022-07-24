# Overview-Scraper
Program receives a language, determines whether that langauge has a Wikipedia page or not, and then returns the first paragraph of the overview. 

<h4>How to Request Data</h4>
Set queue to 'get_language' and set the message to the language's url's subdirectory (ex. for wikipedia.com/Welsh_language let msg = 'Welsh_language'). If the language is not a part of the array in languages.js, the service will return a message stating that there is no Wikipedia page. 

<h4>How to Receive Data</h4>
Set queue to 'send_overview'. Once the program receives a language, it will automatically send back the overview. 
