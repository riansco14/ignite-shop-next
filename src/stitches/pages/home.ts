import { styled } from "..";

export const HomeContainer = styled('main', {
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
    minHeight: 656,
    marginLeft: 'auto'
})

export const Product = styled('div', {
    background: `linear-gradient(180deg, #1EA483 0%, #7465D4 100%)`,
    borderRadius: 8,
    cursor: "pointer",
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    img: {
        objectFit: "cover"
    },
    footer: {
        position: "absolute",
        display: "flex",
        bottom: '0.25rem',
        right: '0.25rem',
        left: '0.25rem',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '2rem',
        borderRadius: 6,
        backgroundColor: 'rgba(32,32,36,0.9)',
        strong: {
            color: '#E1E1E6',
            fontSize: 20,
            fontWeight: 'bold'
        },
        span: {
            color: '#00B37E',
            fontSize: 24,
            fontWeight: 'bold',
        },

    }
})
