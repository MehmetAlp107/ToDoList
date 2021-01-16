var items = ['Banka Borcunu Yatır.', 'Ödevleri Yap.', 'Hanıma yardımet.', 'Ders Çalış.'];

var list = document.getElementById('myList');
//itemleri listeye ekledik
items.forEach(function(item) {

    CreatItem(item);

});


//itemlerin üzerine çizgi çektik
list.addEventListener("click", function(item) {

    if (item.target.tagName == "LI") {
        item.target.classList.toggle("checked");
        ToogleDeleteButton();
    }
});


function ToogleDeleteButton() {
    var checkList = document.querySelectorAll(".checked");

    if (checkList.length > 0) {
        document.querySelector("#deletAll").classList.remove("d-none");
    } else

    {
        document.querySelector("#deletAll").classList.add("d-none");
    }
};


//silme işlemi yaptırdık
document.querySelector("#deletAll").onclick = function() {
    var elements = document.querySelectorAll(".checked");
    elements.forEach(function(item) {

        item.style.display = "none";

    });
};



//hepiciğinisil butonunu görünür yaptık
document.querySelector("#btnEkle").onclick = function() {

    var item = document.getElementById("txtItem").value;
    if (item === '') {
        alert("Boş Geçilemez.Lütfen veri girin.");
        return;
    }
    CreatItem(item);
};

function CreatItem(item) {
    var li = document.createElement('li');
    var t = document.createTextNode(item);

    li.className = "list-group-item";
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    li.appendChild(span);

    //itemlerdeki closları aktif ettik

    span.onclick = function() {
        var li = this.parentElement;
        li.style.display = "none";
        li.classList.remove("checked");

    }
};

//dark mode
function renkDegistirme() {
    // body elementini bulduk
    var bodyElementi = document.querySelector("body");
    var buttonElementi = document.getElementById("dark");
    // eğer body elementinin bg-dark class'ı varsa sil, yoksa bg-dark class'ı ekle
    bodyElementi.classList.toggle("bg-dark");
    // eğer body elementinin text-light class'ı varsa sil, yoksa text-light class'ı ekle
    bodyElementi.classList.toggle("text-light");
    // dayNightButton.classList.toggle("text-light");
    // eğer button elementin btn-dark class'ı varsa sil, yoksa btn-dark class'ı ekle
    buttonElementi.classList.toggle("btn-dark");
    // eğer elementin bg-dark class'ı yoksa, demekki sayfa şuanda light modda
    // eğer elementin bg-dark class'ı varsa, demekki sayfa şuanda dark modda.
    yapılacaklarElementi.classList.toggle("bg-dark");
    tamamlandıElementi.classList.toggle("bg-secondary");

    if (bodyElementi.classList.contains("bg-dark")) {
        buttonElementi.innerText = "Light Moda Geçiş Yap !";
    } else {
        buttonElementi.innerText = "Dark Moda Geçiş Yap !";
    }
}