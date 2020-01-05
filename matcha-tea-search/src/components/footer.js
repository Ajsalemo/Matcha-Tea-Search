// ----------------------------------- Imports -------------------------------------- //
// ---------------------------------------------------------------------------------- //

import React from "react"
import { AppBar, Toolbar } from "@material-ui/core"
import styled from "styled-components"

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

const StyledFooterToolbar = styled(Toolbar)`
    background-color: #141421cf;
    height: 20em;
    border-top: 50px solid #323235d1;
`
const StyledSubFooter = styled(Toolbar)`
    background-color: #008000b3;
    display: flex;
    justify-content: center;
`

// ---------------------------------------------------------------------------------- //

const Footer = () => (
    <AppBar position="static" style={{ marginTop: "2em" }}>
        <StyledFooterToolbar>

        </StyledFooterToolbar>
        <StyledSubFooter>
            &copy; Copyright Anthony Salemo | 2020
        </StyledSubFooter>
    </AppBar>
)

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //

export default Footer

// ---------------------------------------------------------------------------------- //
// ---------------------------------------------------------------------------------- //
