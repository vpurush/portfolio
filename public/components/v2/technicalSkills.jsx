var React = require('react');
var $ = require("jquery");
var _ = require("lodash");
window.jQuery = $;
var bootstrap = require("bootstrap");
var MediumLarge = require("../../utils/responsive-decorators/medium-large.js");

@MediumLarge
class TechnicalSkills extends React.Component{
    constructor(props, context){
        super(props, context);        
        this.state = {
            colors: ['cornflowerblue', 'burlywood', 'darksalmon', 'deepskyblue', 'gold', 'hotpink', 'cadetblue', 'lightcoral', 'orchid', 'palevioletred', 'mediumseagreen', 'salmon', 'sandybrown', 'steelblue', 'tan', 'tomato'],
            skills: [
                {
                    title: 'Javascript',
                    displayName: 'Javascript',
                    description: 'More than 7 years of experience in advanced javascript',
                    scale: 4
                },
                {
                    title: 'Knockout JS',
                    displayName: 'KnockoutJS',
                    description: 'Around 3 years of experience in building UI using Knockout JS',
                    scale: 3
                },
                {
                    title: 'Angular JS',
                    displayName: 'AngularJS',
                    description: 'Around 3 years of experience in building UI using Angular JS 1.X',
                    scale: 5
                },
                {
                    title: 'React JS',
                    displayName: 'ReactJS',
                    description: 'Around 6 months of experience in React JS.',
                    scale: 4
                },
                {
                    title: 'Redux',
                    displayName: 'Redux',
                    description: 'Have been working on Redux for 6 months. Have very good understanding.',
                    scale: 3
                },
                {
                    title: '.NET Framework 4',
                    displayName: '.NET Framework 4',
                    description: 'Around 3 years of experience in building windows and web apps using .NET 4.0',
                    scale: 2
                },
                {
                    title: 'ASP.NET MVC 3',
                    displayName: 'ASP.NET MVC 3',
                    description: 'Around 2 years of experience in building web applications using ASP.NET MVC 3',
                    scale: 2
                },
                {
                    title: 'Jquery',
                    displayName: 'Jquery',
                    description: null,
                    scale: 5
                },
                {
                    title: 'HTML 5',
                    displayName: 'HTML5',
                    description: null,
                    scale: 4
                },
                {
                    title: 'CSS 3',
                    displayName: 'CSS 3',
                    description: "Have a good understanding of various concepts like pixel ratio, flexbox, variables, etc",
                    scale: 4
                },
                {
                    title: 'Bootstrap CSS',
                    displayName: 'Bootstrap CSS',
                    description: "Well versed in using the grid layout for responsive design",
                    scale: 2
                },
                {
                    title: 'SASS',
                    displayName: 'SASS',
                    description: null,
                    scale: 3
                },
                {
                    title: 'Gulp',
                    displayName: 'Gulp',
                    description: 'Have created several kinds of tasks using grunt and gulp',
                    scale: 3
                },
                {
                    title: 'Grunt',
                    displayName: 'Grunt',
                    description: 'Have created several kinds of tasks using grunt and gulp',
                    scale: 3
                },
                {
                    title: 'Webpack',
                    displayName: 'Webpack',
                    description: 'Aware of the basic webpack setup needed for a React project',
                    scale: 3
                },
                {
                    title: 'Machine Learning',
                    displayName: 'Machine Learning',
                    description: 'Aware of the basics in machine learning',
                    scale: 1
                },
                {
                    title: 'Tensorflow',
                    displayName: 'Tensorflow',
                    description: 'I am learning Tensorflow',
                    scale: 1
                }
            ],
            // repositionComplete: true
        };

        this.regenerate = this.regenerate.bind(this);
    }

    getClassNames(skill, i){
        var classNames = "scale-" + skill.scale + " ";
        if(skill.isVertical === true){
            classNames += "vertical";
        }else if(skill.isVertical === false){
            classNames += "horizontal";
        }else{
            var rBool = Math.random() < 0.65;
            //if(i % 2 === 0){
            if(rBool){
                classNames += "horizontal";
                skill.isVertical = false;
            }else{
                classNames += "vertical";
                skill.isVertical = true;
            }
        }

        classNames += " " + this.getColor();
        return classNames;
    }

    initSkillElement(elm){
        //$(elm).tooltip();
        // $(elm).popover({
        //     trigger: 'hover'
        // });
    }

    getColor(){
        if(!this.colorIterator){
            this.colorIterator = Math.floor(Math.random() * this.state.colors.length);
        }else if(this.colorIterator == this.state.colors.length){
            this.colorIterator = 0;
        }
        return " " + this.state.colors[this.colorIterator++] + " ";
    }

