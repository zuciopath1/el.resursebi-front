function Game() {
    // Variables
    let Mitochondria = $('.mitoqondria');
    let cytoplasm = $('.citoplazma');
    let Membrane = $('#Group_51155 > path.cls-1')[0];
    let Nucleus = $('.birtvi');

    //Change Css
    //Hide Arrows
    let Arrows = $('#Group_51212')
        .children()
        .toArray();
    Arrows.shift();
    $(Arrows).hide();

    //Events

    Mitochondria.toArray().forEach(element => {
        element.onclick = () => {
            $(Arrows[2]).show();
            $('.ujredi__drop')[3].innerText = 'მიტოქონდრია';
        };
    });

    Membrane.onclick = () => {
        $(Arrows[3]).show();
        $('.ujredi__drop')[2].innerText = 'მემბრანა';
    };

    cytoplasm.toArray().forEach(element => {
        element.onclick = () => {
            $(Arrows[1]).show();
            $('.ujredi__drop')[1].innerText = 'ციტოპლაზმა';
        };
    });

    Nucleus.toArray().forEach(element => {
        element.onclick = () => {
            $(Arrows[0]).show();
            $('.ujredi__drop')[0].innerText = 'ბირთვი';
        };
    });

}

var a = Game();
