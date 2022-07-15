import '../styles/NotFound.css'

const NotFound = () => {
    return (
        <>  <>
            <div className='not-found' >
                <div className="not-found-container" >
                    <div className='not-found-text'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                             <h3>Oops! page not found.</h3>
                        <h1>404</h1>
                        <h4>We can't find the page you're looking for.</h4>
                        <a href="/" className="return" >Return to HOME</a>
                    </div>
                </div>
            </div>
        </>
        </>
    );
}

export default NotFound;