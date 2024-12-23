import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-contact">
                    <h4>Elérhetőség</h4>
                    <p>+36(30) 526 6840</p>
                    <p>info@tamasraczphoto.hu</p>
                    </div>
                    <div className="footer-contact">
                    <h4>Levelezési cím</h4>
                    <p>4254 Nyíradony</p>
                    <p>Galamb utca 18.</p>
                </div>
                <div className="footer-social">
                    <h4>Itt megtalálsz engem</h4>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;