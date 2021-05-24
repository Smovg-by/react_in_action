//-------------------------------------------------------------------------------------------------ACTION 3.2
// setState

// import React, { Component } from 'react'
// import { render } from 'react-dom'

// const node = document.getElementById('root')

// class Secret extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       name: 'top secret'
//     }
//     this.onButtonClick = this.onButtonClick.bind(this)
//   }
//   onButtonClick () {
//     this.setState(() => ({
//       name: 'Mark'
//     }))
//   }

//   render () {
//     return (
//       <div>
//         <h1>My name is {this.state.name}</h1>
//         <button onClick={this.onButtonClick}>Reveal the secret!</button>
//         <NoSecret/>
//       </div>
//     )
//   }
// }

// class NoSecret extends React.Component{
//   constructor(props) {
//     super(props)
//   this.state = {
//     id: Date.now(),
//     title: 'ID is not altered'
//   }
//   this.onButtonClick = this.onButtonClick.bind(this)
//   }
//   onButtonClick() {
//     this.setState(()=>({id: Date.now(), title: 'id is altered'}))
//   }
//   render() {
//     return (
//       <div>
//         <div>{this.state.id}</div>
//         <div>{this.state.title}</div>
//         <button onClick={this.onButtonClick}>Press me</button>
//       </div>
//     )
//   }
// }

// render(<Secret />, node)

//-------------------------------------------------------------------------------------------------ACTION 3.3
// Мелкое слияние с setState. State Перезаписывается, name При клике не оторажается

// import React, { Component } from 'react'
// import { render } from 'react-dom'

// const node = document.getElementById('root')

// class ShallowMerge extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       user: {
//         name: 'MARK',
//         colors: {
//           favourite: 'NO'
//         }
//       }
//     }
//     this.onButtonClick = this.onButtonClick.bind(this)
//   }
//   onButtonClick = () => {
//     this.setState({
//       user: {
//         colors: {
//           favourite: 'BLUE'
//         }
//       }
//     })
//   }
//   render () {
//     return (
//       <div>
//         <h1>
//           My favourite color is {this.state.user.colors.favourite} and my name
//           is {this.state.user.name}{' '}
//         </h1>
//         <button onClick={this.onButtonClick}>Show the color</button>
//       </div>
//     )
//   }
// }

// render(<ShallowMerge />, node)

//-------------------------------------------------------------------------------------------------ACTION 3.4
// Использование PropTypes и defaultProps программе-счетчике

// import React from 'react'
// import { render } from 'react-dom'
// import PropTypes from 'prop-types'

// const node = document.getElementById('root')

// class Counter extends React.Component {
//   static propTypes = {
//     incrementBy: PropTypes.number,
//     onIncrement: PropTypes.func.isRequired
//   }
//   static defaultProps = {
//     incrementBy: 1
//   }
//   constructor (props) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//     this.onButtonClick = this.onButtonClick.bind(this)
//   }
//   onButtonClick () {
//     this.setState((prevState, props) => {
//       return {
//         count: prevState.count + props.incrementBy
//       }
//     })
//   }
//   render () {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.onButtonClick}>++</button>
//       </div>
//     )
//   }
// }

// render(<Counter incrementBy={1} />, node)

//-------------------------------------------------------------------------------------------------ACTION 3.5
// Функицональная компонента

// import React from 'react'
// import { render } from 'react-dom'
// import PropTypes from 'prop-types'

// const node = document.getElementById('root')
// //Функциональная компонента
// function Greeting (props) {
//   return <div>Hello {props.for}</div>
// }
// // Задаем типы PropTypes
// Greeting.propTypes = {
//   for: PropTypes.string.isRequired
// }
// // Если props не будут переданы, сработает defaultProps
// Greeting.defaultProps = {
//   for: 'friend'
// }

// render(<Greeting for='Mark' />, node)

//-------------------------------------------------------------------------------------------------ACTION 3.6
// Передача свойств(props) от родителя к потомку в функциональных компонентах

import React from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

const UserProfile = props => {
  return (
    <img
      src={
        'https://i.gifer.com/fetch/w300-preview/eb/eb1fc0d6d1167c9ebdec507647cdb1a4.gif'
      }
      alt={props.username}
    />
  )
}

UserProfile.propTypes = {
  pagename: PropTypes.string
}

UserProfile.defaultProps = {
  pagename: 'erondu'
}

const UserProfileLink = props => {
  return (
    <a
      href={
        'https://i.gifer.com/fetch/w300-preview/eb/eb1fc0d6d1167c9ebdec507647cdb1a4.gif'
      }
    >
      {props.username}
    </a>
  )
}

const UserCard = props => {
  return (
    <div>
      <UserProfile username={props.username} />
      <UserProfileLink username={props.username} />
    </div>
  )
}

render(<UserCard username='erondu' />, document.getElementById('root'))
