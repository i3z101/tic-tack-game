import React, { Fragment, useState } from "react"
import Game from "../components/game"
import Header from "../components/header"
import Nav from "../components/nav"
import {useRouter} from 'next/router';
import Head from 'next/head'

export default function Home() {
  const router = useRouter();

  const guid = () => {
    const s4 = () => {
        return Math.floor((1 + Math.random()) * 0x100)
            .toString(18)
            .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4()
}

  const toGameDash = () => {
      const gameId = guid()
      router.push(`/game/${gameId}`);
  }

  return (
    <Fragment>
      <Head>
          <title>Home</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Tic Tac Home Page"  />
        </Head>
      <Nav/>
      <Header/>
      <button className="start_game_btn" onClick={toGameDash}>START THE GAME</button>
      </Fragment>
  )
}
