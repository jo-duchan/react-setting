import styled, { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset};

html, body {
    width: 100%;
    height: 100%;
};

#root {
    position: relative;
    width: 100%;
    height: 100%;
};

button {
    all: unset;
};

`;

export { GlobalStyle };