    render(){
        var content;
        var techSkills = (
            <div className="wrapper">
                {this.state.skills.map(function(s, i){
                    return(
                        <div key={i} id={"skill-item-" + i} className={"skill-item " + this.getClassNames(s, i)} style={{top: s.top, left:s.left}} data-scale={s.scale} title={s.title} data-content={s.description} data-toggle="popover" data-placement="top" ref={this.initSkillElement}>
                            <div className="display-name">{s.displayName}</div>
                        </div>
                    )
                }.bind(this))}
            </div>);

        if(this.state.repositionComplete){
            content = (
                <div className="technical-skills">
                    {/* <div className="info">
                        Move your mouse over the technologies to know more.
                        <span className="glyphicon glyphicon-repeat" onClick={this.regenerate}></span>
                    </div> */}
                    {techSkills}
                </div>
            );
        }else{
            content = (
                <div className="technical-skills">                    
                    {techSkills}
                    <div className="technical-skill-refresh">
                        <span className="glyphicon glyphicon-refresh"></span>
                    </div>
                </div>
            );
        }
        return content;        
    }

    savePosition(){

    }

    getOccupiedBox(x, y, width, height, isVertical, textForDebugging){
        let lx = x, ly = y, lwidth = width, lheight = height;
        if(isVertical){
            return {
                topLeft: {
                    x: x + lwidth/2 - lheight/2,
                    y: y - lwidth/2 + lheight/2
                },
                topRight: {
                    x: x + lwidth/2 + lheight/2,
                    y: y - lwidth/2 + lheight/2
                },
                bottomLeft: {
                    x: x + lwidth/2 - lheight/2,
                    y: y + lwidth/2 + lheight/2
                },
                bottomRight: {
                    x: x + lwidth/2 + lheight/2,
                    y: y + lwidth/2 + lheight/2
                },
                textForDebugging: textForDebugging
            };
        }else{
            return {
                topLeft: {
                    x: x,
                    y: y
                },
                topRight: {
                    x: x + lwidth,
                    y: y
                },
                bottomLeft: {
                    x: x,
                    y: y + lheight
                },
                bottomRight: {
                    x: x + lwidth,
                    y: y + lheight
                },
                textForDebugging: textForDebugging
            };
        }
    }


    isThereAnOverlapSmart(pos1, pos2, textForDebugging){
        //console.log("new call");
        var onewidth = pos1.width, oneheight = pos1.height;
        var one;
        if(pos1.isVertical){

            one = {
                topLeft: {
                    x: pos1.left + onewidth/2 - oneheight/2,
                    y: pos1.top - onewidth/2 + oneheight/2
                },
                topRight: {
                    x: pos1.left + onewidth/2 + oneheight/2,
                    y: pos1.top - onewidth/2 + oneheight/2
                },
                bottomLeft: {
                    x: pos1.left + onewidth/2 - oneheight/2,
                    y: pos1.top + onewidth/2 + oneheight/2
                },
                bottomRight: {
                    x: pos1.left + onewidth/2 + oneheight/2,
                    y: pos1.top + onewidth/2 + oneheight/2
                }
            }
        }else{
            one = {
                topLeft: {
                    x: pos1.left,
                    y: pos1.top
                },
                topRight: {
                    x: pos1.left + onewidth,
                    y: pos1.top
                },
                bottomLeft: {
                    x: pos1.left,
                    y: pos1.top + oneheight
                },
                bottomRight: {
                    x: pos1.left + onewidth,
                    y: pos1.top + oneheight
                }
            }
        }

        // var two = {
        //     topLeft: {
        //         x: pos2.left,
        //         y: pos2.top
        //     },
        //     topRight: {
        //         x: pos2.left + pos2.width,
        //         y: pos2.top
        //     },
        //     bottomLeft: {
        //         x: pos2.left,
        //         y: pos2.top + pos2.height
        //     },
        //     bottomRight: {
        //         x: pos2.left + pos2.width,
        //         y: pos2.top + pos2.height
        //     }

        // }
        var two = pos2;
        var isOverlap = false;
        
        if(this.isWithinBox(one.topLeft, two) ||
            this.isWithinBox(one.topRight, two) ||
            this.isWithinBox(one.bottomLeft, two) ||
            this.isWithinBox(one.bottomRight, two)){
            isOverlap = true;
        }else if(this.isWithinXBound(one.topLeft, two) &&
            one.topLeft.y < two.topLeft.y && 
            one.bottomLeft.y > two.bottomLeft.y){
            isOverlap = true;
        }else if(this.isWithinXBound(one.topRight, two) &&
            one.topRight.y < two.topRight.y && 
            one.bottomRight.y > two.bottomRight.y){
            isOverlap = true;
        }else if(this.isWithinYBound(one.topLeft, two) &&
            one.topLeft.x < two.topLeft.x && 
            one.topRight.x > two.topRight.x){
            isOverlap = true;
        }else if(this.isWithinYBound(one.bottomLeft, two) &&
            one.bottomLeft.x < two.bottomLeft.x && 
            one.bottomRight.x > two.bottomRight.x){
            isOverlap = true;
        }else if(this.isWithinBox(two.topLeft, one) ||
            this.isWithinBox(two.topRight, one) ||
            this.isWithinBox(two.bottomLeft, one) ||
            this.isWithinBox(two.bottomRight, one)){
                isOverlap = true;
        }

        //console.log("isoverlap", isOverlap);
        return isOverlap;
    }

