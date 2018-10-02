import React from 'react';
import ReactDOM from 'react-dom';
import {receiveTodos, receiveTodo} from './actions/todo_actions';
import configureStore from './store/store';
import App from './components/app';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const store  = configureStore();
  ReactDOM.render(<Root store = {store} />, content);
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;


  window.store = store;


});
