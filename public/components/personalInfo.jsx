var React = require('react');
// var Carousel = require('react-bootstrap').Carousel;
// var CarouselItem = require('react-bootstrap').CarouselItem;
require('./personalInfo.scss');

class PersonalInfo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            scrollPosition: 1
        };
        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);
    }

    slideLeft(e){
        if(this.state.scrollPosition > 1){
            this.setState({
                scrollPosition: this.state.scrollPosition - 1
            });
        }
    }

    slideRight(e){
        if(this.state.scrollPosition < this.state.slideCount){
            this.setState({
                scrollPosition: this.state.scrollPosition + 1
            });
        }
    }

    componentDidMount(){
        var slideCount = $('.personal-info .slide').length;
        this.setState({
            slideCount: slideCount
        });
    }

    render() {
        return (
            <section className={"personal-info scroll-" + this.state.scrollPosition}>
                {/* <Carousel wrap={true} slide={false}>
                    <CarouselItem>
                        <div className="title">
                            Contact
                        </div>
                        <div className="details">
                            <article className="phone">
                                <span className="icon glyphicon glyphicon-earphone"></span>
                                <span className="value">+91 9884142726</span>
                            </article>
                            <article className="email">
                                <span className="icon glyphicon glyphicon-envelope"></span>
                                <span className="value">vijayaraghavan1987@gmail.com</span>
                            </article>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="title">
                            Hobbies
                        </div>
                        <div className="details">
                            <article className="phone">
                                <span className="icon glyphicon glyphicon-earphone"></span>
                                <span className="value">+91 9884142726</span>
                            </article>
                            <article className="email">
                                <span className="icon glyphicon glyphicon-envelope"></span>
                                <span className="value">vijayaraghavan1987@gmail.com</span>
                            </article>
                        </div>
                    </CarouselItem>
                </Carousel> */}

                <div className="slide">
                    <div className="title">
                        Contact
                    </div>
                    <div className="details">
                        <article className="phone">
                            <span className="icon glyphicon glyphicon-earphone"></span>
                            <span className="value">+91 9884142726</span>
                        </article>
                        <article className="email">
                            <span className="icon glyphicon glyphicon-envelope"></span>
                            <span className="value">vijayaraghavan1987@gmail.com</span>
                        </article>
                    </div>
                </div>
                <div className="slide">
                    <div className="title">
                        Hobbies
                    </div>
                    <div className="details">
                        <article className="books">
                            <span className="icon glyphicon glyphicon-book"></span>
                            <span className="value">Books</span>
                        </article>
                        <article className="movies">
                            <span className="icon glyphicon glyphicon-film"></span>
                            <span className="value">Watching movies</span>
                        </article>
                        <article className="learn">
                            <span className="icon glyphicon glyphicon-code"></span>
                            <span className="value">Dreaming</span>
                        </article>
                    </div>
                </div>
                <div className="slide">
                    <div className="title">
                        Interests
                    </div>
                    <div className="details">
                        <article className="bitcoin">
                            <span className="icon fa fa-btc"></span>
                            <span className="value">Bitcoin</span>
                        </article>
                        <article className="code">
                            <span className="icon fa fa-code"></span>
                            <span className="value">Writing code</span>
                        </article>
                        <article className="learn">
                            <span className="icon glyphicon glyphicon-code"></span>
                            <span className="value">Learning</span>
                        </article>
                    </div>
                </div>
                <div className="slide">
                    <div className="title">
                        Profile
                    </div>
                    <div className="details">
                        <article className="linkedin">
                            <a href="https://www.linkedin.com/in/vijayaraghavan-purushothaman-0261719/">
                                <span className="icon fa fa-linkedin"></span>
                                <span className="value">My profile</span>
                            </a>
                        </article>
                        <article className="github">
                            <a href="https://github.com/vpurush">
                                <span className="icon fa fa-github"></span>
                                <span className="value">My hobby projects</span>
                            </a>
                        </article>
                    </div>
                </div>
                <div className="controls">
                    <span className="glyphicon glyphicon-triangle-left" disabled={this.state.scrollPosition == 1} onClick={this.slideLeft}></span>
                    <span className="glyphicon glyphicon-triangle-right" disabled={this.state.slideCount == this.state.scrollPosition} onClick={this.slideRight}></span>
                </div>

            </section>
        );
    }
}

module.exports = PersonalInfo;