    isWithinBox(coordinates, box){
        // if(coordinates.x >= box.topLeft.x && 
        //     coordinates.x <= box.topRight.x &&
        //     coordinates.y >= box.topLeft.y && 
        //     coordinates.y <= box.bottomLeft.y){
        //     return true;
        // }

        if(this.isWithinXBound(coordinates, box) &&
            this.isWithinYBound(coordinates, box)){
            return true;
        }
        else{
            return false
        }
    }

    isWithinXBound(coordinates, box){
        if(coordinates.x >= box.topLeft.x &&
            coordinates.x <= box.topRight.x){
            return true;
        }else{
            return false;
        }
    }

    isWithinYBound(coordinates, box){
        if(coordinates.y >= box.topLeft.y &&
            coordinates.y <= box.bottomLeft.y){
            return true;
        }else{
            return false;
        }
    }

    getPositionWithinLimits(limit, height, width, itr, radius, side, isVertical, text){
        var output;
        var iterationLimit = 250;
        var center = {x: limit.x/2, y:limit.y/2};
        center.x = center.x - limit.x * 0.07; //center adjustment since the cloud gets right aligned
        var radiusRange = radius.max - radius.min;
        var radiusMultiplicationFactor = limit.x / limit.y; 

        while(true){
            itr++;
            
            var randomx = Math.ceil(Math.random() * radiusRange * radiusMultiplicationFactor) + radius.min * radiusMultiplicationFactor;
            var randomy = Math.ceil(Math.random() * radiusRange / radiusMultiplicationFactor) + radius.min / radiusMultiplicationFactor;
            
            if(side != "r" && (side == "l" || Math.random() > 0.5)){
                randomx = randomx * -1;
                randomy = Math.ceil(Math.random() * radius.max / radiusMultiplicationFactor);
            }
            if(side != "b" && (side == "t" || Math.random() > 0.5)){
                randomy = randomy * -1;
                randomx = Math.ceil(Math.random() * radius.max * radiusMultiplicationFactor);
            
            }
            //var adjustment = 20;
            output = {
                x: center.x + randomx,
                y: center.y + randomy
            }
            //console.log("getPositionWithinLimits ", side, center, radius, output);

            if(isVertical){
                if(output.x > 0 && output.y > 0 && ((output.x + height) < limit.x) && ((output.y + width) < limit.y)){
                    //console.log("getPositionWithinLimits output", output, randomx, randomy, center);
                    //return output;

                    break;
                }else{
                    if(itr > iterationLimit){
                        console.error("unable to find position within limits", side, output.y, limit.y, randomy, center.y, height, ((output.y + height) < limit.y));
                        output = center;
                        //output = null;
                        break;
                    }
                    
                    // else{
                    //     return this.getPositionWithinLimits(limit, height, width, itr++, radius);
                    // }
                }
            } else {
                if(output.x > 0 && output.y > 0 && ((output.x + width) < limit.x) && ((output.y + height) < limit.y)){
                    //console.log("getPositionWithinLimits output", output, randomx, randomy, center);
                    //return output;

                    break;
                }else{
                    if(itr > iterationLimit){
                        console.error("unable to find position within limits", side, output.y, limit.y, randomy, center.y, height, ((output.y + height) < limit.y));
                        output = center;
                        //output = null;
                        break;
                    }
                    
                    // else{
                    //     return this.getPositionWithinLimits(limit, height, width, itr++, radius);
                    // }
                }
            }
        }

        //console.log("getPositionWithinLimits ", side, center, radius, output, randomx, randomy, text);
        return output;
    }

