import React from "react"
import { Container, Row} from 'reactstrap';
import Layout from "../components/layout"
import Album from "../components/album";

const Directory = () => (
  <Layout style={{ backgroundColor: '#1E2019'}} >
    <Container>
        <Row>
        <Album
            imageSrc="http://nicktorres.net/nicks_site/images/bwca17/DSC01866.JPG"
            title="BWCA 2017"
            description="Uncle Matt, Dan, and myself return to the Boundary Waters for our most difficult
             trip yet. Trekking through moose territory and camping on our own island made this an
            unforgettable experience. "
            info="Photos by Daniel Torres"
            index={2}
          ></Album>
          <Album
            imageSrc="http://nicktorres.net/nicks_site/images/bwca15/IMG_2449.png"
            imageRight={false}
            title="BWCA 2015"
            description="The Gang gets their feet wet as Dan and Sam join us for another trip to the
            Boundary Waters Canoe Area. This remote trip proved to have some beautiful views and peacful
            campsites."
            info="Photos by Nick and Daniel Torres"
            index={1}>
          </Album>
          <Album
            imageSrc="http://nicktorres.net/nicks_site/images/bwca14/IMG_1766.png"
            imageRight={true}
            title="BWCA 2014"
            description="In this album my Uncle Matt and I explore the Boundary Waters Canoe Area in search
            of big fish and wild blueberries. This week long paddle through Minnesota covered roughly
            20 lakes in the eastern part of Superior National Forest."
            info="Shot with an IPhone 4 camera "
            index={0}>
          </Album>
        </Row>
    </Container>
  </Layout>
)

export default Directory
