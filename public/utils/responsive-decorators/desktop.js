const Desktop = (constructr) => {
    return class extends constructr{
        constructor(props, context){
            super(props, context);
            this.state = this.state || {};

            this.mql = window.matchMedia("(min-width: 960px)");
            if(this.mql.matches){
                this.state.showComponent = true;
            }else{
                this.state.showComponent = false;
            }

            this.mql.addListener((mql) => {
                if(mql.matches){
                    this.setState({
                        showComponent: true
                    });
                }else{
                    this.setState({
                        showComponent: false
                    });
                }
            })
        }

        render(){
            if(this.state.showComponent){
                return super.render();
            }else{
                return null;
            }
        }
    }
}

module.exports = Desktop;