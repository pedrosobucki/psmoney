import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
        --backgound: #F0F2F5;
        --title: #363F5F;
        --text: #969CB3;
        --blue: #5429CC;
        --light-blue: #6933FF;
        --red: #E62E4D;
        --green: #33CC95;
        --main-shape: #FFFFFF;
    }

    *{
        margin: 0;
        border: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--backgound);
        -webkit-font-smoothing: antialiased;
    }

    body, input, text-area, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    html{

        @media (max-width: 1080px){
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px){
            font-size: 87.5%; // 14px
        }

    }

    button{
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }


`