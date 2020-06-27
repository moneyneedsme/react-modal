import React from 'react'
export default  class HelloWorld extends React.Component {
  toHome(){
    console.log(this.props)
    this.props.history.push('/')
  }
  render(){
    return (
      <React.Fragment>
        <div>HelloWorld</div>
        <button onClick={()=>this.toHome()}>去首页</button>
      </React.Fragment>
    )
  }
}