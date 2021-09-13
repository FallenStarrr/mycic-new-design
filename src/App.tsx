
import './App.css';
import { Aboutme } from './pages/Aboutme';
import Bday from './components/Bday';
import   Cont  from './components/Cont'
import   Sidebar  from './components/Sidebar'
import   Head  from './components/Head'
import { 
  Layout, 
  Menu,  
  Divider,
 
  
} 
  from 'antd';

  import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'



const { Header, Sider, Content} = Layout 








function App() {
  return (
  <Router>
    <div className="page">

    
    <Layout>
            <Sider   className="section" style={{height: '100vh', backgroundColor: '#F6F6F9'}} width={300}>
            
                <Sidebar/>
             
              

            </Sider>
       
           <Layout>
              <Header className="section" style={{backgroundColor: '#F6F6F9'}}>
                
               
                    <Head/>
                
                
              </Header>

              <Divider></Divider>

              <Content className="section" style={{marginTop: '240px'}}>
              <Switch>
             <Route path="/news">

              
                  <Cont></Cont>
              
              
             </Route>

             <Route path="/colleagues">
            
             </Route>
             <Route path="/agree">
               
             </Route>
             <Route path="/studycenter">
               
             </Route>
             <Route path="/talks">
               
             </Route>
             <Route path="/aboutme">
            
              <Aboutme/>
              
               
             </Route>
           </Switch>
               </Content>
            </Layout>
           
            <Sider className="section" style={{  backgroundColor: '#F6F6F9', position: "absolute", right: "80px", top: "140px"}} width={350}>
                  
                      <Bday></Bday>
                   
                    
            </Sider>
           
           
           

      </Layout>

     
     
      </div>  
      </Router>    
    
  );
}

export default App;
