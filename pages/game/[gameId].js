import React, { Fragment } from "react";
import Game from "../../components/game";
import Nav from "../../components/nav";



const GameDash = (props) => {
    return <Fragment>
        <Nav  />
        <Game gameId={props.gameId} visitor={props.visitor} />
    </Fragment>
}

export async function getServerSideProps (context) {
    const {params, query } = context;
    return {
        props: {
            gameId: params.gameId,
            visitor:query.visitor || null
        }
    }
}

export default GameDash;