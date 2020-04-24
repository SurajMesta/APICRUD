import React, {Component} from 'react'
import Axios from 'axios'
const URI="https://apideploytest.herokuapp.com"


export default class New extends Component{

    constructor(props){
        super(props)

        this.title=React.createRef()
        this.price=React.createRef()
        this.image=React.createRef()
        this.description=React.createRef()
        this.handleSubmit=this.handleSubmit.bind(this)

    }

    handleSubmit(event){
        event.preventDefault()

        const body={
            title:this.title.current.value,
            price:this.price.current.value,
            image:this.image.current.value,
            description:this.description.current.value
        }

        Axios.post(`${URI}`,body).then(result=>{
            console.log(result.data)
            alert('New data creation success')

            setTimeout(function(){
                window.location="http://localhost:3000"

            },3000)
        }).catch(err=>{
            console.log(err)
        })

    }


    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="jumbotron text-center">
                            Welcome to the Creation Page
                        </h2>
                    </div>
                </div>


                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Title:</label>
                            <input type="text" placeholder="Title" ref={this.title} className='form-control' required autoFocus/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Price:</label>
                            <input type="number" placeholder="Number" ref={this.price} className="form-control"  required/>
                        </div>

                        <form>
                        <div className="form-group">
                            <label htmlFor="">Image:</label>
                            <input type="url" placeholder="https://www.xyz.com" ref={this.image} className='form-control' required/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Description:</label>
                            <input type="text" placeholder="Description" ref={this.description} className="form-control" required/>
                        </div>

                        <div className="form-group">
                           <button className="btn btn-md btn-info" type="submit">Submit</button>
                        </div>
                    </form>
                    </form>

                    </div>
                   
                </div>
            </div>
        )
    }
}