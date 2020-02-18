import React from "react"
import containerStyles from "./container.module.scss"

export default ({ children }) => (
  <div className={[containerStyles.container, "bg-primary container"].join(' ')}>{children}</div>
//  <div className="bg-primary container">{children}</div>
)
