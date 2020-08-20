export const Bubbles = {
    "color": {
      "value": "#000000"
    },
    "number": {
      "value": 50,
      "density": {
          "enable": false
      }
    },
    "size": {
        "value": 10,
        "random": true
    },
    "move": {
        "direction": "bottom",
        "out_mode": "out"
    },
    "line_linked": {
        "enable": false,
        "color": {
          "value": "#000000"
        }
    }
};

export const Particles = {
    "number": {
        "value": 50
    },
    "size": {
        "value": 3
    }
}

export const Interactivity = {
    "events": {
        "onclick": {
            "enable": true,
            "mode": "remove"
        }
    },
    "modes": {
        "remove": {
            "particles_nb": 10
        }
    }
}