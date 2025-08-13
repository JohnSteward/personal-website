import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
function TestLink() {
  return (
    <div>
      <Link to={{ pathname:"//github.com/JohnSteward/HandTracker" }} target="_blank"> click to go to w3shcsdbfuoids</Link>
    </div>
  )
}

export default TestLink
