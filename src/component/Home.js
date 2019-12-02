import React from 'react';
import {getDataService} from "../RestService/NewsService";

class Home extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    componentDidMount() {
        getDataService()
            .then((res)=> {
                if(res.status=== 200){
                    this.setState({news:res.data.content});
                    console.log(this.state.news);
                }
            }).catch((er)=> {
                console.log(er);
        });
    }

    handleChange = (event)=> {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
        console.log('Change detected. State updated' + name + ' = ' + value);
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const book = event.target;
        const data = new FormData(book);
        console.log(JSON.parse(stringifyFormData(data)));
    };

    render() {
        const newsDatas =this.state.news;
        return(
            <div className="container">
                <br/>
                <br/>
                <br/>
                {
                    newsDatas?
                    <div className="card">
                    {
                        newsDatas.map((singleData , index)=>{
                    return(
                        <div key={index}>
                            <h5 className="card-header">{singleData.id}</h5>
                            <div className="card-body">
                                {/*add popUp*/}
                                <div className="modal fade" id="myAddModal" tabIndex="-1" role="dialog"
                                     aria-labelledby="myModalLabel"
                                     aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h4>Add data</h4>
                                                <button type="button" className="close" data-dismiss="modal"
                                                        aria-hidden="true">&times;</button>
                                            </div>
                                            <div className="modal-body">
                                                {/*// <!-- BASIC FORM ELEMENTS -->*/}
                                                <div className="row mt">
                                                    <div className="col-lg-12">
                                                        <form onSubmit={this.handleSubmit}>
                                                            <div className="form-group">
                                                                <label htmlFor="nameInput">Author Id</label>
                                                                <input type="text"
                                                                       name="authorId"
                                                                       value={this.state.authorId}
                                                                       onChange={this.handleChange}
                                                                       className="form-control"
                                                                       id="nameInput" placeholder="Author Id"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="nameInput">Name</label>
                                                                <input name="name" type="text"
                                                                       value={this.state.name}
                                                                       onChange={this.handleChange}
                                                                       className="form-control"
                                                                       id="emailInput" placeholder="book name"/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="nameInput">Price</label>
                                                                <input name="price"
                                                                       type="text"
                                                                       value={this.state.price}
                                                                       onChange={this.handleChange}
                                                                       className="form-control"
                                                                       id="emailInput" placeholder="price"/>
                                                            </div>
                                                            <input type="submit" value="Submit" className="btn btn-primary"/>
                                                        </form>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <h5 className="card-title">{singleData.title}</h5>
                                <p className="card-text">{singleData.data}</p>
                                <p >{singleData.content}</p>
                                <p className="card-text">{singleData.date}</p>

                                <a href="#" className="btn btn-primary"> Go somewhere </a>
                            </div>
                        </div>

                    );
                    })
                    }
                </div>
                        :
                        <div>
                            no data
                        </div>
                    }
                    }
                    <h5 className="card-header">Featured</h5>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional
                            content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        );

    }

}

function stringifyFormData(fd) {
    const data = {};
    for (let key of fd.keys()) {
        data[key] = fd.get;
    }
    console.log("calling in stringifyFormData function  ", JSON.stringify(data, null, 2));
    return JSON.stringify(data, null, 2);
}

export default Home;