import React, { useEffect, useState } from "react";

class Classcomptest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            isPending: false,
        }
    }


    componentDidMount() {

        this.setState({ isPending: true });
        fetch("https://jsonplaceholder.typicode.com/photos").then((res) => (res.ok ? res.json() : [])).then((termekek) => {
            this.setState({ products: termekek });
        }).finally(() => {
            this.setState({ isPending: false });
        });

    }

    //https://hu.reactjs.org/docs/react-component.html
    //https://dev.to/cesareferrari/how-to-use-componentdidupdate-in-react-30en
    componentDidUpdate(prevProps, prevState) {
        if (prevState.isPending !== this.state.isPending) {
            document.title = this.state.isPending ? "Folyamatban..." : "Termékek";
        }
    }



    render() {
        return !this.state.isPending ? (
            <div className="container">

                <h4 className="pl-5">Class Component Test</h4>
                <h2 className="pl-5">Products:</h2>

                <div className="row p-5">

                    {this.state.products.map((product) => (
                        <div key={product.id} className="col-sm-3" >
                            <div className="card m-3">
                                <img className="card-img-top" src={product.thumbnailUrl} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">   {product.title}  </h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ) : (
                <div className="container">
                    <div className="row p-5">
                        <div className="spinner-border text-primary" >
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                </div>
            );


    }
}

export default Classcomptest;