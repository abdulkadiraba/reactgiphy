import React from 'react';

import Card from '../components/Card';

import Abdul from '../assets/images/Aba.jpeg';
import AYAM from '../assets/images/AYAM.png';
import MapleValley from '../assets/images/MapleValley.png';
import weatherDashboard from '../assets/images/weatherDashboard.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Abdulkadir Aba',
                    subTitle: 'responsivePortolio',
                    imgSrc: Abdul,
                    link: 'https://abdulkadiraba.github.io/responsivePortfolio/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'AYAM!',
                    subTitle: 'Language Translator App',
                    imgSrc: AYAM,
                    link: 'https://yaya2020130.github.io/language-translator/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'MapleValley',
                    subTitle: 'Eastern WA Girl Scouts',
                    imgSrc: MapleValley,
                    link: 'https://protected-lowlands-08660.herokuapp.com/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'weatherDashboard',
                    subTitle: 'weather',
                    imgSrc: weatherDashboard,
                    link: 'https://abdulkadiraba.github.io/weatherDashboard/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;