    findPosition(elm, side, limit, boxAlreadyOccupied, position, itr, radius){
        //console.log("center", center);
        var center = {x: limit.x/2, y:limit.y/2};
        //var step = 2;
        var radiusStep = 10;
        var output;
        //var adjustment = 20;
        var height = $(elm).height();
        var width = $(elm).width();
        var text = $(elm).text();
        var isVertical = $(elm).attr('class').indexOf('vertical') != -1;
        radius = {
            min: 0,
            max: radiusStep
        }

        if(window.exit){
            return center;
        }

        while(true){
            position  = this.getPositionWithinLimits(limit, height, width, 0, radius, side, isVertical, text);
            output = {x: position.x, y: position.y};
            //var occupiedPixels = this.getOccupiedPixels(position.x, position.y, width, height, isVertical, limit);
            var isOverlap = false;

            _.each(boxAlreadyOccupied, function(box){
                
                isOverlap = this.isThereAnOverlapSmart({
                    top: position.y,
                    left: position.x,
                    width: width,
                    height: height,
                    isVertical
                }, box, text);

                if(isOverlap){
                    return false;
                }
            }.bind(this));
            //console.log("positionsAlreadyOccupied.length", positionsAlreadyOccupied.length);

            //occupiedPixels = null;
            if(isOverlap){
                if(itr < 100){
                    ++itr;
                    continue;
                }else{
                    console.log("***********************  itr reset in findposition");
                    itr = 0;
                    radius = {
                        min: radius.min + radiusStep,
                        max: radius.max + radiusStep
                    }

                    if(radius.min > 500){
                        console.log("returning center", text);
                        return center;
                    }
                }
            }else{
                break;
            }
        }
        //console.log("found position", output);
        return output;
    }

    regenerate(){
        
        this.setState({
            repositionComplete: false
            // repositionComplete: true
        });
        this.forceUpdate();

        setTimeout(this.reposition.bind(this), 500);

    }

    reposition(){
        console.log($('.technical-skills').position());
        var parentHeight = $('.technical-skills').height();
        var parentWidth = $('.technical-skills').width();
        //var step = 3;
        var boxAlreadyOccupied = [];
        $('.technical-skills .skill-item').each(function(i, s){
            console.log("i", i);

            // if(i > 5){
            //     return false;
            // }
            var isVertical = $(s).attr('class').indexOf('vertical') != -1;
            var currentElementHeight = $(s).height();
            var currentElementWidth = $(s).width();
            var text = $(s).text();
            var x, y;
            if(i === 0){
                x = parentWidth / 2 - currentElementWidth / 2;
                y = parentHeight / 2 - currentElementHeight / 2;
                $(s).css({top: y, left: x});                
                this.state.skills[i].top = y + "px";
                this.state.skills[i].left = x + "px";
            }else{
                var pos;
                if(i % 4 == 1){
                    pos = this.findPosition(s, 
                                                "t", 
                                                {x: parentWidth, y:parentHeight}, 
                                                boxAlreadyOccupied, 
                                                {x: parentWidth/2, y:parentHeight/2},
                                                0,
                                                null);
                }else if(i % 4 == 2){
                    pos = this.findPosition(s, 
                                                "r", 
                                                {x: parentWidth, y:parentHeight}, 
                                                boxAlreadyOccupied, 
                                                {x: parentWidth/2, y:parentHeight/2},
                                                0,
                                                null);
                }else if(i % 4 == 3){
                    pos = this.findPosition(s, 
                                                "b", 
                                                {x: parentWidth, y:parentHeight}, 
                                                boxAlreadyOccupied, 
                                                {x: parentWidth/2, y:parentHeight/2},
                                                0,
                                                null);
                }else if(i % 4 == 0){
                    pos = this.findPosition(s, 
                                                "l", 
                                                {x: parentWidth, y:parentHeight}, 
                                                boxAlreadyOccupied, 
                                                {x: parentWidth/2, y:parentHeight/2},
                                                0,
                                                null);
                }
                x = pos.x;
                y = pos.y;
                $(s).css({top: pos.y, left: pos.x});
                console.log("done", {top: pos.y, left: pos.x}, $(s).text());
                this.state.skills[i].top = pos.y + "px";
                this.state.skills[i].left = pos.x + "px";
            }
            boxAlreadyOccupied.push(this.getOccupiedBox(x, y, currentElementWidth, currentElementHeight, isVertical, text));
        }.bind(this));
        
        this.setState({
            repositionComplete: true
        })

        console.log("reposition set to true");
    }

    componentDidMount(){
        setTimeout(this.reposition.bind(this), 500);

        window.addEventListener("orientationchange", () => {
            this.regenerate();
        });
    }

    componentDidUpdate(){
        //setTimeout(this.reposition.bind(this), 500);
    }
}

module.exports = TechnicalSkills;