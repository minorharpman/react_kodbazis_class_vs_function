import React, { useEffect, useState } from "react";

function Functioncomptest() {
    const [products, setProducts] = React.useState([]);
    const [isPending, setPending] = React.useState(false);

    React.useEffect(() => {

        setPending(true);
        fetch("https://jsonplaceholder.typicode.com/photos").then((res) => (res.ok ? res.json() : [])).then((termekek) => {
            setProducts(termekek);
        }).finally(() => {
            setPending(false);
        });

    }, []);


    React.useEffect(() => {
        document.title = isPending ? "Folyamatban..." : "Termékek";

    }, [isPending]);

    return !isPending ? (
        <div className="container">
            
            <h4 className="pl-5">Function Component Test</h4>
            <h2 className="pl-5">Products:</h2>

            <div className="row p-5">

                {products.map((product) => (
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

export default Functioncomptest;