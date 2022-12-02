const main = document.getElementById("main");

function blockTitle(title) {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerText = title

    div.appendChild(h1);

    return div;
}

function blockSubTitle(text) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.innerText = text

    div.appendChild(p);

    return div;
}

function blockImage() {
    const div = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src', 'https://picsum.photos/id/1/500/250');
    img.setAttribute('alt', 'Image random');


    div.appendChild(img);

    return div;
}

function cards() {
    const div = document.createElement('div');

    const title = blockTitle('Meu grande title minha gente boa!');
    const subTitle = blockSubTitle("bom esse e meu sub title o que acham");
    const image = blockImage();

    div.appendChild(title);
    div.appendChild(subTitle);
    div.appendChild(image);

    return div;
}

function render(max) {

    for (let i = 0; i < max; i++) {
        const card = cards();

        main.appendChild(card)
    }
}

(function() {

    render(5);
})()

