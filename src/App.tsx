import "./App.css";
import Aboutme from "./pages/Aboutme";
import Bday from "./components/Bday";
import Sidebar from "./components/Sidebar";
import Head from "./components/Head";
import { Layout, Menu, Divider, Space } from "antd";
import { CloseOutlined, AlignLeftOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "antd/dist/antd.css";
import Tests from "./pages/Tests";
import TEST_REST from "./components/TEST_REST";
// import useToken from "./hooks/useToken";
import { useState, useEffect, useContext } from "react";
import Auth from "./pages/Auth";
import { Context } from "./index";

import "./App.css";
import Post from "./components/Post";
const { Header, Sider, Content } = Layout;

function App() {
  // Emoji state
  const [input, setInput] = useState<string>("");
  // console.log(token)
  const [navbar, setNav] = useState<boolean>(false);
  const { store } = useContext(Context);
  const logged = store.isAuth;
  const [login, setLogin] = useState<boolean>(false);

  //   const { token, setToken } = useToken();

  // Post creation
  let [edit, setEdit] = useState<boolean>(false);
  let [text, setText] = useState<string>("");
  let [editedPost, setEditPost] = useState<string>("");
  let [showEdit, setShowEdit] = useState<boolean>(false);
  let [author, setAuthor] = useState<string>("");

  // show post edit form
  function handleEdit() {
    setEdit(true);
    console.log(edit);
    console.log(text);
  }
  // hide post edit form
  function hideEdit() {
    setEdit(false);
    console.log("hide");
  }

  function editPost() {
    setShowEdit(!showEdit);
  }

  let [posts, setPost] = useState([
    {
      author: "John Doe",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
  ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat. Duis aute irure dolor in
  reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
  culpa qui officia deserunt mollit anim id est laborum`,
      id: Date.now(),
      emoji: "😂",
    },
  ]);

  function deletePost(id: number) {
    setPost(posts.filter((post) => post.id !== id));
    console.log(posts);
  }

  function addPost() {
    setPost([...posts, { text: text, id: Date.now(), author, emoji: input }]);
    setEdit(false);
    console.log(posts);
  }

  if (!localStorage.getItem("token")) {
    return <Auth />;
  }

  return (
    <Router>
      <Switch>
        <Route path='/login'>
          <Auth />
        </Route>

        <Route>
          <div className={navbar ? "page active-page" : "page"}>
            <div>
              {navbar ? (
                <CloseOutlined
                  className='nav__logo unactive-brand-logo '
                  onClick={() => setNav(false)}
                />
              ) : (
                <AlignLeftOutlined
                  className='unactive-brand-logo'
                  style={{
                    fontSize: "30px",
                  }}
                  onClick={() => setNav(true)}
                />
              )}
            </div>
            <h1 className='nav__heading unactive-brand'> My.cic.kz </h1>
            <nav
              className={
                navbar ? "nav-nav-navigation active" : "nav-nav-navigation"
              }
            >
              <ul className='nav__list'>
                <li className='nav__item'>
                  <Link className='nav__link' to='/test_rest'>
                    TEST_REST
                  </Link>
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='/aboutme'>
                    Обо мне
                  </Link>
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='/news'>
                    Новости
                  </Link>
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='/colleagues'>
                    Коллеги
                  </Link>
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='/agree'>
                    Согласование{" "}
                  </Link>{" "}
                </li>{" "}
                <li className='nav__item'>
                  <Link className='nav__link' to='#'>
                    О Компании{" "}
                  </Link>{" "}
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='#'>
                    Рейтинг{" "}
                  </Link>{" "}
                </li>{" "}
                <li className='nav__item'>
                  <Link className='nav__link' to='#'>
                    Шеф говорит{" "}
                  </Link>{" "}
                </li>{" "}
                <li className='nav__item'>
                  <Link className='nav__link' to='#'>
                    Котировки{" "}
                  </Link>{" "}
                </li>{" "}
                <li className='nav__item'>
                  {" "}
                  <Link className='nav__link' to='#'>
                    Предстраховой осмотр{" "}
                  </Link>{" "}
                </li>{" "}
                <li className='nav__item'>
                  <Link className='nav__link' to='#'>
                    Уведомления{" "}
                  </Link>{" "}
                </li>
                <li className='nav__item'>
                  <Link className='nav__link' to='/knowledge'>
                    Обучение{" "}
                  </Link>{" "}
                </li>{" "}
              </ul>{" "}
            </nav>{" "}
            <Layout>
              <Sider
                className='section sidebar'
                style={{ background: 'white'}}
                width={300}
              >
                <Sidebar />
              </Sider>
              <Layout>
                <Header
                  className='section'
                  style={{ background: "#F6F6F9"}}
                
                >
                  <Head
                    addPost={addPost}
                    edit={edit}
                    text={text}
                    handleEdit={handleEdit}
                    hideEdit={hideEdit}
                    setText={setText}
                    author={author}
                    setAuthor={setAuthor}
                    input={input}
                    setInput={setInput}
                    editedPost={editedPost}
                    showEdit={showEdit}
                    deletePost={deletePost}
                  />
                </Header>
                <Divider> </Divider>
                <Content
                  className='section'
                  style={{
                    marginTop: "340px",
                  }}
                  onClick={hideEdit}
                >
                  <Switch>
                    <Route exact path='/news'>
                      <Post
                        setPost={setPost}
                        posts={posts}
                        deletePost={deletePost}
                        editPost={editPost}
                        showEdit={showEdit}
                        setShowEdit={setShowEdit}
                      />
                    </Route>
                    <Route path='/colleagues'> </Route>
                    <Route path='/agree'></Route>
                    <Route path='/studycenter'></Route>
                    <Route path='/talks'></Route>
                    <Route path='/aboutme'>
                      <Aboutme />
                    </Route>
                    <Route path='/knowledge'>
                      <Tests />
                    </Route>
                    <Route path='/test_rest'>
                      <TEST_REST />
                    </Route>
                  </Switch>
                </Content>
              </Layout>
              <Sider
                className='sbday'
                style={{
                  backgroundColor: "#F6F6F9",
                }}
                width={350}
              >
                <Bday />
              </Sider>
            </Layout>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
