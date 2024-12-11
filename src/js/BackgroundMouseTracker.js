export default class BackgroundMouseTracker {
    constructor() {
        this.mousePosition = {
            x: 0,
            y: 0
        };

        document.addEventListener('mousemove', (event) => {
            this.mousePosition = {
                x: event.clientX,
                y: event.clientY
            };
        });

        this.loop();
    }

    loop() {
        const gradientElement = document.querySelector('#gradient');
        
        if (gradientElement) {
            gradientElement.style.transform = `translate(${this.mousePosition.x}px, ${this.mousePosition.y}px)`;
        }

        window.requestAnimationFrame(() => this.loop());
    }
}
