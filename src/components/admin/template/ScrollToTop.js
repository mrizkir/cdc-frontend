import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ScrollToTop extends Component {

    scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    render() {
        return (
            <Link id="back-to-top" href="#" className="btn btn-light btn-lg back-to-top text-success" role="button" onClick={() => this.scrollToTop()}>
                <i className="fas fa-chevron-up"></i>
            </Link>
        )
    }
}

export default ScrollToTop
