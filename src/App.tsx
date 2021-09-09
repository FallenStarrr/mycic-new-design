
import './App.css';
import   Cont  from './components/Cont'
import   Sidebar  from './components/Sidebar'
import   Head  from './components/Head'
import { 
  Layout, 
  Menu,  
  Divider,
  
} 
  from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Bday from './components/Bday';



const { Header, Sider, Content} = Layout 








function App() {
  return (
    
    <Layout>
            <Sider   className="section" style={{height: '100vh', backgroundColor: '#F6F6F9'}} width={300}>
      
               <Sidebar/>

            </Sider>
       
           <Layout>
              <Header className="section" style={{backgroundColor: '#F6F6F9',}}>
                <Head/>
              </Header>
              <Divider></Divider>
              <Content className="section" style={{marginTop: '240px'}}>
                <Cont/>
               </Content>
            </Layout>
           
            <Sider className="section" style={{ marginRight: '60px',  marginTop: '70px', backgroundColor: '#F6F6F9'}} width={300}>
                    <Bday></Bday>
            </Sider>
           
        
      </Layout>
    
  );
}

export default App;
