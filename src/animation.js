export const slideFromLeft = {
    initial: { x: 130, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1 }
}

export const slideFromRight = {
    initial: { x: -130, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1 }
}

export const slidUp = {
    initial :{ y : 40, scale: 1, opacity: 0 },
    whileInView:{y : 0, scale: 1, opacity: 1 },
    transition:{ duration: 0.5 },
}



export const scaleSmallToBig = {
    initial :{ scale: 0.3, opacity: 1 },
    whileInView:{ scale: 1, opacity: 1 },
    transition:{ duration: 0.5 },
    whileHover:{ scale: 1.02 }
}
export const drobDown = {
    initial:{ y: -80 ,opacity:0 },
      animate:{ y: 0,opacity:1 },
      transition:{ duration: 0.5 },
}


