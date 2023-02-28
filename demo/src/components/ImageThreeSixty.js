import React, { Component } from "react";
import { Pannellum } from "../../../src";
import audio1 from "../audio/voice-sample-1.mp3";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";

// import myImage1 from "../images/SAM_100_0357.jpg";
// import myImage2 from "../images/SAM_100_0361.jpg";
// import myImage3 from "../images/SAM_100_0367.jpg";
// import myImage4 from "../images/SAM_100_0377.jpg";
// import myImage5 from "../images/SAM_100_0378.jpg";

const steps = [
  "Image 1",
  "Image 2",
  "Image 3",
  // "Location 4",
  // "Location 5",
];

const myImage1 =
  "https://res.cloudinary.com/giglantis/image/upload/v1677576191/360/P1_akgr9g.jpg";
const myImage2 =
  "https://res.cloudinary.com/giglantis/image/upload/v1677576396/360/P2_bzrs7p.jpg";
const myImage3 =
  "https://res.cloudinary.com/giglantis/image/upload/v1677595530/360/P3_dy0zhi.jpg";
const myImage4 =
  "https://res.cloudinary.com/giglantis/image/upload/v1677576396/360/P2_bzrs7p.jpg";
const myImage5 =
  "https://res.cloudinary.com/giglantis/image/upload/v1677576191/360/P1_akgr9g.jpg";

