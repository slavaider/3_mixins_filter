export default {
    bind(el, bindings) {
        console.log('bind');

        const modifier = bindings.modifiers['font'];
        const arg = bindings.arg;
        if (modifier)
            el.style.fontSize = "40px";
        if (bindings.modifiers['delay']) {
            setTimeout(() => {
                el.style[arg] = bindings.value
            }, 2000);
        } else el.style[arg] = bindings.value
    },
    inserted() {
        console.log('inserted')
    },
    update() {
        console.log('update')
    },
    componentUpdated() {
        console.log('componentUpdated')
    },
    unbind() {
        console.log('unbind')
    }
}
