var React = require('react');
var $ = require("jquery");
var _ = require("lodash");
window.jQuery = $;
var bootstrap = require("bootstrap");

require('./technicalSkills.scss');

class TechnicalSkills extends React.Component{
    constructor(props, context){
        super(props, context);        
        this.state = {
            colors: ['cornflowerblue', 'burlywood', 'darksalmon', 'deepskyblue', 'gold', 'hotpink', 'cadetblue', 'lightcoral', 'orchid', 'palevioletred', 'mediumseagreen', 'salmon', 'sandybrown', 'steelblue', 'tan', 'tomato'],
            skills: [
                {
                    title: 'Javascript',
                    displayName: 'Javascript',
                    description: 'More than 6 years of experience in advanced javascript',
                    scale: 6
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
                    scale: 3
                },
                {
                    title: 'React JS',
                    displayName: 'ReactJS',
                    description: 'Trained myself in React. No work experience, yet have excellent knowledge.',
                    scale: 3
                },
                {
                    title: 'Redux',
                    displayName: 'Redux',
                    description: 'Trained myself in Redux. Have very good understanding. No work experience, yet have excellent knowledge and thorough understanding.',
                    scale: 3
                },
                {
                    title: '.NET Framework 4',
                    displayName: '.NET Framework 4',
                    description: 'Around 3 years of experience in building windows and web apps using .NET 4.0',
                    scale: 3
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
                    scale: 6
                },
                {
                    title: 'HTML 5',
                    displayName: 'HTML 5',
                    description: null,
                    scale: 6
                },
                {
                    title: 'CSS 3',
                    displayName: 'CSS 3',
                    description: null,
                    scale: 6
                },
                {
                    title: 'Bootstrap CSS',
                    displayName: 'Bootstrap CSS',
                    description: null,
                    scale: 4
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
                }
            ]
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
        $(elm).popover({
            trigger: 'hover'
        });
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
                    <div className="info">
                        Move your mouse over the technologies to know more.
                        <span className="glyphicon glyphicon-repeat" onClick={this.regenerate}></span>
                    </div>
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

    getOccupiedPixels(x, y, width, height, isVertical){
        var output = {};
        x = Math.round(x);
        y = Math.round(y);
        width = Math.round(width);
        height = Math.round(height);
        if(isVertical){
            var newx = Math.round(x + width / 2 - height/2), newy = Math.round(y - width/2 + height/2);
            if(newx < 0 || newy < 0){
                console.log("negative values", newx, newy);
            }
            for(var j=0; j<width; j++){
                var obj = {};
                for(var i=0; i<height; i++){
                    obj[i+newx] = true;
                }
                output[j+newy] = obj;
            }

        }else{
            for(var j=0; j<height; j++){
                var obj = {};
                for(var i=0; i<width; i++){
                    obj[i+x] = true;
                }
                output[y+j] = obj;
            }
        }
        //console.log("getOccupiedPixels", output);
        return output;
    }

    getOccupiedPixelsArray(x, y, width, height, isVertical, limit){
        var output = new Array(limit.y);
        x = Math.round(x);
        y = Math.round(y);
        width = Math.round(width);
        height = Math.round(height);
        if(isVertical){
            var newx = Math.round(x + width / 2 - height/2), newy = Math.round(y - width/2 + height/2);
            if(newx < 0 || newy < 0){
                console.log("negative values", newx, newy);
            }
            for(var j=0; j<width; j++){
                for(var i=0; i<height; i++){
                    if(!output[j+newy]){
                        output[j+newy] = new Array(limit.x);
                    }
                    output[j+newy][i+newx] = true;
                }
            }

        }else{
            for(var j=0; j<height; j++){
                for(var i=0; i<width; i++){
                    if(!output[y+j]){
                        output[y+j] = new Array(limit.x);
                    }
                    output[y+j][i+x] = true;
                }
            }
        }
        //console.log("getOccupiedPixels", output);
        return output;
    }

    isThereAnOverlap(pos1, pos2){
        //console.log("new call");
        var isOverlap = false;
        _.each(pos1, function(xvalues, yval){
            if(yval % 2 == 0){
                //console.log("isthereoverlap continue y");
                //return true;                
            }
            _.each(xvalues, function(v, xval){
                
                if(xval % 2 == 0){
                    //console.log("isthereoverlap continue x");
                    //return true;                
                }
                if(pos2[yval] && pos2[yval][xval]){
                    isOverlap = true;
                }
                if(isOverlap){
                    //console.log("isthereoverlap x", isOverlap);
                    return false;
                }
            });
            if(isOverlap){
                //console.log("isthereoverlap y", isOverlap);
                return false;
            }
        })

        //console.log("isoverlap", isOverlap);
        return isOverlap;
    }

    isThereAnOverlapArray(pos1, pos2, isVertical){
        //console.log("new call");
        var isOverlap = false;
        if(isVertical){
            var top = pos1.top + pos1.height / 2 - pos1.width / 2;
            var left = pos1.left + pos1.width / 2 - pos1.height / 2;
            for(var j=Math.round(top); j<top + pos1.width; j++){
                for(var i=Math.round(left); i<left + pos1.height; i++){
                    if(pos2[j] && pos2[j][i]){
                        isOverlap = true;
                    }
                    if(isOverlap){
                        break;
                    }
                }
                if(isOverlap){
                    break;
                }
            }
        }else{
            for(var j=Math.round(pos1.top); j<pos1.top + pos1.height; j++){
                for(var i=Math.round(pos1.left); i<pos1.left + pos1.width; i++){
                    if(pos2[j] && pos2[j][i]){
                        isOverlap = true;
                    }
                    if(isOverlap){
                        break;
                    }
                }
                if(isOverlap){
                    break;
                }
            }
        }
        //console.log("isoverlap", isOverlap);
        return isOverlap;
    }

    // getPositionWithinLimits(limit, height, width){
    //     var center = {x: limit.x/2, y:limit.y/2};
    //     var randomx = Math.ceil(Math.random() * 40 - 20);
    //     var randomy = Math.ceil(Math.random() * 40 - 20);
    //     var output;
    //     var adjustment = 20;
    //     output = {
    //         x: center.x - adjustment * randomx,
    //         y: center.y - adjustment * randomy
    //     }
    //     console.log("getPositionWithinLimits ", width, height, limit , output, randomx, randomy, output.x > 0 && output.y > 0 && ((output.x + width) < limit.x) && ((output.y + width) < limit.y));

    //     if(output.x > 0 && output.y > 0 && ((output.x + width) < limit.x) && ((output.y + width) < limit.y)){
    //         return output;
    //     }else{
    //         return this.getPositionWithinLimits(limit, height, width);
    //     }
    // }

    getPositionWithinLimits(limit, height, width, itr, radius, side, isVertical, text){
        var output;
        var iterationLimit = 250;
        var center = {x: limit.x/2, y:limit.y/2};
        center.x = center.x - limit.x * 0.07; //center adjustment since the cloud gets right aligned
        var radiusRange = radius.max - radius.min;
        var radiusMultiplicationFactor = limit.x / limit.y;

        while(true){
            itr++;
            //var randomx, randomy;
            var randomx = Math.ceil(Math.random() * radiusRange * radiusMultiplicationFactor) + radius.min * radiusMultiplicationFactor;
            var randomy = Math.ceil(Math.random() * radiusRange) + radius.min;
            // if(side == "t"){
            //     randomx = Math.ceil(Math.random() * limit.x/2) 
            //     randomx = randomx * (Math.random() < 0.5 ? -1 : 1);
            //     randomy = Math.ceil(Math.random() * radiusRange) + radius.min;
            //     randomy = randomy * -1;
            // }else if(side == "r"){
            //     randomy = Math.ceil(Math.random() * limit.y/2) 
            //     randomy = randomy * (Math.random() < 0.5 ? -1 : 1);
            //     randomx = Math.ceil(Math.random() * radiusRange * radiusMultiplicationFactor) + radius.min;
            // }else if(side == "b"){
            //     randomx = Math.ceil(Math.random() * limit.x/2) 
            //     randomx = randomx *(Math.random() < 0.5 ? -1 : 1);
            //     randomy = Math.ceil(Math.random() * radiusRange) + radius.min;
            // }else if(side == "l"){
            //     randomy = Math.ceil(Math.random() * limit.y/2) 
            //     randomy = randomy * (Math.random() < 0.5 ? -1 : 1);
            //     randomx = Math.ceil(Math.random() * radiusRange * radiusMultiplicationFactor) + radius.min;
            //     randomx = randomx * -1;
            // }
            if(Math.random() > 0.5){
                randomx = randomx * -1;
            }
            if(Math.random() > 0.5){
                randomy = randomy * -1;
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

    findPosition(elm, side, limit, positionsAlreadyOccupied, position, itr, radius){
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

            _.each(positionsAlreadyOccupied, function(pos){
                //isOverlap = this.isThereAnOverlap(occupiedPixels, pos);
                isOverlap = this.isThereAnOverlapArray({
                    top: position.y,
                    left: position.x,
                    width: width,
                    height: height,
                    isVertical
                }, pos, isVertical);

                if(isOverlap){
                    return false;
                }
            }.bind(this));
            //console.log("positionsAlreadyOccupied.length", positionsAlreadyOccupied.length);

            //occupiedPixels = null;
            if(isOverlap){
                // if(side == "left"){
                //     if(isVertical){
                //         if(position.x - step - height < 0){
                //             position.x = center.x - height;
                //             position.y = position.y - adjustment;
                //         }else{
                //             position.x = position.x - step;
                //         }
                //     }else{
                //         if(position.x - step - width < 0){
                //             position.x = center.x;
                //             position.y = position.y - adjustment;
                //         }else{
                //             position.x = position.x - step;
                //         }
                //     }
                //     //console.log("recursion");
                //     output = this.findPosition(elm, side, limit, positionsAlreadyOccupied, position);
                // }
                // else if(side == "bottom"){
                //     if(isVertical){
                //         if(position.y + step + width > limit.y){
                //             position.y = center.y;
                //             position.x = position.x - adjustment;
                //         }else{
                //             position.y = position.y - step;
                //         }
                //     }else{
                //         if(position.y + step + height > limit.y){
                //             position.y = center.y;
                //             position.x = position.x - adjustment;
                //         }else{
                //             position.y = position.y - step;
                //         }
                //     }
                //     position.y = position.y - step;
                //     //console.log("recursion");
                //     output = this.findPosition(elm, side, limit, positionsAlreadyOccupied, position);
                // }
                // else if(side == "right"){
                //     if(isVertical){
                //         if(position.x + step + height > limit.x){
                //             position.x = center.x;
                //             position.y = position.y + adjustment;
                //         }else{
                //             position.x = position.x + step;
                //         }
                //     }else{
                //         if(position.x + step + width > limit.x){
                //             position.x = center.x;
                //             position.y = position.y + adjustment;
                //         }else{
                //             position.x = position.x + step;
                //         }
                //     }
                //     //console.log("recursion");
                //     output = this.findPosition(elm, side, limit, positionsAlreadyOccupied, position);
                // }
                // else if(side == "top"){
                //     if(isVertical){
                //         if(position.y + step + width > limit.y){
                //             position.y = center.y;
                //             position.x = position.x + adjustment;
                //         }else{
                //             position.y = position.y + step;
                //         }
                //     }else{
                //         if(position.y + step + height > limit.y){
                //             position.y = center.y;
                //             position.x = position.x + adjustment;
                //         }else{
                //             position.y = position.y + step;
                //         }
                //     }
                    
                //     //console.log("recursion");
                //     output = this.findPosition(elm, side, limit, positionsAlreadyOccupied, position);
                // }
                //console.log("isoverlap ", true, itr, radius);

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
                // if(!position){
                //     if(side == "ul"){
                //         side = "ur";
                //     }else if(side == "ur"){
                //         side = "br";                    
                //     }else if(side == "br"){
                //         side = "bl";
                //     }else if(side == "bl"){
                //         side = "ul";
                //     }
                // }
                //output = this.findPosition(elm, side, limit, positionsAlreadyOccupied, position, ++itr, radius);
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
        });
        this.forceUpdate();

        setTimeout(this.reposition.bind(this), 500);

    }

    reposition(){
        console.log($('.technical-skills').position());
        var parentHeight = $('.technical-skills').height();
        var parentWidth = $('.technical-skills').width();
        //var step = 3;
        var positionsAlreadyOccupied = [];
        $('.technical-skills .skill-item').each(function(i, s){
            console.log("i", i);

            // if(i > 5){
            //     return false;
            // }
            var isVertical = $(s).attr('class').indexOf('vertical') != -1;
            var currentElementHeight = $(s).height();
            var currentElementWidth = $(s).width();
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
                                                positionsAlreadyOccupied, 
                                                {x: parentWidth/2, y:parentHeight/2},
                                                0,
                                                null);
                }else if(i % 4 == 2){
                    pos = this.findPosition(s, 
                                                "r", 
                                                {x: parentWidth, y:parentHeight}, 
                                                positionsAlreadyOccupied, 
                                                {x: parentWidth/2, y:parentHeight/2},
                                                0,
                                                null);
                }else if(i % 4 == 3){
                    pos = this.findPosition(s, 
                                                "b", 
                                                {x: parentWidth, y:parentHeight}, 
                                                positionsAlreadyOccupied, 
                                                {x: parentWidth/2, y:parentHeight/2},
                                                0,
                                                null);
                }else if(i % 4 == 0){
                    pos = this.findPosition(s, 
                                                "l", 
                                                {x: parentWidth, y:parentHeight}, 
                                                positionsAlreadyOccupied, 
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
            positionsAlreadyOccupied.push(this.getOccupiedPixelsArray(x, y, currentElementWidth, currentElementHeight, isVertical, {x: parentWidth, y:parentHeight}));
        }.bind(this));
        
        this.setState({
            repositionComplete: true
        })

        console.log("reposition set to true");
    }

    componentDidMount(){
        setTimeout(this.reposition.bind(this), 500);
    }

    componentDidUpdate(){
        //setTimeout(this.reposition.bind(this), 500);
    }
}

module.exports = TechnicalSkills;