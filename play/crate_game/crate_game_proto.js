const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Player {
    constructor() {
        
        this.velocity = {
            x: 0,
            y: 0
        }

        this.speed = 8

        this.rotation = 0

        const image = new Image()
        image.src = './img/space_ship.png'
        
        image.onload = () => {
            const scale = 0.08
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x: canvas.width / 2 - this.width / 2,
                y: canvas.height - this.height - 20
            }
        }
    }

    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)

        c.save()
        c.translate(player.position.x + player.width /2, player.position.y + player.height / 2)
        c.rotate(this.rotation)
        c.translate(-player.position.x - player.width /2, -player.position.y - player.height / 2)

        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
            )
        
        c.restore()
    }

    update() {
        if (this.image) {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        }
    }
}

class Projectail {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity

        this.radius = 3
    }

    draw() {
        c.beginPath()
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = 'red'
        c.fill()
        c.closePath()
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

class Invader {
    constructor({position}) {
        
        this.velocity = {
            x: 0,
            y: 0
        }

        this.speed = 8


        const image = new Image()
        image.src = './img/space_invader.png'
        
        image.onload = () => {
            const scale = 0.06
            this.image = image
            this.width = image.width * scale
            this.height = image.height * scale
            this.position = {
                x: position.x,
                y: position.y
            }
        }
    }



    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)

        c.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
            )
        }

    update({velocity}) {
        if (this.image) {
        this.draw()
        this.position.x += velocity.x
        this.position.y += velocity.y
        }
    }
}

class Grid {
    constructor() {
        this.position = {
            x: 0,
            y: 0
        }

        this.velocity = {
            x: 3,
            y: 0
        }

        this.invaders = []

        const columns = Math.random() * (10 - 5) + 5
        const rows = Math.random() * (6 - 2) + 2

        this.width = columns * 60 

        for (let x = 0; x < columns; x++) {
            for (let y = 0; y < rows; y++) {
            this.invaders.push(new Invader({position: {
                x: x * 60,
                y: y * 60
            }
        })
        )
        }
        }
        console.log(this.invaders)
    }

        update() {
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y

            this.velocity.y = 0

        if (this.position.x + this.width >= canvas.width || this.position.x <= 0) {
            this.velocity.x = -this.velocity.x
            this.velocity.y = 60
        }



    }
}

const player = new Player();
const projectails = [];
const grids = [new Grid()]

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
    up: {
        pressed: false
    },
    down: {
        pressed: false
    },
    space: {
        pressed: false
    },
}

function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height);
    player.update()
    projectails.forEach((projectail, index) => {
        if (projectail.position.y + projectail.radius <= 0) {
            setTimeout(() => {
                projectails.splice(index, 1)
            }, 0)
        }
        else {
            projectail.update() 
        }
    })

    grids.forEach((grid) => {
        grid.update()
        grid.invaders.forEach((invader) => {
            invader.update({velocity: grid.velocity})
        })
    })

    if (keys.right.pressed && player.position.x + player.width <= canvas.width) {
        player.velocity.x = +player.speed
        player.rotation = 0.15
        player.velocity.y = 0
    } else if (keys.left.pressed && player.position.x >= 0) {
        player.velocity.x = -player.speed
        player.rotation = -0.15
        player.velocity.y = 0
    } else if (keys.up.pressed && player.position.y >= 0) {
        player.velocity.y = -player.speed
        player.velocity.x = 0
        player.rotation = 0
    } else if (keys.down.pressed && player.position.y <= canvas.height - player.height) {
        player.velocity.y = +player.speed
        player.velocity.x = 0
        player.rotation = 0
    } else {
        player.velocity.x = 0
        player.velocity.y = 0
        player.rotation = 0
    }

}

animate();

window.addEventListener('keydown', ({key}) => {
    switch (key) {
        case 'ArrowRight':
            keys.right.pressed = true
            // console.log('right')
            // console.log(player.velocity)
        break
        case 'ArrowLeft':
            // console.log('left')
            keys.left.pressed = true
        break
        case 'ArrowUp':
            // console.log('up')
            keys.up.pressed = true
        break
        case 'ArrowDown':
            // console.log('down')
            keys.down.pressed = true
        break
        case ' ':
            console.log('space')
            // keys.space.pressed = true
            projectails.push(new Projectail({
                position: {
                    x: player.position.x + player.width / 2,
                    y: player.position.y
                },
                velocity: {
                    x: 0, 
                    y: -10
                }
            }))

            // console.log(projectails)
        break
    }
})

window.addEventListener('keyup', ({key}) => {
    switch (key) {
        case 'ArrowRight':
            keys.right.pressed = false
            // console.log('right')
            // console.log(player.velocity)
        break
        case 'ArrowLeft':
            // console.log('left')
            keys.left.pressed = false
        break
        case 'ArrowUp':
            // console.log('up')
            keys.up.pressed = false
        break
        case 'ArrowDown':
            // console.log('down')
            keys.down.pressed = false
        break
        case ' ':
            // console.log('space')
            keys.space.pressed = false
        break
    }
})