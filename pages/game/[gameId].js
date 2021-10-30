import React, { Fragment } from "react";
import Game from "../../components/game";
import Nav from "../../components/nav";
import Head from 'next/head'


const GameDash = (props) => {
    return <Fragment>
        <Head >
            <title>{props.gameId}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content="Come I'm challenging you"  />
        </Head>
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