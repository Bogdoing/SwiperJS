class Slider{
    img_src = [
        "img/bg.jpg",
        "img/mini_burger.jpg",
        "img/mini_east.jpg",
    ];
    arrow_scr = [
        "img/arrows/red-arrow64.png",
        "img/arrows/red-arrow64.png"
    ]

    text_p = [
        "Блюда со всего мира",
        "Фаст-фуд",
        "Восточная еда"
    ];

    html_scr = [
        "#",
        "#",
        "#"
    ];

    constructor(input_count) {
        for (let i = 0; i < input_count; i++) {
            $(".slider").append(`
                <input id="r${i}" value="${i}" type="radio" name="slider" checked="checked">
                <div class="imgBx" id="banner">
                    <img src="${this.img_src[i]}">
                    <div class="content">
                        <h2>Bogdanoff<span>.</span></h2>
                        <p>${this.text_p[i]}</p>
                        <a href="${this.html_scr[i]}">Узнать больше</a>
                    </div>
                </div>
            `);
        }
        $(".slider").append(`
            <div class="btnslider">
            <div class="left-rd">
                <span>
                    left-rd
                </span>
                <img src="${this.arrow_scr[0]}" alt="Load arrow">
            </div>
            <div class="right-rd">
                <span>
                    right-rd
                </span>
                <img src="${this.arrow_scr[0]}" alt="Load arrow">
            </div>
            </div>
        `);
    }
}



let slider = new Slider(3);



let len = null;
$(".slider").each(function () {
    let rr = $(this).find(':input')
    len = rr.length
});
const mass_radio = () => {
    let mass = [];
    for (let i = 0; i < len; i++)
        mass[i] = '#r' + i
    return mass
}
const mass = mass_radio()
const input_checked = () => {
    let value = $('input[name="slider"]:checked').val();
    //alert('btn '+value);
    return value
}

function to_left() {
    let state_radio = input_checked()
    console.log(state_radio)
    if ($('#r' + state_radio).prop('checked', true)) {
        let new_state
        if (state_radio == 0) {
            state_radio = len - 1
            new_state = '#r' + state_radio
        }
        else {
            state_radio--
            new_state = '#r' + state_radio
        }
        console.log(new_state)
        $(new_state).prop('checked', true);
    }
    else {
        console.log('false')
    }
}
function to_right() {
    let state_radio = input_checked()
    if ($('#r' + state_radio).prop('checked', true)) {
        let new_state
        if (state_radio == len - 1) {
            state_radio = 0
            new_state = '#r' + state_radio
        }
        else {
            state_radio++
            new_state = '#r' + state_radio
        }
        console.log(new_state)
        $(new_state).prop('checked', true);
    }
    else {
        console.log('false')
    }
}

$(".btnslider .left-rd").click(function () {
    to_left()
})

$(".btnslider .right-rd").click(function () {
    to_right()
})

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
    if (touchendX > touchstartX) {
        to_left()
    } 
    if (touchendX < touchstartX) {
        to_right()
    }
}

document.addEventListener('touchstart', e => {
    if (window.scrollY < 100) {
        touchstartX = e.changedTouches[0].screenX
    }
})

document.addEventListener('touchend', e => {
    if (window.scrollY < 100) {
        touchendX = e.changedTouches[0].screenX
        checkDirection()
    }  
})


