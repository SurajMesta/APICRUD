import React ,{Component} from 'react'
import Axios from 'axios'
const URI="https://apideploytest.herokuapp.com"


export default class Edit extends Component{
    constructor(props){
        super(props)

        this.title=React.createRef()
        this.price=React.createRef()
        this.image=React.createRef()
        this.description=React.createRef()
        
         
        this.state={
            crudid:this.props.match.params._id,
            title:" ",
            price:0,
            image:null,
            description:" "
        }

        this.onTitleChange=this.onTitleChange.bind(this)
        this.onPriceChange=this.onPriceChange.bind(this)
        this.onImageChange=this.onImageChange.bind(this)
        this.onDescriptionChange=this.onDescriptionChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }


    handleSubmit(event){
        event.preventDefault()
        const body={
            title:this.state.title,
            price:this.state.price,
            image:this.state.image,
            description:this.state.description
        }

        Axios.patch(`${URI}/${this.state.crudid}`,body).then(result=>{
            console.log(result.data)

            const update=window.confirm("Are You Sure about Updation ?")
            if(update){
                alert("Data Updated Successfully")
                setTimeout(function(){
                    window.location="http://localhost:3000"

                },2000)
              

            }
          

       
            
        }).catch(err=>{
            console.log(err)
        })
    }

   




componentDidMount(){
    Axios.get(`${URI}/${this.state.crudid}`).then(result=>{
        console.log(result)

        this.setState({
            title:result.data.title,
            price:result.data.price,
            image:result.data.image,
            description:result.data.description
        })

    }).catch(err=>{
        console.log(err)
    })

}


onTitleChange(event){
    this.setState({
        title:event.target.value
    })
}

onPriceChange(event){
this.setState({price:event.target.value})
}

onImageChange(event){
    this.setState({image:event.target.value})
}

onDescriptionChange(event){
    this.setState({description:event.target.value})
}

    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-xs-12">
                        <h2 className="jumbotron text-center">
                            <em>Welcome to the Edition Page</em>
                        </h2>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 well">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="">Title:</label>
                            <input type="text" placeholder="Title" ref={this.title} className='form-control' value={this.state.title} onChange={this.onTitleChange} required autoFocus/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Price:</label>
                            <input type="number" placeholder="Price" ref={this.price} className="form-control" value={this.state.price} required onChange={this.onPriceChange}/>
                        </div>

                        
                        <div className="form-group">
                            <label htmlFor="">Image:</label>
                            <input type="url" placeholder="https://www.xyz.com" ref={this.image} className='form-control' value={this.state.image} required onChange={this.onImageChange}/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Description:</label>
                            <input type="text" placeholder="Description" ref={this.description} className="form-control" value={this.state.description} required onChange={this.onDescriptionChange}/>
                        </div>

                        <div className="form-group">
                           <button className="btn btn-md btn-info" type="submit">Submit</button>
                        </div>
                    </form>
                    
                  
                    </div>
                   
                </div>

            </div>
        )
    }
}