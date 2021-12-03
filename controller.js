// this is a simpple stupid controller for basic ui
// this site it isn't a hi-quality work so, take it easy! :)



window.onload = () =>{

    //
    // ctrl => overlays
    //

    document.querySelectorAll('.overlay')[0]
        .onclick = ev_overlay_controller =>{
            let opens = document.querySelectorAll('*[open]')
            for (let o of opens) o.removeAttribute('open') 
            ev_overlay_controller = null
        }

    //
    // ctrl => fullscreen pop dfn
    //

    let dfnboxes = document.querySelectorAll('.pop-definition')

    for(let box of dfnboxes) {

        box.onclick = ev_dfn_controller => {

            if (!box.open) {

                for(let b of dfnboxes) { b.removeAttribute('open') }
                box.setAttribute('open','')
                document.querySelectorAll('.overlay')[0].setAttribute('open','')

            }
            
            else {

                box.removeAttribute('open')
                document.querySelectorAll('.overlay')[0].removeAttribute('open')

            }

            ev_dfn_controller = null

        }

    }
        

}
