/* import React from "react";
// import ReactDOM from "react-dom";
import { Typography, Modal,Row, Col, } from "antd";
import {
    withRouter
  } from "react-router-dom";
import {CheckCircleFilled} from '@ant-design/icons';
import "../App.less";
import cat1 from '../assets/cat1.jpeg';
import cat2 from '../assets/cat2.jpeg';
import cat3 from '../assets/cat3.jpeg';
import cat4 from '../assets/cat4.jpeg';
import crosswalk1 from '../assets/crosswalk1.jpg'
import crosswalk2 from '../assets/crosswalk2.jpg'
import crosswalk3 from '../assets/crosswalk3.jpg'
import crosswalk4 from '../assets/crosswalk4.jpg'
import nocat5 from '../assets/nocat5.jpeg';
import nocat6 from '../assets/nocat6.jpeg';
import nocat7 from '../assets/nocat7.jpeg';
import nocat8 from '../assets/nocat8.jpeg';
import nocat9 from '../assets/nocat9.jpeg';
import nocat10 from '../assets/nocat10.jpeg';
import nocat11 from '../assets/nocat11.jpeg';
import nocat12 from '../assets/nocat12.jpeg';

const captchaCatImages = {
    cat1:{valid: 1, image: cat1, name: 'cat1'},
    cat2:{valid: 1, image: cat2, name: 'cat2'},
    cat3:{valid: 1, image: cat3, name: 'cat3'},
    cat4:{valid: 1, image: cat4, name: 'cat4'},

    crosswalk1:{valid: 1, image: cat1, name: 'crosswalk1'},
    crosswalk2:{valid: 1, image: cat2, name: 'crosswalk2'},
    crosswalk3:{valid: 1, image: cat3, name: 'crosswalk3'},
    crosswalk4:{valid: 1, image: cat4, name: 'crosswalk4'},

    nocat5:{valid: 0, image: nocat5, name: 'nocat5'},
    nocat6:{valid: 0, image: nocat6, name: 'nocat6'},
    nocat7:{valid: 0, image: nocat7, name: 'nocat7'},
    nocat8:{valid: 0, image: nocat8, name: 'nocat8'},
    nocat9:{valid: 0, image: nocat9, name: 'nocat9'},
    nocat10:{valid: 0, image: nocat10, name: 'nocat10'},
    nocat11:{valid: 0, image: nocat11, name: 'nocat11'},
    nocat12:{valid: 0, image: nocat12, name: 'nocat12'}
}

const { Title, Text } = Typography;
const captchaMaster = ["cats", "crosswalk"];

class Recaptcha extends React.Component{
    state={
        captchaVisible: this.props.isVisible,
        validCaptchaCount: 4,
        selectedCaptchaCount: 0,
        captchaType : captchaMaster[Math.floor(Math.random() * captchaMaster.length)] ,        
        section1: false,
        section2: false,
        section3: false,
        section4: false,
        section5: false,
        section6: false,
        section7: false,
        section8: false,
        section9: false,
        section10: false,
        section11: false,
        section12: false,
    }

    handleOk = e => {
        console.log(this.state.selectedCaptchaCount);        
        this.props.captchaDone(this.state.validCaptchaCount === this.state.selectedCaptchaCount);
        this.setState({
            captchaVisible: false,          
              selectedCaptchaCount: 0,
              captchaType : captchaMaster[Math.floor(Math.random() * captchaMaster.length)] ,        
              section1: false,
              section2: false,
              section3: false,
              section4: false,
              section5: false,
              section6: false,
              section7: false,
              section8: false,
              section9: false,
              section10: false,
              section11: false,
              section12: false,
          });
      };
    
    //   handleCancel = e => {
    //     console.log(e);
    //     this.setState({
    //       captchaVisible: false,
    //     });
    //   };


    componentDidUpdate(prevProps){
        if(this.props.isVisible !== prevProps.isVisible){
            this.setState({ captchaVisible: this.props.isVisible });
        }
    }

    //  shuffle = (a) => {
    //     for (let i = a.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [a[i], a[j]] = [a[j], a[i]];
    //     }
    //     return a;
    // }

    // setCaptchaGrid = () => {
    //     // var item = captchaMaster[captchaMaster.length * Math.random() | 0];
    //     let counter = 0, comp=[];
    //     if(this.state.captchaType === "cats"){
    //         const cat = this.shuffle(captchaCatImages);
    //         for (const [index, element] of cat.entries()) {
    //             console.log(element);
    //           }
    //     }else{
    //         // console.log(item)
    //     }
    // }

    getCheckMark = () => {
        return <CheckCircleFilled style={{color: 'white', fontSize: '20px', paddingTop: '5px', paddingLeft: '60px'}} className="after"/>;
    }

    selectImage = (val, index) => {

        this.setState({ })

        switch (index) {
            case 1:
                this.setState({ section1: !this.state.section1}, () => {this.setState({selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section1)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 2:
                this.setState({ section2: !this.state.section2}, () => {this.setState({selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section2)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 3:
                this.setState({ section3: !this.state.section3}, () => {this.setState({ selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section3)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 4:
                this.setState({ section4: !this.state.section4}, () => {this.setState({selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section4)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 5:
                this.setState({ section5: !this.state.section5 }, () => { this.setState({selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section5)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid))})})
                break;
            case 6:
                this.setState({ section6: !this.state.section6}, () => { this.setState({ selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section6)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 7:
                this.setState({ section7: !this.state.section7}, () => {this.setState({selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section7)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 8:
                this.setState({ section8: !this.state.section8}, () => {this.setState({ selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section8)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 9:
                this.setState({ section9: !this.state.section9}, () => {this.setState({selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section9)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 10:
                this.setState({ section10: !this.state.section10}, () => {this.setState({selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section10)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 11:
                this.setState({ section11: !this.state.section11}, () => {this.setState({ selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section11)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid)) })})
                break;
            case 12:
                this.setState({ section12: !this.state.section12}, () => {this.setState({selectedCaptchaCount: this.state.selectedCaptchaCount + ((this.state.section12)? (captchaCatImages[val].valid):(-1*captchaCatImages[val].valid))})})
                break;
            default:
                break;
        }
    }

    render(){
        return(
            <Modal
                    title={<div>
                            <Text style={{color: '#fff', margin: '0px', padding: '0px'}}>Select all squares with</Text>
                            <Title level={3} style={{color: '#fff', margin: '0px'}}>a {(this.state.captchaType === 'cats')? 'cat': 'crosswalk'}</Title>
                            <Text style={{color: '#fff', margin: '0px', padding: '0px'}}>Click verify, when done</Text>
                        </div>}
                    visible={this.state.captchaVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleOk}
                    // cancelText="Skip"
                    okText="Verify"
                    className="modalClass"
                    bodyStyle={{padding: '5px', margin: '0px'}}
                    >
                        {
                            (this.state.captchaType === 'cats')?
                                <>
                                <Row gutter={5} justify="center">
                                    <Col onClick={() => { this.selectImage('cat1', 1)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">
                                            <img src={cat1} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                            {
                                                (this.state.section1)&&this.getCheckMark()
                                            }                                    
                                        </div>                                
                                    </Col>
                                    <Col onClick={() => { this.selectImage('nocat5', 2)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">
                                            <img src={nocat5} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                            {
                                                (this.state.section2)&&this.getCheckMark()
                                            }                                    
                                        </div>                                 
                                    </Col>
                                    <Col onClick={() => { this.selectImage('nocat6', 3)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">
                                            <img src={nocat6} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                            {
                                                (this.state.section3)&&this.getCheckMark()
                                            }                                    
                                        </div>                                 
                                    </Col>
                                </Row>
                                <Row gutter={5} justify="center" style={{marginTop: '5px'}} >
                                    <Col onClick={() => { this.selectImage('nocat7', 4)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">        
                                            <img src={nocat7} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>                            
                                            {
                                                (this.state.section4)&&this.getCheckMark()
                                            }                                    
                                        </div> 
                                        
                                    </Col>
                                    <Col onClick={() => { this.selectImage('nocat8', 5)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">                          
                                            <img src={nocat8} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>          
                                            {
                                                (this.state.section5)&&this.getCheckMark()
                                            }                                    
                                        </div>                                 
                                    </Col>
                                    <Col onClick={() => { this.selectImage('cat2', 6)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">                                    
                                            <img src={cat2} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                            {
                                                (this.state.section6)&&this.getCheckMark()
                                            }                                    
                                        </div>                                 
                                    </Col>
                                </Row>
                                <Row gutter={5} justify="center" style={{marginTop: '5px'}}>
                                    <Col onClick={() => { this.selectImage('cat3', 7)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">                                    
                                            <img src={cat3} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                            {
                                                (this.state.section7)&&this.getCheckMark()
                                            }                                    
                                        </div> 
                                        
                                    </Col>
                                    <Col onClick={() => { this.selectImage('nocat9', 8)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">                        
                                            <img src={nocat9} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>            
                                            {
                                                (this.state.section8)&&this.getCheckMark()
                                            }                                    
                                        </div>                                 
                                    </Col>
                                    <Col onClick={() => { this.selectImage('nocat10', 9)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">                                    
                                            <img src={nocat10} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                            {
                                                (this.state.section9)&&this.getCheckMark()
                                            }                                    
                                        </div>                                 
                                    </Col>
                                </Row>
                                <Row gutter={5} justify="center" style={{marginTop: '5px'}} >
                                    <Col onClick={() => { this.selectImage('nocat11', 10)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">                                    
                                            <img src={nocat11} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                            {
                                                (this.state.section10)&&this.getCheckMark()
                                            }                                    
                                        </div>                                 
                                    </Col>
                                    <Col onClick={() => { this.selectImage('cat4', 11)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">                                    
                                            <img src={cat4} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                            {
                                                (this.state.section11)&&this.getCheckMark()
                                            }                                    
                                        </div>                                 
                                    </Col>
                                    <Col onClick={() => { this.selectImage('nocat12', 12)}} style={{cursor: 'pointer'}}>
                                        <div class="image-container">                                    
                                            <img src={nocat12} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                            {
                                                (this.state.section12)&&this.getCheckMark()
                                            }                                    
                                        </div>                                 
                                    </Col>
                                </Row>
                                </>
                            :
                            <>
                            <Row gutter={5} justify="center">
                                <Col onClick={() => { this.selectImage('crosswalk1', 1)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">
                                        <img src={crosswalk1} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                        {
                                            (this.state.section1)&&this.getCheckMark()
                                        }                                    
                                    </div>                                
                                </Col>
                                <Col onClick={() => { this.selectImage('nocat5', 2)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">
                                        <img src={nocat5} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                        {
                                            (this.state.section2)&&this.getCheckMark()
                                        }                                    
                                    </div>                                 
                                </Col>
                                <Col onClick={() => { this.selectImage('nocat6', 3)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">
                                        <img src={nocat6} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                        {
                                            (this.state.section3)&&this.getCheckMark()
                                        }                                    
                                    </div>                                 
                                </Col>
                            </Row>
                            <Row gutter={5} justify="center" style={{marginTop: '5px'}} >
                                <Col onClick={() => { this.selectImage('nocat7', 4)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">        
                                        <img src={nocat7} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>                            
                                        {
                                            (this.state.section4)&&this.getCheckMark()
                                        }                                    
                                    </div> 
                                    
                                </Col>
                                <Col onClick={() => { this.selectImage('nocat8', 5)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">                          
                                        <img src={nocat8} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>          
                                        {
                                            (this.state.section5)&&this.getCheckMark()
                                        }                                    
                                    </div>                                 
                                </Col>
                                <Col onClick={() => { this.selectImage('crosswalk2', 6)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">                                    
                                        <img src={crosswalk2} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                        {
                                            (this.state.section6)&&this.getCheckMark()
                                        }                                    
                                    </div>                                 
                                </Col>
                            </Row>
                            <Row gutter={5} justify="center" style={{marginTop: '5px'}}>
                                <Col onClick={() => { this.selectImage('crosswalk3', 7)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">                                    
                                        <img src={crosswalk3} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                        {
                                            (this.state.section7)&&this.getCheckMark()
                                        }                                    
                                    </div> 
                                    
                                </Col>
                                <Col onClick={() => { this.selectImage('crosswalk4', 8)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">                        
                                        <img src={crosswalk4 } alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>            
                                        {
                                            (this.state.section8)&&this.getCheckMark()
                                        }                                    
                                    </div>                                 
                                </Col>
                                <Col onClick={() => { this.selectImage('nocat10', 9)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">                                    
                                        <img src={nocat10} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                        {
                                            (this.state.section9)&&this.getCheckMark()
                                        }                                    
                                    </div>                                 
                                </Col>
                            </Row>
                            <Row gutter={5} justify="center" style={{marginTop: '5px'}} >
                                <Col onClick={() => { this.selectImage('nocat11', 10)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">                                    
                                        <img src={nocat11} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                        {
                                            (this.state.section10)&&this.getCheckMark()
                                        }                                    
                                    </div>                                 
                                </Col>
                                <Col onClick={() => { this.selectImage('nocat9', 11)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">                                    
                                        <img src={nocat9} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                        {
                                            (this.state.section11)&&this.getCheckMark()
                                        }                                    
                                    </div>                                 
                                </Col>
                                <Col onClick={() => { this.selectImage('nocat12', 12)}} style={{cursor: 'pointer'}}>
                                    <div class="image-container">                                    
                                        <img src={nocat12} alt="Logo" style={{maxWidth: '100px', maxHeight: '100px'}}/>
                                        {
                                            (this.state.section12)&&this.getCheckMark()
                                        }                                    
                                    </div>                                 
                                </Col>
                            </Row>
                            </>
                        }
                        
                    </Modal> 
        );
    }
}

export default withRouter(Recaptcha) */