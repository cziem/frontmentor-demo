import React from "react"
import "./noData.scss"

const NoData = ({ message }: { message: string }) => {
  return (
    <div className="noData__main">
      <p>{message}</p>
    </div>
  )
}

export default NoData
