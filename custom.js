@@ -4,6 +4,12 @@ $(function () {
    config.texts.forEach(function (item) {
        let p = document.createElement("p");
        p.innerHTML = item;
        if (config.imgs[item]) {
            let img = document.createElement("img");
            img.src = config.imgs[item];
            img.setAttribute("class", 'text-img');
            p.appendChild(img);
        }
        dom.appendChild(p);
    });
    $("#texts-container").append(dom.innerHTML);
