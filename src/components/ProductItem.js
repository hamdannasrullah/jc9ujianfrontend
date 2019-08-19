import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

class ProductItem extends Component {

    addToCart = () => {
        var {id, name, price, src} = this.props.barang // Data barang
        // Create Data yang mau post ke cart
        var USERNAME = this.props.username
        var PRODUCTID = id
        var NAME = name
        var PRICE = price
        var DESC = desc
        var SRC = src
        var QTY = parseInt(this.qty.value)

        // Post ke Cart

        axios.post {
            'http://localhost:3004/carts',
            {
                username: USERNAME,
                product_id: PRODUCTID,
                name: NAME,
                price: PRICE,
                desc: DESC,
                src: SRC,
                qty: QTY
            }
        }
    }

    render(){
        var {id, name, price, src} = this.props.barang // {id, name, desc, price, src}
        // id = 1

        return (
            <div className="card col-3 m-5">
                <img src={src} className='card-img-top'/>
                <div className='card-body'>
                    <h5 className='card-title'>{name}</h5>
                    <p className='card-text'>Rp. {price}</p>
                    <input type='text' className='form-control'/>
                    <Link to={'/detailproduct/' + id}>
                        <button className='btn btn-outline-primary btn-block'>Details</button>
                    </Link>
                    <button 
                        className='btn btn-primary btn-block'
                        onClick={() => {this.addToCart()}}>Add To Cart</button>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = state => {
    return {
        username: state.auth.username
    }
}

export default connect (mapStateToProps)(ProductItem)