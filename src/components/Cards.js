import './Cards.css';
import CardItem from './CardItem';
import mentors from './mentorData';
import React, {Component} from 'react'
import axios from 'axios'



class Cards extends Component{

  constructor(props) {
      super(props)
  
      this.state = {
           posts: []
      }
  }
  
  componentDidMount() {
      axios.get('https://api.hackillinois.org/upload/blobstore/mentors/')
      .then(response =>{
          this.setState({
              posts: response.data.data
          })
      })
  }

  render() {
      const {posts} = this.state
  return (

    <div className='cards'>
    <h1>Check out our mentors!</h1>
    <div className='cards__container'>
      <div className='cards__wrapper'>
      <ul className='cards__items'>
          {posts.map((post) =>
          <CardItem
            src={post.profile}
            text={post.mentors}
            path={'/mentors'}
          /> 
          )}
          </ul>
      </div>
    </div>
    </div>
    )
}
}

export default Cards
