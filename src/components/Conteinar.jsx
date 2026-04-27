import React, { Children } from 'react'

const Conteinar = ({className,children}) => {
  return (
    <div className={`lg:w-[1281px] p-3 lg:p-0 m-auto ${className}`}>{children}</div>
  )
}

export default Conteinar