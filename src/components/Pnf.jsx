import React , {Component} from 'react'
import {Link} from 'react-router-dom'

export default class Pnf extends Component{
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="jumbotron text-center">
                            404 Page Not Found !!!

                            <br/>
                            <br/>
                          <Link to="/" className="btn btn-md btn-danger">Return to Home Page</Link>
                        </h2>
                    </div>
                </div>
            </div>
        )

    }
}