import React from 'react'

const Button = ({className,btnText}) => {
  return (
    <button className={`bg-[#00DD00] py-5 px-6 text-sm cursor-pointer rounded-[40px] border border-[#00DD00] hover:bg-transparent hover:text-white hover:border-[#ffffff6f] ${className}`}>{btnText}</button>
  )
}

export default Button 