import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import FooterContent from './Footer';

import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;

const App = () => (
  <Layout>
    <Header style={{ paddingTop: '15px', paddingBottom: '15px' }}>
      <AddTodo />
    </Header>
    <Content style={{ padding: '0 25px' }}>
      <VisibleTodoList />
      <FooterContent />
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

export default App;
