$(document).ready(function() { //espera todo o documento ser carregado

    //progress bar
    let containerA = document.getElementById("circleA");
     
    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64D4F9',
        strokeWidth: 8, //largura da barra
        duration: 1800,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) { //chamada a cada passo da animação

            circle.path.setAttribute('stroke', state.color); //atualiza a cor da barra de acordo com o estado atual da animação

            let value = Math.round(circle.value() * 1900);

            circle.setText(value);

        }
    });

    let containerB = document.getElementById("circleB");
     
    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64D4F9',
        strokeWidth: 8, //largura da barra
        duration: 2000,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) { //chamada a cada passo da animação

            circle.path.setAttribute('stroke', state.color); //atualiza a cor da barra de acordo com o estado atual da animação

            let value = Math.round(circle.value() * 3200);

            circle.setText(value);

        }
    });

    let containerC = document.getElementById("circleC");
     
    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64D4F9',
        strokeWidth: 8, //largura da barra
        duration: 2200,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) { //chamada a cada passo da animação

            circle.path.setAttribute('stroke', state.color); //atualiza a cor da barra de acordo com o estado atual da animação

            let value = Math.round(circle.value() * 57);

            circle.setText(value);

        }
    });

    let containerD = document.getElementById("circleD");
     
    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64D4F9',
        strokeWidth: 8, //largura da barra
        duration: 2400,
        from: { color: '#AAA' },
        to: { color: '#64DAF9' },

        step: function(state, circle) { //chamada a cada passo da animação

            circle.path.setAttribute('stroke', state.color); //atualiza a cor da barra de acordo com o estado atual da animação

            let value = Math.round(circle.value() * 895);

            circle.setText(value);

        }
    });

    //iniciando o loader quando o usúario chegar no elemento

    let dataAreaOffSet = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();

        if(scroll > (dataAreaOffSet.top - 500) && stop == 0) {

            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        };
    });

    //parallax
    setTimeout(function() {

        $('#data-area').parallax({imageSrc: 'img/parallax.jpeg'});

    }, 250);
});

