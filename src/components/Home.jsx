import React from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
 
const URI="https://apideploytest.herokuapp.com"

const Heroku=(props)=>{
    const {_id, title, price, image, description}=props.posts

    return(
        <div className="col-sm-6 col-md-6 col-xs-12 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <div className="panel-title">
                    <h4 className="text-center" id="title"><strong><em>{title}</em></strong></h4>
                    
                    </div>
                </div>

                <div className="panel-body">
                   <img src={image} alt="img" className="img-responsive" style={{width:"80px",height:"100px",margin:"auto"}} />
               
                <br/>
                <hr/>
                    <ul className="list-group">
                      

                    <li className="list-group-item ">
                        <strong>  Price:  <span className="pull-right">{price}</span></strong>
                  
                        </li>

                        <li className="list-group-item">
                            <strong>  Description: <span className="pull-right">{description}</span></strong>
                      
                        </li>
                    </ul>
                </div>

                <div className="panel-footer">
                  <Link to={`/edit/${_id}`} className="btn btn-md btn-info glyphicon glyphicon-edit"></Link>
                  <button onClick={()=>{
                      props.onDel(_id)
                  }} className="btn btn-md btn-danger pull-right ">
                      <span className="glyphicon glyphicon-trash"></span>
                  </button>
                </div>
            </div>
        </div>
    )

}

export default class Home extends React.Component{

    state={
        datas:[]
    }


    componentDidMount(){

        Axios.get(`${URI}`).then(result=>{
            console.log(result)
            console.log(result.data)
            let datas= result.data
            this.setState({datas})
        }).catch(err=>{
           console.log(err)
        })
    }

    onDeleteHandler(_id){
        Axios.delete(`${URI}/${_id}`).then(result=>{
            const status= window.confirm("Are You Sure You want to Delete?")

            if(status){
                alert("Data Deleted Successfully")
                window.location="http://localhost:3000"
            }
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
                           <em>Welcome to The Home Page</em> 
                        </h2>
                    </div>
                </div>

                <div className="row">
                    {this.state.datas.map((item)=>{
                        return(
                            <Heroku key={item._id} posts={item} onDel={this.onDeleteHandler}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}