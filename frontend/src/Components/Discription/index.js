import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }


const Example = (props) => {
    return (
        <div>
        <br/>
        <Jumbotron>
            <h1 className="display-3">Welcome to the Profile page!</h1>
            <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-2" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p className="lead">
            <Button 
                color="primary"
                //onClick={this.props.navigation.navigate('Home') }
                href="/Home"
                >Learn More</Button>
            </p>
        </Jumbotron>
        </div>
    );
};

export default Example;