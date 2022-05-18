// this is a simpple stupid controller for basic ui
// this site it isn't a hi-quality work so, take it easy! :)



window.onload = () => {

    //
    // ctrl => disbled
    //    


    let disabled = document.querySelectorAll('*:disabled, [aria-disabled=true], [data-disabled=true]')

    for (let element of disabled) {
        element.onclick = ev_disable_controller => {
            ev_disable_controller.preventDefault()
            return false;
        }
    }


    //
    // ctrl => overlays
    //

    document.querySelectorAll('.overlay')[0]
        .onclick = ev_overlay_controller => {
            let opens = document.querySelectorAll('*[open]')
            for (let o of opens)
                if (!o.classList.contains('content-cut')) o.removeAttribute('open')
            ev_overlay_controller = null
        }

    //
    // ctrl => fullscreen pop dfn
    //

    let dfnboxes = document.querySelectorAll('.pop-definition')

    for (let box of dfnboxes) {

        box.onclick = ev_dfn_controller => {

            if (!box.hasAttribute('open')) {

                for (let b of dfnboxes) { b.removeAttribute('open') }
                box.setAttribute('open', '')
                document.querySelectorAll('.overlay')[0].setAttribute('open', '')

            } else {

                box.removeAttribute('open')
                document.querySelectorAll('.overlay')[0].removeAttribute('open')

            }

            ev_dfn_controller = null

        }

    }

    //
    // ctrl => more of dfn
    //

    var btnmore = document.querySelectorAll('.more>button')[0];

    btnmore.onclick = ev_more_controller => {

        let contentbox = document.querySelectorAll('.content-cut')[0]

        if (!contentbox.hasAttribute('open')) {

            contentbox.setAttribute('open', '')
            btnmore.innerHTML = 'Riduci'

        } else {

            contentbox.removeAttribute('open')
            btnmore.innerHTML = 'Espandi'

        }

        ev_more_controller = null

    }
}