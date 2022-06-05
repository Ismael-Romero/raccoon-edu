import React from "react";


const Books = () => {

    const path = "./assets/img/books";
    const books = [
        {img: `${path}/abd/bo(1).jpg`}, {img: `${path}/abd/bo(1).png`},
        {img: `${path}/abd/bo(2).jpg`}, {img: `${path}/abd/bo(2).png`},
        {img: `${path}/abd/bo(3).jpg`}, {img: `${path}/abd/bo(4).jpg`},
        {img: `${path}/abd/bo(5).jpg`}, {img: `${path}/abd/bo(6).jpg`},
        {img: `${path}/is/bo(1).jpg`}, {img: `${path}/is/bo(1).png`},
        {img: `${path}/is/bo(2).jpg`}, {img: `${path}/is/bo(2).png`},
        {img: `${path}/is/bo(3).jpg`}, {img: `${path}/is/bo(4).jpg`},
        {img: `${path}/is/bo(5).jpg`}, {img: `${path}/is/bo(6).jpg`},
        {img: `${path}/la/bo(1).jpg`}, {img: `${path}/la/bo(1).png`},
        {img: `${path}/la/bo(2).jpg`}, {img: `${path}/la/bo(2).png`},
        {img: `${path}/la/bo(3).jpg`}, {img: `${path}/la/bo(3).png`},
        {img: `${path}/la/bo(4).jpg`}, {img: `${path}/la/bo(4).png`},
        {img: `${path}/li/bo(1).jpg`}, {img: `${path}/li/bo(1).png`},
        {img: `${path}/li/bo(2).jpg`}, {img: `${path}/li/bo(3).jpg`},
        {img: `${path}/rc/bo(1).jpg`}, {img: `${path}/rc/bo(1).png`},
        {img: `${path}/rc/bo(2).jpg`}, {img: `${path}/rc/bo(3).jpg`},
        {img: `${path}/rc/bo(4).jpg`}, {img: `${path}/rc/bo(5).jpg`},
        {img: `${path}/rc/bo(6).jpg`}
    ];
    return (
        <div className="row">
            {
                books.map(book => (
                    <div className="col-md-4 animate__animated animate__zoomInLeft"> 
                        <div className="card" style={{width: "18rem" }}>
                            <img src={book.img} className="card-img-top" />
                        </div>
                    </div>
                ))
            }
        </div>
    );
}


export default Books;