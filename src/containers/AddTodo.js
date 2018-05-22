import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

import { Form, Input, Button } from 'antd';
const FormItem = Form.Item;

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <Form
      layout="inline"
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }
        dispatch(addTodo(input.value));
        input.value = '';
      }}
    >
      <FormItem>
        <Input ref={node => (input = node)} />
      </FormItem>
      <FormItem>
        <Button type="primary" htmlType="submit">
          Add Todo
        </Button>
      </FormItem>
      {/* <input ref={node => (input = node)} /> */}
      {/* <button type="submit">Add Todo</button> */}
    </Form>
  );
};

export default connect()(AddTodo);
