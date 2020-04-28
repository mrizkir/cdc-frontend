import React, { Component } from 'react'

export class FooterHome extends Component {
    render() {
        return (
            <footer className="sticky-footer mt-5" style={{ background: 'black' }}>
                <div className="container my-auto">
                    <div className="copyright text-center my-auto text-light">
                        <span>Copyright &copy;  Data Center  Covid-19 Kabupaten Bintan</span>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterHome
