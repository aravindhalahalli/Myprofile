import React, { Component } from 'react';
import './App.css';
import { Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import Main from './components/Main';
import {Link} from 'react-router-dom';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
    <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Landing Page</Link>} scroll>
            <Navigation>
                <Link to ="/Resume">Resume</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Project">Project</Link>
                <Link to ="/Contactus">Contactus</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">Landing Page</Link>}>
            <Navigation> 
                <Link to ="/Resume">Resume</Link>
                <Link to ="/About">About</Link>
                <Link to ="/Project">Project</Link>
                <Link to ="/Contactus">Contactus</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
    <footer />
</div>
    );
  }
}

export default App;
