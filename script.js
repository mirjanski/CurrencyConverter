    const dropList = document.querySelectorAll(".drop-list select");
    fromCurrency = document.querySelector(".from select");
    toCurrency = document.querySelector(".to select");
    getButton = document.querySelector("form button");
    const apikey="https://v6.exchangerate-api.com/v6/128b4900f036d9acf6988081/latest/";

    for (let i = 0; i < dropList.length; i++) {
        for(currency_code in country_code){
            let selected;
            if(i == 0){
                selected = currency_code == "USD" ? "selected" : "";
            }else if(i == 1){
                selected = currency_code == "KGS" ? "selected" : "";
            }
            let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
            dropList[i].insertAdjacentHTML("beforeend", optionTag);
        }
        dropList[i].addEventListener("change", e =>{
            loadFlag(e.target);
        });
    }

    function loadFlag(element){
        for(let code in country_code){
            if(code == element.value){
                let imgTag = element.parentElement.querySelector("img");
                imgTag.src = `https://flagsapi.com/${country_code[code]}/flat/64.png`;
            }
        }
    }

    window.addEventListener("onload", () =>{
        getExchangeRate();
    });

    getButton.addEventListener("click", e =>{
        e.preventDefault();
        getExchangeRate();
    });

    const exchangeIcon = document.querySelector(".drop-list .icon");
    exchangeIcon.addEventListener("click", () =>{
        let tempCode = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = tempCode;
        loadFlag(fromCurrency);
        loadFlag(toCurrency);
        getExchangeRate();
    });

    function getExchangeRate(){
        const amount = document.querySelector(".amount input"),
        exchangeRateTxt = document.querySelector(".exchange-rate span");
        let amountVal = amount.value;
        if(amountVal == "" || amountVal == "0"){
            amount.value = "1";
            amountVal = 1;
        }
        exchangeRateTxt.innerText = "Getting exchange rate...";
        let url = `${apikey}${fromCurrency.value}`;
        fetch(url).then(response => response.json()).then(result => {
            let exchangeRate = result.conversion_rates[toCurrency.value];
            let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
            exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
        }).catch(() => {
            exchangeRateTxt.innerText = "Something went wrong";
        });
    }


    window.addEventListener("scroll", () => {
        document.body.classList.toggle("scrolled", window.scrollY > 100);
    });




    // Smooth animation
    document.querySelector('header').style.transition = 'transform 0.5s ease';

    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
});

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
    });
});
