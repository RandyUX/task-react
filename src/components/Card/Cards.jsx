import React, {Component} from "react";
import Card from '../Card/index'

import img from "../../assets/gambar3.jpeg"
import img2 from "../../assets/gambar4.jpeg"
import img3 from "../../assets/gambar5.jpeg"

class Cards extends Component {
    render(){
        return(
            <div className="container-fluid d-flex justify-content-center my-5">
                <div className="row">
                    <div className="col-md-4">
                        <Card imgsrc={img} title='Console'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img2} title='Playground'/>
                    </div>
                    <div className="col-md-4">
                        <Card imgsrc={img3} title='Adventure'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;