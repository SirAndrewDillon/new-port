if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                    
    const config = {
        view: document.querySelector('.app'),
        preload: true,
        native: false,
        ease: 0.095,
        noScrollBar: true,
        virtualScroll: {
            limitInertia: false,
            mouseMultiplier: 1,
            touchMultiplier: 2.5,
            firefoxMultiplier: 30,
            preventTouch: true,
            keyStep:200,
        },
    };

    const r = window.rolly(config);
    r.init();

}