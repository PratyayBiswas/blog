import React from 'react';
import Sidebar from '../components/Sidebar';
import './PagesStyle.css'

export default function Home() {
    return (
        <>
        <div className="body-left">
            <h1 className="welcome-title">Welcome to Home</h1>
            <img className="img-welcome" src="/assets/images/img1.jpg" alt="" />
            <p className="home-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa animi ad assumenda, doloremque reprehenderit hic rem optio voluptatem. Tempora, dolor saepe! A praesentium maiores cum esse debitis qui ullam ab, quidem dolore doloribus, blanditiis recusandae sequi cupiditate optio? Ipsam rem ad qui, dolore perspiciatis quod animi nam laborum. Facilis amet animi omnis, non, architecto facere nostrum eligendi numquam tempore, enim expedita. Exercitationem, unde voluptatum? Vero alias quo deserunt soluta voluptatum eaque quam, voluptatem amet, consequatur blanditiis ducimus aspernatur iusto, nisi sequi fugit minus beatae! Tempore quas alias sed tenetur. Iste reiciendis nostrum pariatur. Culpa sapiente, ut necessitatibus libero vero odit?</p>
        </div>
        <Sidebar btnTxt="Create new Post" url="/createpost"/>
        </>
    )
}
