import Carousel from "react-bootstrap/Carousel";
import React from 'react'
import './Cards.css'

function Sliding() {
    return (
      <div>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="sliding"
              src="https://media.istockphoto.com/photos/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-picture-id1018141890?k=20&m=1018141890&s=612x612&w=0&h=uMDP00MMIhlwQE77EEcoelc2oSKBT_B6avaXqtxgiow="
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h5>First slide label</h5>  */}
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="sliding"
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmluZSUyMGRpbmluZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="Second slide"
            />
            <Carousel.Caption>
              {/* <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="sliding"
              src="https://blog.doemal.com/en/wp-content/uploads/sites/2/2019/03/Features-1.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              {/* <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default Sliding