export default class ImageThreeSixty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPhoto: myImage1,
      yaww: 180,
      test: false,
      openTextInfo: false,
      infoText: null,
      openVideoInfo: false,
      openAudioInfo: false,
      audioUrl: null,
      activeStep: 0,
      completed: {},
    };
    this.ref = React.createRef();
  }

  hanldeClickImageOne = (evt, args) => {
    this.setState({
      mediaPhoto: myImage2,
      activeStep: 1,
    });
  };

  hanldeClickImageTwo = (evt, args) => {
    this.setState({
      mediaPhoto: myImage1,
      activeStep: 0,
    });
  };

  hanldeClickImageThree = (evt, args) => {
    this.setState({
      mediaPhoto: myImage3,
      activeStep: 2,
    });
  };

  hanldeClickImageFour = (evt, args) => {
    this.setState({
      mediaPhoto: myImage4,
      activeStep: 3,
    });
  };

  hanldeClickImageFive = (evt, args) => {
    this.setState({
      mediaPhoto: myImage5,
      activeStep: 4,
    });
  };

  hanldeTextInfoClick = (evt, args) => {
    console.log(evt, args.name);
    this.setState({
      openTextInfo: true,
      infoText: "Test Info Dialog Content",
    });
  };

  hanldeVideoInfoClick = (evt, args) => {
    console.log(evt, args.name);
    this.setState({
      openVideoInfo: true,
    });
  };

  hanldeAudioInfoClick = (evt, args) => {
    console.log(evt, args.name);
    this.setState({
      openAudioInfo: true,
      audioUrl: audio1,
    });
    document.getElementById("audioPlay").play();
  };

  handleTextInfoClose = () => {
    this.setState({
      openTextInfo: false,
    });
  };

  handleVideoInfoClose = () => {
    this.setState({
      openVideoInfo: false,
    });
  };

  handleAudioInfoClose = () => {
    this.setState({
      openAudioInfo: false,
    });
  };

  handleClick = () => {
    this.setState({
      mediaPhoto: myImage2,
      mediaPhoto: myImage3,
      test: false,
    });
  };

  handleStep = (step) => () => {
    this.setState({
      activeStep: step,
    });
    switch (step) {
      case 0:
        this.setState({
          mediaPhoto: myImage1,
        });
        break;
      case 1:
        this.setState({
          mediaPhoto: myImage2,
        });
        break;
      case 2:
        this.setState({
          mediaPhoto: myImage3,
        });
        break;
      case 3:
        this.setState({
          mediaPhoto: myImage4,
        });
        break;
      case 4:
        this.setState({
          mediaPhoto: myImage5,
        });
        break;
      default:
        break;
    }
  };

  onLoad = () => {
    switch (this.state.activeStep) {
      case 0:
        var elements = document.getElementsByClassName("image-one-hp");
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove("hide");
        }
        var elementstwo = document.getElementsByClassName("image-two-hp");
        for (var i = 0; i < elementstwo.length; i++) {
          elementstwo[i].classList.add("hide");
        }
        var elementsthree = document.getElementsByClassName("image-three-hp");
        for (var i = 0; i < elementsthree.length; i++) {
          elementsthree[i].classList.add("hide");
        }
        var elementsfour = document.getElementsByClassName("image-four-hp");
        for (var i = 0; i < elementsfour.length; i++) {
          elementsfour[i].classList.add("hide");
        }
        var elementsfive = document.getElementsByClassName("image-five-hp");
        for (var i = 0; i < elementsfive.length; i++) {
          elementsfive[i].classList.add("hide");
        }
        break;
      case 1:
        var elements = document.getElementsByClassName("image-one-hp");
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.add("hide");
        }
        var elementstwo = document.getElementsByClassName("image-two-hp");
        for (var i = 0; i < elementstwo.length; i++) {
          elementstwo[i].classList.remove("hide");
        }
        var elementsthree = document.getElementsByClassName("image-three-hp");
        for (var i = 0; i < elementsthree.length; i++) {
          elementsthree[i].classList.add("hide");
        }
        var elementsfour = document.getElementsByClassName("image-four-hp");
        for (var i = 0; i < elementsfour.length; i++) {
          elementsfour[i].classList.add("hide");
        }
        var elementsfive = document.getElementsByClassName("image-five-hp");
        for (var i = 0; i < elementsfive.length; i++) {
          elementsfive[i].classList.add("hide");
        }
        break;
      case 2:
        var elements = document.getElementsByClassName("image-one-hp");
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.add("hide");
        }
        var elementstwo = document.getElementsByClassName("image-two-hp");
        for (var i = 0; i < elementstwo.length; i++) {
          elementstwo[i].classList.add("hide");
        }
        var elementsthree = document.getElementsByClassName("image-three-hp");
        for (var i = 0; i < elementsthree.length; i++) {
          elementsthree[i].classList.remove("hide");
        }
        var elementsfour = document.getElementsByClassName("image-four-hp");
        for (var i = 0; i < elementsfour.length; i++) {
          elementsfour[i].classList.add("hide");
        }
        var elementsfive = document.getElementsByClassName("image-five-hp");
        for (var i = 0; i < elementsfive.length; i++) {
          elementsfive[i].classList.add("hide");
        }
        break;
      case 3:
        var elements = document.getElementsByClassName("image-one-hp");
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.add("hide");
        }
        var elementstwo = document.getElementsByClassName("image-two-hp");
        for (var i = 0; i < elementstwo.length; i++) {
          elementstwo[i].classList.add("hide");
        }
        var elementsthree = document.getElementsByClassName("image-three-hp");
        for (var i = 0; i < elementsthree.length; i++) {
          elementsthree[i].classList.add("hide");
        }
        var elementsfour = document.getElementsByClassName("image-four-hp");
        for (var i = 0; i < elementsfour.length; i++) {
          elementsfour[i].classList.remove("hide");
        }
        var elementsfive = document.getElementsByClassName("image-five-hp");
        for (var i = 0; i < elementsfive.length; i++) {
          elementsfive[i].classList.add("hide");
        }
        break;
      case 4:
        var elements = document.getElementsByClassName("image-one-hp");
        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.add("hide");
        }
        var elementstwo = document.getElementsByClassName("image-two-hp");
        for (var i = 0; i < elementstwo.length; i++) {
          elementstwo[i].classList.add("hide");
        }
        var elementsthree = document.getElementsByClassName("image-three-hp");
        for (var i = 0; i < elementsthree.length; i++) {
          elementsthree[i].classList.add("hide");
        }
        var elementsfour = document.getElementsByClassName("image-four-hp");
        for (var i = 0; i < elementsfour.length; i++) {
          elementsfour[i].classList.add("hide");
        }
        var elementsfive = document.getElementsByClassName("image-five-hp");
        for (var i = 0; i < elementsfive.length; i++) {
          elementsfive[i].classList.remove("hide");
        }
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="image_main">
        <div className="pannellum_div">
          <Pannellum
            ref={this.ref}
            height="99.8vh"
            image={this.state.mediaPhoto}
            pitch={10}
            yaw={this.state.yaww}
            hfov={120}
            autoLoad
            author={this.state.author}
            title=""
            showZoomCtrl={false}
            onLoad={() => {
              this.onLoad();
            }}
            onScenechange={(id) => {
              console.log("Scene has change on " + id);
            }}
          >
            <Pannellum.Hotspot
              cssClass="info-hotspot image-one-hp"
              type="custom"
              pitch={2}
              yaw={-160}
              handleClick={(evt, args) => this.hanldeTextInfoClick(evt, args)}
            />
            <Pannellum.Hotspot
              cssClass="info-hotspot image-one-hp"
              type="custom"
              pitch={10}
              yaw={-67}
              handleClick={(evt, args) => this.hanldeVideoInfoClick(evt, args)}
            />

            <Pannellum.Hotspot
              cssClass="arrow-hotspot image-one-hp"
              type="custom"
              pitch={-5}
              yaw={227}
              handleClick={(evt, args) => this.hanldeClickImageThree(evt, args)}
              handleClickArg={{ name: "test" }}
            />

            <Pannellum.Hotspot
              cssClass="info-hotspot image-one-hp"
              type="custom"
              pitch={-5}
              yaw={-297}
              handleClick={(evt, args) => this.hanldeAudioInfoClick(evt, args)}
            />

            <Pannellum.Hotspot
              cssClass="arrow-hotspot image-one-hp"
              type="custom"
              pitch={-5}
              yaw={130}
              handleClick={(evt, args) => this.hanldeClickImageOne(evt, args)}
              handleClickArg={{ name: "test" }}
            />

            <Pannellum.Hotspot
              cssClass="arrow-hotspot image-two-hp hide"
              type="custom"
              pitch={-10}
              yaw={200}
              handleClick={(evt, args) => this.hanldeClickImageTwo(evt, args)}
              handleClickArg={{ name: "test" }}
            />

            <Pannellum.Hotspot
              cssClass="arrow-hotspot image-three-hp hide"
              type="custom"
              pitch={-20}
              yaw={190}
              handleClick={(evt, args) => this.hanldeClickImageTwo(evt, args)}
              handleClickArg={{ name: "test" }}
            />
          </Pannellum>

          <section className="stepper-container">
            <Stepper
              className="menu-stepper"
              nonLinear
              activeStep={this.state.activeStep}
            >
              {steps.map((label, index) => (
                <Step key={label} completed={this.state.completed[index]}>
                  <StepButton color="inherit" onClick={this.handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
          </section>

          <Dialog
            fullWidth={"sm"}
            maxWidth={"sm"}
            open={this.state.openTextInfo}
            onClose={this.handleTextInfoClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Test Info Dialog"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {this.state.infoText}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleTextInfoClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            fullWidth={"sm"}
            maxWidth={"sm"}
            open={this.state.openVideoInfo}
            onClose={this.handleVideoInfoClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/AGcTCvn-a6g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </DialogContentText>
            </DialogContent>
          </Dialog>

          <Dialog
            fullWidth={"sm"}
            maxWidth={"sm"}
            open={this.state.openAudioInfo}
            onClose={this.handleAudioInfoClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                <audio controls id="audioPlay">
                  <source src={this.state.audioUrl} type="audio/mp3" />
                  <source src={this.state.audioUrl} type="audio/ogg" />
                </audio>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleAudioInfoClose} autoFocus>
                Close
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}
