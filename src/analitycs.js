function createAnalitycs() {
    let counter = 0;
    let listener = () => {
        counter++
    }
    let clicker = () => {
        console.log("clicker")
    }
    let isDestroyed = false;
    document.addEventListener("click", listener);
    document.addEventListener("click", clicker);

    return {
        destroy(){
            document.removeEventListener("click", listener);
            isDestroyed = true;
        },
        getClicks(){
            return isDestroyed ? "Destroid" : counter;

        }
    }
}

window.analitics = createAnalitycs();
