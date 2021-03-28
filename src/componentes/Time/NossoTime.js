import React from 'react'
import './nossotime.css'

const NossoTime = () => {
    return (
        <div className="divTime">
            <h1 className="timeTitle">Nosso Time</h1>
            <img className="timeImg fotopessoa1" src="https://randomuser.me/api/portraits/women/14.jpg"></img>
            <section className="pessoa1">
                <h2 className="timeNome">Diana Müller</h2>
                <p className="textTime">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vel enim consequat lacus consectetur tempus nec sit amet tellus. Nam nec justo lacus. Sed sit.</p>
            </section>
            <img className="timeImg fotopessoa2" src="https://randomuser.me/api/portraits/men/32.jpg"></img>
            <section className="pessoa2">
                <h2 className="timeNome">Liam Danforth</h2>
                <p className="textTime">Augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo.</p>
            </section>
            <img className="timeImg fotopessoa3" src="https://randomuser.me/api/portraits/women/20.jpg"></img>
            <section className="pessoa3">
                <h2 className="timeNome">Monica Desjardins</h2>
                <p className="textTime">Integer nec felis sodales, sagittis dolor non, congue libero. Morbi nec fringilla ipsum, ac finibus ligula. Praesent quis iaculis mi, a iaculis odio. Cras quis.</p>
            </section>
            <img className="timeImg fotopessoa4" src="https://randomuser.me/api/portraits/women/48.jpg"></img>
            <section className="pessoa4">
                <h2 className="timeNome">Erica Kim</h2>
                <p className="textTime">Nunc varius arcu tortor, sit amet rutrum urna facilisis id. Mauris mattis in massa et condimentum. Proin dui leo, volutpat sed turpis a, malesuada commodo.</p>
            </section>
        </div>
    )
}

export default NossoTime
