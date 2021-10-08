import React from "react";
import "./style.css";
import Profile from "./components/profile";
import im from "./imageInSrc.png";


export default class App extends React.Component {
  constructor(props) {
    super(props);
  this.state = {
    Person: {
      fullName: "Adnen Rebhi",
      bio: "test Bio",
      imgSrc: im,
      profession: "Soft"
    },
    show: false,
    timer: 0
  };
}
  renderPerson=() =>{
    this.setState({
      ...this.state,
      show: !this.state.show
    });
     
  };
 
  componentDidMount() {
    setInterval(() => this.setState({ timer: this.state.timer + 1 }), 1000);
  }

  render() {
    return( <div className="container">
    <h1>{this.state.timer}</h1>
   
    <button className="button" style={{verticalAlign: 'middle'}}
      onClick={this.renderPerson}
    > 
      <span>
      {this.state.show ? "hide" : "show"}
      </span>
    </button>
   
    {this.state.show && (
          <>
           <Profile>
              <br></br>
                      <img src={this.state.Person.imgSrc} alt="Img"></img>
                      <h1>{this.state.Person.fullName}</h1>
                      <h1>{this.state.Person.bio}</h1>
                      <h1>{this.state.Person.profession}</h1>
              <br></br>
            </Profile>
          </>
        )}
   
  </div>
    );
  }


}
