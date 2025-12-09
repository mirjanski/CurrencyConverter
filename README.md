<Currency Converter App>

A web app to convert currencies in real-time with 170+ currencies and country flags.

<Features>

Convert currencies instantly

Swap currencies with a click

Shows country flags

Responsive design

Smooth animations

<Technologies>

HTML, CSS, JavaScript

ExchangeRate-API (real-time rates)

FlagsAPI (country flags)

Font Awesome (icons)

<Installation>

Clone the repo:

git clone https://github.com/mirjanski/CurrencyConverter.git


Open index.html in a browser
(Optional: use Live Server for development)

<Usage>

Enter amount

Select From and To currencies

Click Convert

Click swap icon to exchange currencies

See the result below the form

<API Example>
fetch(`https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD`)
  .then(res => res.json())
  .then(data => {
    const total = (amount * data.conversion_rates[to]).toFixed(2);
  });

<Folder Structure>
index.html
style.css
script.js
country-list.js
images/ (bg.jpg, icon.png)
