import '../App.css'
function Navbar(){
    return (
        <div class="navbar">
            <div class="logo">K</div>
            <div class="right--nav">
                    <div class="active">Home</div>
                    <div><a href="#about">About</a></div>
                    <div>Services</div>
                    <div>Portfolio</div>
                    <div>Contact Me</div>
                    <div class="cv">Download CV</div>
            </div>
        </div>
    );
}

export default Navbar;