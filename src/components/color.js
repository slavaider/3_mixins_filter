/* eslint-disable no-console */
export default {
    bind(el, bindings) {
        console.log(bindings);
        const modifier = bindings.modifiers['font'];
        const arg = bindings.arg;
        if (modifier)
            el.style.fontSize = "30px";
        if (bindings.modifiers['delay']) {
            setTimeout(() => {
                el.style[arg] = bindings.value
            }, 2000);
        } else el.style[arg] = bindings.value
    }
}
