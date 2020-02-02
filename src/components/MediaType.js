//  media queries for styled-components

const sizes = {
    desktop: 2560,
    tabletLarge: 1200,
    tablet: 768,
    phone: 576,
}

const breakPoints = Object.keys(sizes).reduce((acc, cur) => {
    acc[cur] = `(max-width: ${sizes[cur] / 16}em)`
    return acc
}, {})

export { breakPoints }

